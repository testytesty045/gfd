import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { MapPin } from 'lucide-react';
 
const LocationCard = ({ location }) => {
  return (
    <Card className="card-hover h-full overflow-hidden">
      {location.mapEmbed && (
        <div className="h-48 overflow-hidden border-b border-gray-200">
          <iframe
            src={location.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3">{location.city}</h3>
        <div className="flex items-start gap-2 text-gray-600 mb-4">
          <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
          <p>{location.address}</p>
        </div>
      </CardContent>
    </Card>
  );
};
 
export default LocationCard;