const speedoBusRoutes = [
{ routeNo:'Route 1', from: 'Railway Station', to: 'Bhatti Chowk', type: 'Standard bus', stops: ['Ek Moriya', 'Nawaz Sharif Hospital', 'Kashmiri Gate', 'Lari Adda', 'Azadi Chowk', 'Texali Chowk'] },
{ routeNo: 'Route 2', from: 'Samanabad Mor', to: 'Bhatti Chowk', type: 'Standard bus', stops: ['Corporation Chowk', 'Taj Company', 'Sanda', 'Double Sarkan', 'Moon Market', 'Ganda Nala'] },
{ routeNo: 'Route 3', from: 'Railway Station', to: 'Shahdara Lari Adda', type: 'Standard bus', stops: ['Ek Moriya', 'Nawaz Sharif Hospital', 'Kashmiri Gate', 'Lari Adda', 'Azadi Chowk', 'Timber Market', 'METRO', 'Niazi Chowk', 'Shahdara Metro Station'] },
{ routeNo: 'Route 4', from: 'R.A. Bazar', to: 'Chungi Amar Sidhu', type: 'Standard bus', stops: ['Nadeem Chowk', 'Defence Morr', 'Shareef Market', 'Walton', 'Qainchi', 'Ghazi Chowk'] },
{ routeNo: 'Route 5', from: 'Shad Bagh Underpass', to: 'Bhatti Chowk', type: 'Mini bus', stops: ['Rajput Park', 'Madina Chowk', 'Lohay Wali Pulley', 'Badami Bagh', 'Lari Adda Gol Chakar', 'Azadi Chowk', 'Taxali Chowk'] },
{ routeNo: 'Route 6', from: 'Babu Sabu', to: 'Raj Garh Chowk', type: 'Mini bus', stops: ['Niazi Adda', 'City Bus Stand', 'Chowk Yateem Khana', 'Bhala Stop', 'Samanabad Morr', 'Chauburji', 'Riwaz Garden', 'M.A.O College', 'Firdous Cinema'] },
{ routeNo: 'Route 7', from: 'Bagrian', to: 'Chungi Amar Sidhu', type: 'Standard bus', stops: ['Depot Chowk', 'Minhaj University', 'Hamdard Chowk', 'Rehmat Eye Hospital', 'Pindi Stop', 'Peco Morr', 'Kot Lakhpat Railway Station', 'Phatak Mandi', 'Qainchi', 'Ghazi Chowk'] },
{ routeNo: 'Route 8', from: 'Doctor Hospital', to: 'Canal', type: 'Standard bus', stops: ['Wafaqi Colony', 'IBA Stop', 'Hailey College', 'Campus Pull', 'Barkat Market', 'Kalma Chowk', 'Qaddafi Stadium'] },
{ routeNo: 'Route 9', from: 'Railway Station', to: 'Sham Nagar', type: 'Mini bus', stops: ['Haji Camp', 'Shimla Pahari', 'Lahore Zoo', 'Chairing Cross', 'Ganga Ram Hospital', 'Qartaba Chowk', 'Chauburji'] },
{ routeNo: 'Route 10', from: 'Multan Chungi', to: 'Qartaba Chowk', type: 'Standard bus', stops: ['Mustafa Town', 'Karim Block Market', 'PU Examination Center', 'Bhekewal Morr', 'Wahdat Colony', 'Naqsha Stop', 'Canal', 'Ichra', 'Shama'] },
{ routeNo: 'Route 11', from: 'Babu Sabu', to: 'Main Market, Gulberg', type: 'Standard bus', stops: ['Niazi Adda', 'City Bus Stand', 'Chowk Yateem Khana', 'Scheme Morr', 'Flat Stop', 'Dubai Chowk', 'Bhekewal Morr', 'Sheikh Zaid Hospital', 'Campus Pull', 'Barkat Market', 'Kalma Chowk', 'Liberty Chowk', 'Hafeez Center', 'Mini Market'] },
{ routeNo: 'Route 12', from: 'R.A. Bazar', to: 'Civil Secretariat', type: 'Standard bus', stops: ['PAF Market', 'Girja Chowk', 'Afshan Chowk', 'Fortress Stadium','Gymkhana', 'Aitchison College', 'PC Hotel','Lahore Zoo','Chairing Cross', 'GPO', 'Anarkali'] },
{ routeNo: 'Route 13', from: 'Bagrian', to: 'Kalma Chowk', type: 'Standard bus', stops: ['Ghazi Chowk', 'UMT Stop', 'Khokhar Chowk','Akbar Chowk', 'Pindi Stop','Peco Morr', 'Phatak Mandi', 'Ittefaq Hospital', 'Model Town'] },
{ routeNo: 'Route 14', from: 'R.A. Bazar', to: 'Chungi Amar Sidhu', type: 'Standard bus', stops: ['Fauji Foundation', 'Ali View Garden', 'Bhatta Chowk', 'DHA Nursery','LESCO','Chota Ishara Stop', 'Naka Stop', 'Ghazi Chowk' ] },
{ routeNo: 'Route 15', from: 'Qartaba Chowk', to: 'Babu Sabu', type: 'Mini bus', stops: ['Hakeem M. Ajmal Khan Road', 'Gulshan Ravi Road', 'Kacha Ferozepur Road']
},
{ routeNo: 'Route 16', from: 'Railway Station', to: 'Bhatti Chowk', type: 'Mini bus', stops: ['Circular Road', 'Ek Moriya '] },
{ routeNo: 'Route 17', from: 'Canal', to: 'Railway Station', type: 'Standard bus', stops: ['Main Boulevard Shadman', 'Davis Road','Shimla Pahari','Haji Camp '] },
{ routeNo: 'Route 18', from: 'Bhatti Chowk', to: 'Shimla Pahari', type: 'Mini bus', stops: ['Circular Road', 'Nisbat Road','Abbot Road'] },
{ routeNo: 'Route 19', from: 'Main Market', to: 'Bhatti Chowk', type: 'Mini bus', stops: ['Jail Road','Lytton Road','Crust Road','Lower Mall Road'] },
{ routeNo: 'Route 20', from: 'Jain Mandar', to: 'Chowk Yateem Khana', type: 'Mini bus', stops: ['Al-Mumtaz Road','Poonch Road','Lake Road'] },
{ routeNo: 'Route 21', from: 'Depot Chowk', to: 'Thokar Niaz Baig', type: 'Standard bus', stops: ['Madar-e-Millat Road', 'Ali Road','Baig Road', 'Canal Bank Road'] },
{ routeNo: 'Route 22', from: 'Depot Chowk', to: 'Thokar Niaz Baig', type: 'Standard bus', stops: ['Madar-e-Millat Road', 'Sutlej Avenue','Shahrah Nazria-e- Pakistan Avenue'] },
{ routeNo: 'Route 23', from: 'Valencia', to: 'Thokar Niaz Baig', type: 'Mini bus', stops: ['Valencia Main Boulevard', 'Khayaban-e-Jinnah','Raiwind Road '] },
{ routeNo: 'Route 24', from: 'Multan Chungi', to: 'Ghazi Chowk', type: 'Standard bus', stops: ['College Road', 'Maulana Shaukat Ali Road','Wahdat Road'] },
{ routeNo: 'Route 25', from: 'R.A. Bazar', to: 'Railway Station', type: 'Standard bus', stops: ['Lahore-Bedian Road', 'Allama Iqbal Road'] },
{ routeNo: 'Route 26', from: 'R.A. Bazar', to: 'Daroghawala', type: 'Standard bus', stops: ['G.T Road', 'Shalimar Link Road','Tufail Road','Sarfraz Rafique Road'] },
{ routeNo: 'Route 27', from: 'BataPur', to: 'Daroghawala', type: 'Mini bus', stops: ['GT Road'] },
{ routeNo: 'Route 28', from: 'Quaid e Azam Interchange', to: 'Airport', type: 'Mini bus', stops: ['Harbanspura Road', 'Zarar Shaheed Road'] },
{ routeNo: 'Route 29', from: 'Niazi Interchange', to: 'Salamat Pura', type: 'Standard bus', stops: ['Lahore Ring Road', 'Band Road','Sue Wala Road'] },
{ routeNo: 'Route 30', from: 'Daroghawala', to: 'Airport', type: 'Standard bus', stops: ['G.T. Road', 'Shalimar Link Road'] },
{ routeNo: 'Route 31', from: 'Daroghawala', to: 'Lari Adda', type: 'Mini bus', stops: ['Chamra Mandi', 'Cooper Store','UET','Shalimar Chowk'] },
{ routeNo: 'Route 32', from: 'Shimla Pahari', to: 'Ek Moriya', type: 'Mini bus', stops: ['Durand Road', 'Queen Mary Road','Garhi Shahu Bridge','Cooper Store', 'Chamra Mandi'] },
{ routeNo: 'Route 33', from: 'Cooper Store', to: 'Mughalpura', type: 'Mini bus', stops: ['Workshop Road', 'Mughalpura Road'] },
{ routeNo: 'Route 34', from: 'Singhpura', to: 'Mughalpura', type: 'Mini bus', stops: ['Wheatman Road ', 'Griffin Road'] },
];

const allStops = [
    ...new Set(speedoBusRoutes.flatMap(route => [route.from, route.to, ...route.stops]))
  ];
  
  const fromInput = document.getElementById('from');
  const toInput = document.getElementById('to');
  const outputDiv = document.getElementById('output');
  
  function populateDropdown(dropdown, options) {
    dropdown.innerHTML = '<option value="" disabled selected>Select Stop</option>';
    options.forEach(option => {
      const optElement = document.createElement('option');
      optElement.value = option;
      optElement.textContent = option;
      dropdown.appendChild(optElement);
    });
  }
  
  populateDropdown(fromInput, allStops);
  populateDropdown(toInput, allStops);
  
  document.getElementById('routeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const fromValue = fromInput.value;
    const toValue = toInput.value;
  
    // Validate inputs
    if (!fromValue || !toValue) {
      outputDiv.textContent = 'Please select both departure and destination.';
      return;
    }
  
    if (fromValue === toValue) {
      outputDiv.textContent = 'Departure and destination cannot be the same.';
      return;
    }
  
    const matchingRoutes = speedoBusRoutes.filter(route =>
      (route.from === fromValue || route.stops.includes(fromValue)) &&
      (route.to === toValue || route.stops.includes(toValue))
    );
  
    // Display results
    outputDiv.innerHTML = ''; 
    if (matchingRoutes.length === 0) {
      outputDiv.textContent = 'No routes found.';
    } else {
      outputDiv.innerHTML = '<h2><i>Matching Routes</i></h2>';
      matchingRoutes.forEach(route => {
        const routeElement = document.createElement('div');
        routeElement.className = 'route-info';
  
        // Route number and type
        routeElement.innerHTML = `
          <p><span class="heading">Route No:</span> ${route.routeNo}</p>
          <p><span class="heading">Type:</span> ${route.type}</p>
        `;
  
        // Calculate in-between stops
        const allStopsForRoute = [route.from, ...route.stops, route.to];
        const fromIndex = allStopsForRoute.indexOf(fromValue);
        const toIndex = allStopsForRoute.indexOf(toValue);
  
        let inBetweenStops = [];
        if (fromIndex !== -1 && toIndex !== -1) {
          if (fromIndex < toIndex) {
            inBetweenStops = allStopsForRoute.slice(fromIndex + 1, toIndex);
          } else {
            inBetweenStops = allStopsForRoute.slice(toIndex + 1, fromIndex).reverse();
          }
        }
  
        // Display in-between stops
        routeElement.innerHTML += `
          <p><span class="heading">In-Between Stops:</span> ${inBetweenStops.length > 0 ? inBetweenStops.join(', ') : 'None'}</p>
        `;
  
        outputDiv.appendChild(routeElement);
      });
    }
  });