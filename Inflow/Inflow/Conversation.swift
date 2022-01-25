//
//  Conversation.swift
//  Inflow
//
//  Created by Tracy Cai on 1/23/22.
//

import SwiftUI

struct Conversation: View {
    var body: some View {
        NavigationView {
            Text("Conversations")
            NavigationLink(destination: HomePage()) {
                Text("All chats")
            }
        }
    }
}

struct Conversation_Previews: PreviewProvider {
    static var previews: some View {
        Conversation()
    }
}
