//
//  LocationManager.swift
//  WashU Shuttle
//
//  Created by Jacky Zhang on 11/17/21.
//

import UIKit
import CoreLocation

class ViewController : UIViewController, CLLocationManagerDelegate {
    var locationManager:CLLocationManager!

    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    func determineUserLocation() {
        locationManager = CLLocationManager()
        locationManager.delegate = self
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
        locationManager.requestWhenInUseAuthorization()
        
        if CLLocationManager.locationServicesEnabled() {
            locationManager.startUpdatingLocation()
            //locationManager.startUpdatingHeading()
        }
    }
}

func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
    let userLocation:CLLocation = locations[0] as CLLocation
    
    // Call stopUpdatingLocation() to stop listening for location updates,
    // other wise this function will be called every time when user location changes.
    
   // manager.stopUpdatingLocation()
    
    print("user latitude = \(userLocation.coordinate.latitude)")
    print("user longitude = \(userLocation.coordinate.longitude)")
}

func locationManager(_ manager: CLLocationManager, didFailWithError error: Error)
{
    print("Error \(error)")
}
