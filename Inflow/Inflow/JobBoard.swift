//
//  JobBoard.swift
//  Inflow
//
//  Created by Tracy Cai on 1/23/22.
//

import SwiftUI

struct JobBoard: View {
    
    var body: some View {
        ScrollView {
            VStack{
                HStack{
                    Text("Filter")
                    Spacer().frame(width: 50)
                    Text("Chat")
                }
                Divider().frame(height: 100)
                Text("Brand A")
                Divider().frame(height: 100)
                Text("Brand B")
                Divider().frame(height: 100)
                Text("Brand C")
                Divider().frame(height: 100)
                Text("Brand D")
                Divider().frame(height: 100)

            }
        }
    }
}

struct JobBoard_Previews: PreviewProvider {
    static var previews: some View {
        JobBoard()
    }
}
