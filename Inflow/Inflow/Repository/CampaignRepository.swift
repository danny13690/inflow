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
    @Published var feed: [Campaign] = []
    @Published var images: Dictionary<String, UIImage> = [:]
    
    @Published var saved: [Campaign] = []
    @Published var rejected: [Campaign] = []
    @Published var applied: [Campaign] = []
    @Published var completed: [Campaign] = []
    
    init() {
        getUser()
    }
    
    func getUser() {
        FirebaseManager.shared.store.collection("users").whereField("auth", isEqualTo: GlobalUser.auth)
            .getDocuments() { (querySnapshot, err) in
                if let err = err {
                    print("Error getting documents: \(err)")
                } else {
                    for document in querySnapshot!.documents {
                        print("\(document.documentID) => \(document.data())")
                    }
                    if querySnapshot!.documents.count != 1 {
                        print("Error, retrieved \(querySnapshot!.documents.count) documents under auth: \(FirebaseManager.shared.auth.currentUser!)")
                    } else {
                        let tmp = querySnapshot?.documents.compactMap {
                            try? $0.data(as: User.self)
                        } ?? []
                        if tmp.isEmpty {
                            print("Error, invalid user profile format on firebase")
                        } else {
                            GlobalUser.user = tmp[0]
                            print("successfully stored user with name: \(tmp[0].name ?? "no name")")
                        }
                        self.getCampaigns()
                    }
                }
        }
    }
    
    func getCampaigns() {
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
                self.getImages()
                self.buildCampaignLists()
            }
        }
    }
    
    func buildCampaignLists() {
        if !campaigns.isEmpty {
            for i in 0...campaigns.count-1 {
                
                // if in saved list, add to saved
                if (GlobalUser.user.saved_campaigns.contains(where: {$0 == campaigns[i].id})) {
                    self.saved.append(campaigns[i])
                    
                // if in applied list, add to applied
                } else if (GlobalUser.user.applied_campaigns.contains(where: {$0 == campaigns[i].id})) {
                    self.applied.append(campaigns[i])
                
                // if in completed, add to completed
                } else if (GlobalUser.user.completed_campaigns.contains(where: {$0 == campaigns[i].id})) {
                    self.completed.append(campaigns[i])
                    
                // if in rejected, add to rejected
                } else if (GlobalUser.user.rejected_campaigns.contains(where: {$0 == campaigns[i].id})) {
                    self.rejected.append(campaigns[i])
                    
                // if in none of these, add to feed
                } else {
                    self.feed.append(campaigns[i])
                }
            }
            print("saved: \(self.saved.count), applied: \(self.applied.count), completed: \(self.completed.count), rejected: \(self.rejected.count), feed: \(self.feed.count)")
        }
    }
    
    func getImages() {
        if !campaigns.isEmpty {
            for i in 0...campaigns.count-1 {
                if self.images[self.campaigns[i].id!] == nil {
                    let pathReference = FirebaseManager.shared.storage.reference(withPath: "campaigns/\(campaigns[i].id!)/image.jpg")
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
    }
    
    func add(_ campaign: Campaign) {
        do {
            _ = try FirebaseManager.shared.store.collection(path).addDocument(from: campaign)
        } catch {
            fatalError("Adding campaign failed")
        }
    }
}
