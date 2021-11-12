//
//  WashU_ShuttleApp.swift
//  WashU Shuttle
//
//  Created by Michael Filippini on 11/4/21.
//

import SwiftUI
import Firebase

@main
struct WashU_ShuttleApp: App {
    
    init() {
        FirebaseApp.configure()
    }
    
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
