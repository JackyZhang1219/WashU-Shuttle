//
//  ContentView.swift
//  WashU Shuttle
//
//  Created by Michael Filippini on 11/4/21.
//

import SwiftUI
import MapKit
import UIKit
//import LBBottomSheet

struct ContentView: View {
    @StateObject private var viewModel  = ContentViewModel()

    @State private var offset: CGFloat = 200
    @State private var isInitialOffsetSet = false

//    func getLocations {
//        MKPlacemark *placemark1 = [[MKPlacemark alloc] initWithPlacemark:mapItem1.placemark];
//
//        MKMapItem *item = [[MKMapItem alloc] initWithPlacemark:placemark1];
//
//        NSLog(@"placemark1.name is - %@", placemark1.name)
//    }
    
    var body: some View {
        ZStack {
            //this is the map view
            Map(coordinateRegion: $viewModel.region, showsUserLocation: true)
                .ignoresSafeArea(.all)
                //.accentColor(Color(.systemPink))
                .onAppear {
                    viewModel.checkIfLocationServicesIsEnabled()
                    //function to calculuate route and display overlay
                }
            
            //this is for the bottom sheet (slide up) view
            GeometryReader { proxy in
                ZStack {
                    //Blur
                    BlurView(style: .systemThinMaterialDark)
                    
                    //this is where the contents of the bottom sheet will go
                    DrawerView()
                }
            }
            .offset(y: offset)
            .gesture(
                DragGesture()
                    .onChanged { value in
                        let startLocation = value.startLocation
                        offset = startLocation.y + value.translation.height
                    }
            )
            .onAppear {
                if !isInitialOffsetSet {
                    offset = UIScreen.main.bounds.height - 150
                    isInitialOffsetSet = true
                }
            }
        }
        .ignoresSafeArea(.all, edges: .all)
       
    }
}

//Blurred View
struct BlurView: UIViewRepresentable {
    let style: UIBlurEffect.Style
    
    func makeUIView(context: Context) -> UIVisualEffectView {
        let view = UIVisualEffectView(
            effect: UIBlurEffect(style: style)
        )
        
        return view
    }
    
    func updateUIView(_ uiView: UIVisualEffectView, context: Context) {
        //do nothing
    }
}

//Drawer View - view in the bottom sheet
struct DrawerView: View {
    @State var text: String = ""
    @State private var search: String = ""
    
    var body: some View {
        VStack {
            //the "pill" that indicates to users that view is draggable
            Capsule()
                .frame(width: 100, height: 7)
                .foregroundColor(Color.white)
                .padding(.top, 7)
            
            //the search bar
            HStack {
                TextField("Search", text: $search, onEditingChanged: { _ in })
                {
                    //commit
                }.textFieldStyle(RoundedBorderTextFieldStyle())
                    .padding()
                    //.offset(y: 44)

                Button(action: {
                    //this is where the action for button will go
                }, label: {
                    Image(systemName: "magnifyingglass")
                        .foregroundColor(.white)
                        .frame(width: 50, height: 50)
                        .background(Color.blue)
                        .padding()
                })
            }
//            TextField("Search", text: $text)
//                .padding()
//                .background(Color(.systemBackground))
//                .cornerRadius(7)
            
            //these are just buttons i guess
            HStack(alignment: .center) {
                Button(action: {
                    
                }, label: {
                    Image(systemName: "bell")
                        .foregroundColor(.white)
                        .frame(width: 50, height: 50)
                        .background(Color.blue)
                        .clipShape(Circle())
                })
            }
            
            Spacer()
        }
    }
}


//struct ContentView_Previews: PreviewProvider {
//    static var previews: some View {
//        ContentView()
//    }
//}
//
//struct view_controller: UIViewController {
//    var resultSearchController:UISearchController? = nil
//
//    func viewDidLoad() {
//        let search = UISearchController(searchResultsController: nil)
//        search.searchResultsUpdater = self
//        search.obscuresBackgroundDuringPresentation = false
//        search.searchBar.placeholder = "Type something here to search"
//        navigationItem.searchController = search
//        }
//
//    func updateSearchResults(for searchController: UISearchController) {
//        guard let text = searchController.searchBar.text else { return }
//        print(text)
//    }
//}

