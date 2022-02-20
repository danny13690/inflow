//
//  InflowApp.swift
//  Inflow
//
//  Created by Tracy Cai on 1/21/22.
//

import SwiftUI
import Firebase

@main


struct InflowApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
    
}

//import FirebaseDatabase
//
//var ref: DatabaseReference!
//
//ref = Database.database().reference()
//https://www.letsbuildthatapp.com/course_video?id=7135
class FirebaseManager: NSObject {

    let auth: Auth
//    let ref = DatabaseRefer

    static let shared = FirebaseManager()

    override init() {
        FirebaseApp.configure()

        self.auth = Auth.auth()

        super.init()
        
    }

    
}

