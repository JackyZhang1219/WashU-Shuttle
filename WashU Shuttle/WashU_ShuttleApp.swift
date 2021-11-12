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
        var ref: DatabaseReference!

        ref = Database.database().reference()
        ref.setValue(["working":true])
    }
    
    
    
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
