//
//  ContentView.swift
//  WashU Shuttle
//
//  Created by Michael Filippini on 11/4/21.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        MapView()
            .edgesIgnoringSafeArea(.all)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
