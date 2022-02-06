//
//  SearchResults.swift
//  WashU Shuttle
//
//  Created by Jacky Zhang on 12/2/21.
//

import Foundation
import MapKit
import CoreLocation

class SearchResults: NSObject {
    func getSearchResults (input: String, region: MKCoordinateRegion) -> [CLLocationCoordinate2D] {
        var results: [CLLocationCoordinate2D] = []
        //create searchrequest object
        let searchRequest = MKLocalSearch.Request()
        searchRequest.naturalLanguageQuery = input
        
        //limit the search region
        searchRequest.region = region
        
        let search = MKLocalSearch(request: searchRequest)
        
        //get all the results
        search.start(completionHandler: {(response, error) in
            guard let response = response else {
                print("Error: \(error?.localizedDescription ?? "Unknown error").")
                return
            }

            for item in response.mapItems {
                results.append(item.placemark.coordinate)
            }
        })
                     
        return results
    }
}
