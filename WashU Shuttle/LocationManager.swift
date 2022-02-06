//
//  LocationManager.swift
//  WashU Shuttle
//
//  Created by Jacky Zhang on 11/17/21.
//

import UIKit
import CoreLocation

class LocationManager : UIViewController, CLLocationManagerDelegate {
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
    if let location = locations.last {
            let latitude = location.coordinate.latitude
            let longitude = location.coordinate.longitude
    }
}

func locationManager(_ manager: CLLocationManager, didFailWithError error: Error)
{
    print("Error")
}
