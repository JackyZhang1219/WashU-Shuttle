////
////  ContentViewModel.swift
////  WashU Shuttle
////
////  Created by Jay Won on 11/11/21.
//// This is the map view
//
//import MapKit
//
//
//final class ContentViewModel: NSObject, ObservableObject, CLLocationManagerDelegate{
//    @Published var region = MKCoordinateRegion(center: MapDetails.startingLocation, span: MapDetails.defaultSpan)
//    
//    var locationManager: LocationManager
//    
//    func checkIfLocationServicesIsEnabled() {
//        if CLLocationManager.locationServicesEnabled() {
//            locationManager.determineUserLocation()
//            //locationManager?.desiredAccuracy = kCLLocationAccuracyBest
//        } else {
//            print("Show an alert letting them know this is off and to go turn it on")
//        }
//    }
//    
//    private func checkLocationAuthorization() {
//        guard let locationManager:CLLocationManager? else { return }
//        
//        switch locationManager.authorizationStatus {
//
//            case .notDetermined:
//                locationManager.requestWhenInUseAuthorization()
//            case .restricted:
//                print("Your location is restricted likely due to parental controls")
//            case .denied:
//                print("You have denied app location permissions. Go into settings to change it")
//            case .authorizedAlways, .authorizedWhenInUse:
//                //i am getting issues with this case here, figure it out
//                //region = MKCoordinateRegion(center: MapDetails.startingLocation, span: MapDetails.defaultSpan)
//                //region = MKCoordinateRegion(center: locationManager.location!.coordinate, span: MapDetails.defaultSpan)
//                break
//            @unknown default:
//                break
//        }
//    }
//    
//    func locationManagerDidChangeAuthorization(_ manager: CLLocationManager) {
//        checkLocationAuthorization()
//    }
//    
//}
