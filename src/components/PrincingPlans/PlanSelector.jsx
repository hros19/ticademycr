import React, { useState } from 'react';

function PlanSelector({ onPlanChange }) {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    onPlanChange(plan);
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-[#2A0A1B] rounded-full p-1 flex flex-wrap gap-2 sm:gap-4">
        <button
          onClick={() => handlePlanChange('monthly')}
          className={`px-4 py-1 rounded-full text-sm transition-colors font-bold ${
            selectedPlan === 'monthly' ? 'bg-white text-orange-700' : 'text-white'
          }`}
        >
          Mes a Mes
        </button>
        <button
          onClick={() => handlePlanChange('yearly')}
          className={`px-4 py-1 rounded-full text-sm transition-colors font-bold ${
            selectedPlan === 'yearly' ? 'bg-white text-orange-700' : 'text-white'
          }`}
        >
          Todo el año
        </button>
        <button
          onClick={() => handlePlanChange('private')}
          className={`px-4 py-1 rounded-full text-sm transition-colors font-bold ${
            selectedPlan === 'private' ? 'bg-white text-orange-700' : 'text-white'
          }`}
        >
          Clases Privadas
        </button>
      </div>
    </div>
  );
}

export default PlanSelector;
