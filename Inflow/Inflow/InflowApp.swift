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
//            ContentView()
            FeedView(feedViewModel: FeedViewModel())
        }
    }
}


class FirebaseManager: NSObject {
    let auth: Auth
    let store: Firestore
    static let shared = FirebaseManager()
    
    override init() {
        FirebaseApp.configure()
        self.auth = Auth.auth()
        self.store = Firestore.firestore()
        super.init()
    }
    
}


