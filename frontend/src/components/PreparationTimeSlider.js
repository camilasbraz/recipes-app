import React, { useState, useEffect } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

const PreparationTimeSlider = () => {
  const [minPreparationTime, setMinPreparationTime] = useState(1); // Valor mínimo padrão
  const [maxPreparationTime, setMaxPreparationTime] = useState(20); // Valor máximo padrão
  const [selectedTime, setSelectedTime] = useState(minPreparationTime); // Valor selecionado


  useEffect(() => {
    fetch('https://recipes-app-api-camilasbraz.vercel.app/receitas/tempo') // Substitua pela URL real da API para buscar os dados da tabela
      .then(response => response.json())
      .then(data => {
        const timesInMinutes = data.map(item => {
          if (item.hours) {
            return item.hours * 60; // Convert hours to minutes
          } else if (item.minutes) {
            return item.minutes;
          } else {
            return 0; // Default value if no time is provided
          }
        });
        
        const minTime = Math.min(...timesInMinutes);
        const maxTime = Math.max(...timesInMinutes);
        setMinPreparationTime(minTime);
        setMaxPreparationTime(maxTime);
        setSelectedTime(minTime);
      })
      .catch(error => console.error('Erro ao buscar os dados:', error));
  }, []);

  const handleSliderChange = value => {
    setSelectedTime(value);
  };
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={18}>
        <Slider
          min={minPreparationTime}
          max={maxPreparationTime}
          value={selectedTime}
          onChange={handleSliderChange}
        />
      </Col>
      <Col xs={24} sm={6}>
        <Row gutter={[8, 0]} align="middle">
          <Col span={16}>
            <InputNumber
              min={minPreparationTime}
              max={maxPreparationTime}
              value={selectedTime}
              onChange={handleSliderChange}
            />
          </Col>
          <Col span={8}>
            <span>minutos</span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PreparationTimeSlider;
