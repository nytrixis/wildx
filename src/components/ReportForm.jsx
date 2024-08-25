// src/components/ReportForm.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './ReportForm.css';

const ReportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grievance: '',
    description: '',
    location: '',
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log(formData, file);
    // Reset form after submission
    setFormData({ name: '', phone: '', grievance: '', description: '', location: '' });
    setFile(null);
  };

  // Sample data for the map
  const dangerZones = [
    { lat: 20.5937, lng: 78.9629, level: 'red', animal: 'Tiger' },
    { lat: 21.5560, lng: 88.5060, level: 'orange', animal: 'Elephant' },
    { lat: 13.0827, lng: 80.2707, level: 'yellow', animal: 'Snake' },
  ];

  return (
    <div className="report-container">
      <form onSubmit={handleSubmit} className="report-form">
        <h2>Wildlife Incident Report</h2>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className='form-input' />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className='form-input' />
        <input type="text" name="grievance" value={formData.grievance} onChange={handleChange} placeholder="Grievance (one line)" required className='form-input' />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Detailed Description" required className='form-input' />
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Exact Location" required className='form-input' />
        <input type="file" onChange={handleFileChange} accept=".doc,.docx,image/*,video/*" className='form-input' id='file-input' />
        <button type="submit">Submit Report</button>
      </form>

      <div className="map-container">
        <h3>Wildlife Danger Zones</h3>
        <MapContainer center={[20.5937, 78.9629]} zoom={4} style={{ height: '400px', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {dangerZones.map((zone, index) => (
            <CircleMarker
              key={index}
              center={[zone.lat, zone.lng]}
              radius={20}
              fillColor={zone.level}
              color={zone.level}
              fillOpacity={0.7}
            >
              <Popup>{zone.animal} danger zone</Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default ReportForm;
