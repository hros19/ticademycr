import React, { useState } from 'react';
import { Header } from '../PrincingPlans/Header';
import PlanSelector from '../PrincingPlans/PlanSelector';
import FeaturesList from '../PrincingPlans/FeaturesList';
import PrivateFeatures from '../PrincingPlans/PrivateFeatures';
import PricingCard from '../PrincingPlans/PrincingCard';
import SignupSection from '../Schedules&Curriculum/SingUpSection'

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const plans = {
    monthly: {
      individual: { price: '₡25.000', subtext: 'al mes' },
      group: { price: '₡20.000', subtext: 'al mes por persona' }
    },
    yearly: {
      individual: { price: '₡100.000', subtext: 'pago único' },
      group: { price: '₡90.000', subtext: 'por persona pago único' }
    }
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const commonFeatures = [
    'Acceso al simulador de exámenes',
    '12 horas de tutoría todo el mes',
    'Una clase por semana todo el mes'
  ];
  const individualFeatures = [...commonFeatures, 'Una persona'];
  const groupFeatures = [...commonFeatures, 'Acceso grupal'];

  return (
    <div className="p-4 w-full h-full flex flex-col items-center justify-center">
      <Header />
      <PlanSelector onPlanChange={handlePlanChange} />
      {/* Content */}
      <div className="rounded-lg w-full sm:w-[70%]">
        {/* if year or month is selected */}
        {(selectedPlan === 'yearly' || selectedPlan === 'monthly') && <FeaturesList />}
        {selectedPlan === 'private' && <PrivateFeatures />}
        {/* if year is selected */}
        {selectedPlan === 'yearly' && (
          <div className="bg-[#4A192C] text-white p-3 rounded mt-6 text-sm text-center">
            Todo el año implica clases desde febrero hasta la realización del examen
          </div>
        )}
        <div className="space-y-4 mt-8">
        {/* Check if the selected plan is 'yearly' or 'monthly' */}
        {(selectedPlan === 'yearly' || selectedPlan === 'monthly') && (
            <>
            {/* Individual Plan */}
            <PricingCard 
                title="Inscripción individual"
                price={selectedPlan === 'monthly' ? plans.monthly.individual.price : plans.yearly.individual.price}
                subtext={selectedPlan === 'monthly' ? plans.monthly.individual.subtext : plans.yearly.individual.subtext}
                features={individualFeatures}
                isGroup={false}
            />
            
            {/* Group Plan */}
            <PricingCard 
                title="Inscripción grupal"
                price={selectedPlan === 'monthly' ? plans.monthly.group.price : plans.yearly.group.price}
                subtext={selectedPlan === 'monthly' ? plans.monthly.group.subtext : plans.yearly.group.subtext}
                features={groupFeatures}
                isGroup={true}
            />
            </>
        )}
        </div>
      </div>
      <SignupSection/>
    </div>
  );
};

export default PricingPlans;
