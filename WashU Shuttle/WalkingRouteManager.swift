//
//  GetWalkingRoute.swift
//  WashU Shuttle
//
//  Created by Jacky Zhang on 11/18/21.
//

import Foundation
import MapKit

class WalkingRouteManager: NSObject, ObservableObject {
    let request = MKDirections.Request()
    
    func findWalkingRoute (start: MKMapItem?, end: MKMapItem?, needsAlternateRoutes: Bool, transportType: MKDirectionsTransportType, routeMap: MKMapView!) {
        request.source = MKMapItem.forCurrentLocation()
        request.destination = end
        request.requestsAlternateRoutes = needsAlternateRoutes
        request.transportType = transportType
        let map = routeMap
    
        let directions = MKDirections(request: request)

        directions.calculate { [unowned self] response, error in
            guard let unwrappedResponse = response else { return }
            
            self.showRoute(unwrappedResponse, routeMap: map)
        }
    }
        
    func showRoute(_ response: MKDirections.Response, routeMap: MKMapView!) {
        
        for route in response.routes {
            
            routeMap.addOverlay(route.polyline,
                         level: MKOverlayLevel.aboveRoads)
            
            for step in route.steps {
                print(step.instructions)
            }
        }
        
    }

//    func mapView(_ mapView: MKMapView, rendererFor
//            overlay: MKOverlay) -> MKOverlayRenderer {
//        let renderer = MKPolylineRenderer(overlay: overlay)
//
//        renderer.strokeColor = UIColor.blue
//        renderer.lineWidth = 5.0
//        return renderer
//    }
}
