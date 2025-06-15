import React from 'react';
import { Card, CardContent } from '../../components/ui/card';

const BenefitCard = ({ benefit }) => {
  return (
    <Card className="card-hover h-full border-t-4 border-primary transition-all duration-300">
      <CardContent className="p-8 text-center">
        <div className="text-5xl mb-6 text-primary mx-auto">{benefit.icon}</div>
        <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
        <p className="text-gray-600">{benefit.description}</p>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;