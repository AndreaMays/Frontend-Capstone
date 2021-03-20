import React from "react"
import "./Location.css"

export const LocationCard = ({location}) => (
    <address class="location">
        <div>Select a location</div>
        <div>Location: {location.address}</div>
    </address>
)