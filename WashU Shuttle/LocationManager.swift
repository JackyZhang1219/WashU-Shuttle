//
//  LocationManager.swift
//  WashU Shuttle
//
//  Created by Jacky Zhang on 11/17/21.
//

import UIKit
import MapKit
import Foundation
import CoreLocation

enum MapDetails {
    static let startingLocation = CLLocationCoordinate2D(latitude: 40.759211, longitude: -73.984638)
    static let defaultSpan = MKCoordinateSpan(latitudeDelta: 0.02, longitudeDelta: 0.02)
}

class LocationManager : NSObject, ObservableObject, CLLocationManagerDelegate{
    private let locationManager = CLLocationManager()
    @Published var region = MKCoordinateRegion(center: MapDetails.startingLocation, span: MapDetails.defaultSpan)
    @Published var location = CLLocation()
    @Published var lat: String = ""
    @Published var lastKnownLocation: CLLocation?

    func startUpdating() {
            self.locationManager.delegate = self
            self.locationManager.desiredAccuracy = kCLLocationAccuracyBest
            self.locationManager.requestWhenInUseAuthorization()
            self.locationManager.startUpdatingLocation()
        }
        
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        lastKnownLocation = locations.last
        print(lastKnownLocation)
    }
    
//    func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
//
//            switch status {
//            case .notDetermined:
//                print("notDetermined")
//                manager.requestWhenInUseAuthorization()
//            case .restricted:
//                print("restricted")
//                // Inform user about the restriction
//                break
//            case .denied:
//                print("deined")
//                // The user denied the use of location services for the app or they are disabled globally in Settings.
//                // Direct them to re-enable this.
//                break
//            case .authorizedAlways, .authorizedWhenInUse:
//                print("authorized")
//                manager.startUpdatingLocation()
//            }
//        }

    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error)
    {
        print("Error")
    }
}

