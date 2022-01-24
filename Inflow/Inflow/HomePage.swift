//
//  HomePage.swift
//  Inflow
//
//  Created by Tracy Cai on 1/23/22.
//

import SwiftUI

struct HomePage: View {
    var body: some View {
        ScrollView {
            VStack{
                HStack{
                    Text("Filter")
                    Spacer().frame(width: 50)
                    Text("Chat")
                }
                Divider().frame(height: 100)
                Text("Chat A")
                Divider().frame(height: 100)
                Text("Chat B")
                Divider().frame(height: 100)
                Text("Chat C")
                Divider().frame(height: 100)
                Text("Chat D")
                Divider().frame(height: 100)

            }
        }
    }
}

struct HomePage_Previews: PreviewProvider {
    static var previews: some View {
        HomePage()
    }
}
