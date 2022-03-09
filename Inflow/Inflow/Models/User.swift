//
//  CampainObject.swift
//  Inflow
//
//  Created by Danny Du on 2/19/22.
//

import Firebase
import FirebaseFirestoreSwift

struct User: Identifiable, Codable {
    @DocumentID var id: String?
    var name: String?
    var age: Int?
    var gender: String?
    var location: String?
    var reach: Int?
    var instagram_handle: String?
    
    //campaigns
    var saved_campaigns: [String]
    var rejected_campaigns: [String]
    var applied_campaigns: [String]
    var completed_campaigns: [String]
    
    //following
    var hashtags_following: [String]
    var brands_following: [String]
    
    // fake data does not have
    var auth: String?
    var email: String?
}
