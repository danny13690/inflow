//
//  CampainObject.swift
//  Inflow
//
//  Created by Danny Du on 2/19/22.
//

import Firebase
import FirebaseFirestoreSwift

struct Filters: Codable {
    // limit to 2 memebrs per array, [low, high]
    var follower: [Int]?
    var engagement: [Float]?
    
    // as many items as needed
    var locations: [String]?
}

struct Campaign: Identifiable, Codable {
    @DocumentID var id: String?
    var name: String
    var description: String
    
    // as many items as needed
    var deliverables: [String]
    var compensation: [String]
    var hashtags: [String]?
    
    // user management
    var rejected_users: [String]?
    var saved_users: [String]?
    var applied_users: [String]?
    var completed_uesrs: [String]?
    
    // brand information
    var brandID: String?
    var brandName: String?
    
    var ended: Bool?
    
    // limit to 2 memebrs per array, [start,end]
    var signUpPeriod: [String]?
    var campaignPeriod: [String]?
    
    // company internal parameters
    var industry: String?
    
    // see struct above
    var filters: Filters
}
