//
//  JobInfo.swift
//  Inflow
//
//  Created by Tracy Cai on 1/23/22.
//

import SwiftUI

struct JobInfo: View {
    var body: some View {
        NavigationView {
            NavigationLink(destination: Conversation()) {
                Text("Job description")
            }
        }
    }
}

struct JobInfo_Previews: PreviewProvider {
    static var previews: some View {
        JobInfo()
    }
}
