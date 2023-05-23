import React, { useState } from 'react';
import './Nutrient.css';

const Nutrient = () => {
  const [crop, setCrop] = useState('');
  const [nitrogen, setNitrogen] = useState(0);
  const [phosphorus, setPhosphorus] = useState(0);
  const [ammonium, setAmmonium] = useState(0);

  const handleCropChange = (e) => {
    setCrop(e.target.value);
  };

  const handleNitrogenChange = (e) => {
    setNitrogen(parseInt(e.target.value));
  };

  const handlePhosphorusChange = (e) => {
    setPhosphorus(parseInt(e.target.value));
  };

  const handleAmmoniumChange = (e) => {
    setAmmonium(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fertilizer recommendation logic goes here
    // You can calculate the recommended quantities based on the selected crop and nutrient values

    // Example recommendation calculation
    const nitrogenRecommendation = nitrogen * 2;
    const phosphorusRecommendation = phosphorus * 1.5;
    const ammoniumRecommendation = ammonium * 1.2;

    alert(`Fertilizer recommendation for ${crop}:
      Nitrogen: ${nitrogenRecommendation} kg
      Phosphorus: ${phosphorusRecommendation} kg
      Ammonium: ${ammoniumRecommendation} kg`);
  };

  return (
    <div className="container container1">
      <h2>Fertilizer Recommendation Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group1">
          <label>Crop:</label>
          <select value={crop} onChange={handleCropChange} className='select1'>
            <option value="">Select a crop</option>
            <option value="Crop A">Paddy</option>
            <option value="Crop B">Maize</option>
            <option value="Crop C">Chickpea</option>
            <option value="Crop D">Blackgram</option>
            <option value="Crop E">Lentil</option>
            <option value="Crop F">Promgranate</option>
            <option value="Crop G">Mango</option>
            <option value="Crop H">Watermelon</option>
            <option value="Crop I">Coconut</option>
            <option value="Crop J">Cotton</option>
          </select>
        </div>
        <div className="form-group1">
          <label className='label1'>Nitrogen (kg):</label>
          <input type="number" value={nitrogen} classname="input1" onChange={handleNitrogenChange} />
        </div>
        <div className="form-group1">
          <label className='label1'>Phosphorus (kg):</label>
          <input  classname="input1"  type="number" value={phosphorus} onChange={handlePhosphorusChange} />
        </div>
        <div className="form-group1">
          <label className='label1'>Ammonium (kg):</label>
          <input  classname="input1"  type="number" value={ammonium} onChange={handleAmmoniumChange} />
        </div>
        <button type="submit b1">Calculate</button>
      </form>
    </div>
  );
};

export default Nutrient;
