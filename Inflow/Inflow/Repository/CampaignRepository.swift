//
//  CampaignRepository.swift
//  Inflow
//
//  Created by Danny Du on 2/19/22.
//

import Foundation
import FirebaseFirestore
import Combine

final class CampaignRepository: ObservableObject {
    private let path = "campaigns"
    @Published var campaigns: [Campaign] = []
    @Published var images: Dictionary<String, UIImage> = [:]
    
    init() {
        get()
    }
    
    func get() {
        FirebaseManager.shared.store.collection(path).addSnapshotListener { (snapshot, err) in
            if let err = err {
                print("Get campaigns failed.")
                print(err)
            } else {
                print("successfully obtained \(snapshot!.documents.count) campaigns")
                self.campaigns = snapshot?.documents.compactMap {
                    try? $0.data(as: Campaign.self)
                } ?? []
                print("successfully saved \(self.campaigns.count) campaigns")
            }
        }
        getImages()
    }
    
    func getImages() {
        if !campaigns.isEmpty {
            for i in 0...campaigns.count-1 {
                let pathReference = FirebaseManager.shared.storage.reference(withPath: "campaigns/\(campaigns[i].id)/stars.jpg")
                pathReference.getData(maxSize: 1 * 1024 * 1024) { data, error in
                  if let error = error {
                    print("Get campaign images failed")
                    print(error)
                  } else {
                    // Data for "images/island.jpg" is returned
                    let image = UIImage(data: data!)
                      self.images[self.campaigns[i].id!] = image
                  }
                }
            }
        }
    }
    
    func add(_ campaign: Campaign) {
        do {
            _ = try FirebaseManager.shared.store.collection(path).addDocument(from: campaign)
        } catch {
            fatalError("Adding campaign failed")
        }
    }
}
