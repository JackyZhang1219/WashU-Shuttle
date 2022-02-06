//
//  LocationManager.swift
//  WashU Shuttle
//
//  Created by Jacky Zhang on 11/17/21.
//

import UIKit
import MapKit
import CoreLocation


enum MapDetails {
    static let startingLocation = CLLocationCoordinate2D(latitude: 38.64652, longitude: -90.30655)
    static let defaultSpan = MKCoordinateSpan(latitudeDelta: 0.02, longitudeDelta: 0.02)
}

final class LocationManager : UIViewController, ObservableObject, CLLocationManagerDelegate{
    var locationManager:CLLocationManager!
    @Published var region = MKCoordinateRegion(center: MapDetails.startingLocation, span: MapDetails.defaultSpan)

    override func viewDidLoad() {
        super.viewDidLoad()
        locationManager.delegate = self
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
    }
}

func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {

        switch status {
        case .notDetermined:
            print("notDetermined")
            manager.requestWhenInUseAuthorization()
        case .restricted:
            print("restricted")
            // Inform user about the restriction
            break
        case .denied:
            print("deined")
            // The user denied the use of location services for the app or they are disabled globally in Settings.
            // Direct them to re-enable this.
            break
        case .authorizedAlways, .authorizedWhenInUse:
            print("authorized")
            if(manager.locationServicesEnabled){
                manager.startUpdatingLocation()
            }
        }
    }

func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
    if let location = locations.last {
            let latitude = location.coordinate.latitude
            let longitude = location.coordinate.longitude
    }
}

func locationManager(_ manager: CLLocationManager, didFailWithError error: Error)
{
    print("Error")
}
