//
//  InflowApp.swift
//  Inflow
//
//  Created by Tracy Cai on 1/21/22.
//

import SwiftUI
import Firebase
import FirebaseFirestore

@main


struct InflowApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
//            FeedView(feedViewModel: FeedViewModel())
        }
    }
}


class FirebaseManager: NSObject {
    let auth: Auth
    let store: Firestore
    let storage: Storage
    static let shared = FirebaseManager()
    
    override init() {
        FirebaseApp.configure()
        self.auth = Auth.auth()
        self.store = Firestore.firestore()
        self.storage = Storage.storage()
        super.init()
    }
    
}

class GlobalUser {
    static var auth = ""
    static var email = ""
    static var user = User(saved_campaigns: [], rejected_campaigns: [], applied_campaigns: [], completed_campaigns: [], hashtags_following: [], brands_following: [])
    static var userRef = FirebaseManager.shared.store.collection("users").document("2fG8WYHYmpZjMm1RCwB7")
    
//    func updateUser() {
//        do {
//            try GlobalUser.userRef.setData(from: GlobalUser.user)
//        } catch {
//            print("User update failed with : \(error)")
//        }
//    }

}

