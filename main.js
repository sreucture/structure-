const syncPointer = ({ x: pointerX, y: pointerY }) => {
    const x = pointerX.toFixed(2)
    const y = pointerY.toFixed(2)
    const xp = (pointerX / window.innerWidth).toFixed(2)
    const yp = (pointerY / window.innerHeight).toFixed(2)
    document.documentElement.style.setProperty('--x', x)
    document.documentElement.style.setProperty('--xp', xp)
    document.documentElement.style.setProperty('--y', y)
    document.documentElement.style.setProperty('--yp', yp)
  }
  document.body.addEventListener('pointermove', syncPointer)
  
  document.getElementById('showStructure').addEventListener('click', function() {
    const pValue = document.getElementById('pSelect').value;
    const tplValue = document.getElementById('tplSelect').value;
    const lifeValue = document.getElementById('lifeSelect').value;
    const typeValue = document.getElementById('typeSelect').value;
    const rigideOption = document.getElementById('rigideOptions').value;
  
    if (!pValue || !tplValue || !lifeValue || !typeValue || !rigideOption) {
        alert("Veuillez sélectionner des options pour P, TPL et Durée de vie et type de chqussée, type de zone climatique.");
        return;
    }
  
    const structureOutput = document.getElementById('structureOutput');
    structureOutput.innerHTML = ''; 
  
    if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Souple') {
        const structureHTML = `
            <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                        <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-green" style="height: 7px; font-size: 8px; padding: 1px;">7 PC</div>
                        <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                    </div>
                </div>
                <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px;">10 AC</div>
            </div>
        `;
        structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Souple') {
          const structureHTML = `
              <div class="structure-container">
                  <div style="display: flex; align-items: flex-end;">
                      <div>
                          <div class="rectangles-above">
                              <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                  <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                              </div>
                              <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                  <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                              </div>
                              <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                  <div class="rectangle red" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                              </div>
                              <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                  <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                              </div>
                              <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-green" style="height: 12px; font-size: 8px; padding: 1px;">12 PC</div>
                                  <div class="rectangle green" style="height: 20px; font-size: 8px; padding: 1px;">20 BL</div>
                              </div>
                          </div>
                          <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                      </div>
                      <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle green" style="height: 5px; font-size: 8px; padding: 1px; width: 100px;">4 EF</div>
                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 1px; width: 100px;">15 GNB</div>
                          <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 f2</div>
                      </div>
                  </div>
              </div>
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Souple') {
          const structureHTML = `
               <div class="structure-container">
                  <div style="display: flex; align-items: flex-end;">
                      <div>
                          <div class="rectangles-above">
                              <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                  <div class="rectangle pink" style="height: 30px; font-size: 10px; padding: 2px;">30 f3</div>
                              </div>
                              <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                                  <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                              </div>
                              <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                  <div class="rectangle red" style="height: 30px; font-size: 10px; padding: 2px;">30 f2</div>
                              </div>
                              <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                  <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                              </div>
                          </div>
                          <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 430px;">10 AC</div>
                      </div>
                      <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle green" style="height: 5px; font-size: 10px; padding: 1px; width: 100px;">4 EF</div>
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 GNB</div>
                          <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 1px; width: 100px;">25 f1</div>
                      </div>
                  </div>
              </div>
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                          <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f3</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-green" style="height: 7px; font-size: 8px; padding: 1px;">7 PC</div>
                          <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                      </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                          <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f3</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f3</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-green" style="height: 12px; font-size: 8px; padding: 1px;">12 PC</div>
                          <div class="rectangle green" style="height: 20px; font-size: 8px; padding: 1px;">20 BL</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle green" style="height: 5px; font-size: 8px; padding: 1px; width: 100px;">4 EF</div>
                          <div class="rectangle light-green" style="height: 15px; font-size: 8px; padding: 1px;">15 GNB</div>
                          <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 f2</div>
                      </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                          <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f2</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                          <div class="rectangle green" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle green" style="height: 5px; font-size: 8px; padding: 1px; width: 100px;">4 EF</div>
                          <div class="rectangle light-green" style="height: 20px; font-size: 8px; padding: 1px;">20 GNB</div>
                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 1px;">20 f1</div>
                      </div>
                  </div>
              </div> 
          `;
          
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                          <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                      </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Souple') {
          const structureHTML = `
             <div class="structure-container">
                    <div class="rectangles-above">
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                            <div class="black-line"></div>
                            <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                            <div class="rectangle pink" style="height: 30px; font-size: 10px; padding: 2px;">30 f1</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                            <div class="black-line"></div>
                            <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                            <div class="rectangle pink" style="height: 30px; font-size: 10px; padding: 2px;">30 f1</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                            <div class="black-line"></div>
                            <div class="rectangle red" style="height: 12px; font-size: 10px; padding: 2px;">12 GBB</div>
                            <div class="rectangle pink" style="height: 30px; font-size: 10px; padding: 2px;">30 f1</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                            <div class="black-line"></div>
                            <div class="rectangle red" style="height: 12px; font-size: 10px; padding: 2px;">12 GBB</div>
                            <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                            <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                        </div>
                        <div class="rectangle-container">
                            <div class="rectangle light-red" style="height: 7px; font-size: 7px; padding: 2px;">5 EB</div>
                            <div class="rectangle red" style="height: 8px; font-size: 8px; padding: 2px;">8 GBB</div>
                            <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                        </div>
                        <div class="rectangle-container">
                            <div class="rectangle light-red" style="height: 7px; font-size: 7px; padding: 2px;">5 EB</div>
                            <div class="rectangle red" style="height: 8px; font-size: 8px; padding: 2px;">8 GBB</div>
                            <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                            <div class="rectangle green" style="height: 15px; font-size: 10px; padding: 2px;">15 f2</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 10px; width: 100%; grid-column: 3 / -1;">
                        |..........Couche de base en matériau non lié..............|....................................................Couche de base en grave bitume GBB...............................................|
                    </div>
                </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                      <div class="rectangles-above">
                          <div class="rectangle-container">
                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 3px;">RS/ECF(exp)</div>
                              <div class="black-line"></div>
                              <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                              <div class="rectangle pink" style="height: 30px; font-size: 10px; padding: 2px;">30 f1</div>
                          </div>
                          <div class="rectangle-container">
                              <div class="rectangle light-red" style="height: 7px; font-size: 7px; padding: 2px;">5 EB</div>
                              <div class="rectangle red" style="height: 10px; font-size: 8px; padding: 2px;">10 GBB</div>
                              <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                              <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                          </div>
                          <div class="rectangle-container">
                              <div class="rectangle light-red" style="height: 7px; font-size: 7px; padding: 2px;">5 EB</div>
                              <div class="rectangle red" style="height: 12px; font-size: 9px; padding: 2px;">12 GBB</div>
                              <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        |Couche de base en matériau non lié|................Couche de base en grave bitume GBB.....................|
                  </div>
              </div> 
          `;
          
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                              <div class="rectangle red" style="height: 7px; font-size: 7px; padding: 2px;">6 EB</div>
                              <div class="rectangle light-pink" style="height: 10px; font-size: 9px; padding: 2px;">10 GBB</div>
                              <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                              <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                          </div>
                          <div class="rectangle-container">
                              <div class="rectangle red" style="height: 7px; font-size: 7px; padding: 2px;">6 EB</div>
                              <div class="rectangle light-pink" style="height: 10px; font-size: 9px; padding: 2px;">10 GBB</div>
                              <div class="rectangle green" style="height: 10px; font-size: 9px; padding: 2px;">10 GBF</div>
                          </div>
                     </div>
                     <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        Couche de base en grave bitume GBB
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 GND</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle red" style="height: 7px; font-size: 8px; padding: 1px;">7 PC</div>
                          <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                      </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                          <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                          <div class="rectangle red" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-green" style="height: 15px; font-size: 8px; padding: 1px;">15 GVC</div>
                          <div class="rectangle green" style="height: 20px; font-size: 8px; padding: 1px;">20 f2</div>
                      </div>
                       <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle green" style="height: 5px; font-size: 10px; padding: 1px; width: 100px;">4 ECF</div>
                          <div class="rectangle light-green" style="height: 20px; font-size: 8px; padding: 1px;">20 GNB</div>
                      </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                          <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNA</div>
                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle green" style="height: 5px; font-size: 8px; padding: 1px; width: 100px;">4 EF</div>
                          <div class="rectangle light-green" style="height: 15px; font-size: 8px; padding: 1px;">15 GNB</div>
                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 1px;">20 f1</div>
                      </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                          <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                      </div>
                  </div>
              </div> 
          `;
          
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                            <div class="black-line"></div>
                            <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                            <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                            <div class="black-line"></div>
                            <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                            <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                        </div>
                        <div class="rectangle-container">
                            <div class="rectangle light-red" style="height: 7px; font-size: 7px; padding: 2px;">5 EB</div>
                            <div class="rectangle red" style="height: 9px; font-size: 8px; padding: 2px;">8 GBB</div>
                            <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                        </div>
                        <div class="rectangle-container">
                            <div class="rectangle light-red" style="height: 7px; font-size: 7px; padding: 2px;">5 EB</div>
                            <div class="rectangle red" style="height: 9px; font-size: 8px; padding: 2px;">8 GBB</div>
                            <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                            <div class="black-line"></div>
                            <div class="rectangle red" style="height: 8px; font-size: 7px; padding: 2px;">8 GBB</div>
                            <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                            <div class="black-line"></div>
                            <div class="rectangle red" style="height: 8px; font-size: 7px; padding: 2px;">8 GBB</div>
                            <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                        </div>
                      </div>
                      <div style="color: black; font-size: 10px; text-align: center; margin-top: 10px; width: 100%; grid-column: 3 / -1;">
                        |..........Couche de base en matériau non lié..............|....................................................Couche de base en grave bitume GBB...............................................|
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                         <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                             <div class="black-line"></div>
                             <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                             <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                          </div>
                          <div class="rectangle-container">
                              <div class="rectangle light-red" style="height: 7px; font-size: 7px; padding: 2px;">5 EB</div>
                              <div class="rectangle red" style="height: 9px; font-size: 8px; padding: 2px;">8 GBB</div>
                              <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        |..Couche de base en matériau non lié..|..Couche de base en grave bitume GBB..|
                  </div>
              </div> 
          `;
          
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                              <div class="rectangle red" style="height: 7px; font-size: 7px; padding: 2px;">6 EB</div>
                              <div class="rectangle light-pink" style="height: 10px; font-size: 9px; padding: 2px;">10 GBB</div>
                              <div class="rectangle pink" style="height: 30px; font-size: 10px; padding: 2px;">30 f1</div>
                          </div>
                          <div class="rectangle-container">
                              <div class="rectangle red" style="height: 7px; font-size: 7px; padding: 2px;">6 EB</div>
                              <div class="rectangle light-pink" style="height: 10px; font-size: 9px; padding: 2px;">8 GBB</div>
                              <div class="rectangle green" style="height: 10px; font-size: 9px; padding: 2px;">10 GBF</div>
                          </div>
                     </div>
                     <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        Couche de base en grave bitume GBB
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-green" style="height: 7px; font-size: 8px; padding: 1px;">7 PC</div>
                          <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                      </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f2 ou f3</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f2 ou f3</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-green" style="height: 7px; font-size: 8px; padding: 1px;">7 PC</div>
                          <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                      </div>
                       <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle red" style="height: 6px; font-size: 7px; padding: 1px; width: 100px;">4 EF</div>
                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 1px;">20 GNB</div>
                      </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 14px; font-size: 10px; padding: 2px;">15 GNB</div>
                          <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNA</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle green" style="height: 5px; font-size: 8px; padding: 1px; width: 100px;">4 EF</div>
                          <div class="rectangle light-green" style="height: 20px; font-size: 8px; padding: 1px;">20 GNB</div>
                      </div>
                  </div>
              </div> 
          `;
          
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 30px; font-size: 10px; padding: 2px;">30 GNA</div>
                      </div>
                       <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                      </div>
                  </div>
              </div> 
          `;
          
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                            <div class="black-line"></div>
                            <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 GNA</div>
                          </div>
                          <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                            <div class="black-line"></div>
                            <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 GVC</div>
                          </div>
                          <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                            <div class="black-line"></div>
                            <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNA</div>
                            <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                          </div>
                          <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                            <div class="black-line"></div>
                            <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                            <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                          </div>
                          <div class="rectangle-container">
                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                              <div class="black-line"></div>
                              <div class="rectangle light-red" style="height: 10px; font-size: 9px; padding: 2px;">10 GBB</div>
                              <div class="rectangle green" style="height: 15px; font-size: 10px; padding: 2px;">15 f1ouf2</div>
                          </div>
                          <div class="rectangle-container">
                              <div class="rectangle red" style="height: 7px; font-size: 7px; padding: 2px;">6 EB</div>
                              <div class="rectangle light-red" style="height: 10px; font-size: 9px; padding: 2px;">8 GBB</div>
                              <div class="rectangle green" style="height: 15px; font-size: 9px; padding: 2px;">15 f1ouf2</div>
                          </div>
                     </div>
                     <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         |...............................................Couche de base en matériau non lié.....................................................|........Couche de base en grave bitume GBB........|
                  
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                         <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                             <div class="black-line"></div>
                             <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                         </div>
                          <div class="rectangle-container">
                              <div class="rectangle light-red" style="height: 7px; font-size: 7px; padding: 2px;">5 EB</div>
                              <div class="rectangle red" style="height: 9px; font-size: 8px; padding: 2px;">8 GBB</div>
                              <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        |...Couche de base en matériau non lié...|..Couche de base en grave bitume GBB..|
                  </div>
              </div> 
          `;
          
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Souple') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                              <div class="rectangle red" style="height: 7px; font-size: 7px; padding: 2px;">6 EB</div>
                              <div class="rectangle light-pink" style="height: 10px; font-size: 9px; padding: 2px;">10 GBB</div>
                              <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                          </div>
                          <div class="rectangle-container">
                              <div class="rectangle red" style="height: 7px; font-size: 7px; padding: 2px;">6 EB</div>
                              <div class="rectangle light-pink" style="height: 10px; font-size: 9px; padding: 2px;">8 GBB</div>
                              <div class="rectangle green" style="height: 10px; font-size: 9px; padding: 2px;">10 GBF</div>
                          </div>
                     </div>
                     <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        Couche de base en grave bitume GBB
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle red" style="height: 8px; font-size: 10px; padding: 2px;">8 GE</div>
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                      </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle red" style="height: 10px; font-size: 10px; padding: 2px;">10 GE</div>
                          <div class="rectangle light-pink" style="height: 30px; font-size: 10px; padding: 2px;">30 f2</div>
                      </div>
                       <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle red" style="height: 10px; font-size: 10px; padding: 2px;">10 GE</div>
                          <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                      </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle red" style="height: 15px; font-size: 10px; padding: 2px;">15 GE</div>
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                      </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle red" style="height: 10px; font-size: 10px; padding: 2px;">10 GE</div>
                          <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f2</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                      </div>
                       <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle red" style="height: 10px; font-size: 10px; padding: 2px;">10 GE</div>
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                      </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle pink" style="height: 6px; font-size: 8px; padding: 2px;">6 EB</div>
                          <div class="rectangle red" style="height: 12px; font-size: 10px; padding: 2px;">12 GE</div>
                          <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                      </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle red" style="height: 10px; font-size: 10px; padding: 2px;">10 GE</div>
                          <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                      </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                             <div class="rectangle light-green" style="height: 6px; font-size: 8px; padding: 2px;">6 EB</div>
                             <div class="rectangle red" style="height: 12px; font-size: 10px; padding: 2px;">12 GE</div>
                             <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                             <div class="rectangle pink" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                          </div>
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                             <div class="black-line"></div>
                             <div class="rectangle light-red" style="height: 18px; font-size: 10px; padding: 2px;">18 GAC2</div>
                             <div class="rectangle light-red" style="height: 18px; font-size: 10px; padding: 2px;">18 GAC2</div>
                          </div>
                          <div class="rectangle-container">
                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                              <div class="black-line"></div>
                              <div class="rectangle green" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC1</div>
                              <div class="rectangle green" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        |... Couche de base en grave émulsion...|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1.|
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle red" style="height: 8px; font-size: 8px; padding: 2px;">8 GE</div>
                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f2</div>
                      </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                             <div class="black-line"></div>
                             <div class="rectangle red" style="height: 10px; font-size: 9px; padding: 2px;">10 GE</div>
                             <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2ouf1</div>
                          </div>
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                             <div class="black-line"></div>
                             <div class="rectangle light-red" style="height: 28px; font-size: 10px; padding: 2px;">28 GAC2</div>
                          </div>
                          <div class="rectangle-container">
                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                              <div class="black-line"></div>
                              <div class="rectangle green" style="height: 24px; font-size: 10px; padding: 2px;">24 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        |... ..........Couche de base en grave émulsion.......|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M2.|
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                             <div class="rectangle pink" style="height: 6px; font-size: 8px; padding: 2px;">6 EB</div>
                             <div class="rectangle red" style="height: 12px; font-size: 10px; padding: 2px;">12 GE</div>
                             <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                          </div>
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                             <div class="black-line"></div>
                             <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GAC2</div>
                             <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                          </div>
                          <div class="rectangle-container">
                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                              <div class="black-line"></div>
                              <div class="rectangle green" style="height: 27px; font-size: 10px; padding: 2px;">27 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        |... ..........Couche de base en grave émulsion.......|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M2.|
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                             <div class="black-line"></div>
                             <div class="rectangle red" style="height: 10px; font-size: 10px; padding: 2px;">10 GE</div>
                             <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                          </div>
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                             <div class="black-line"></div>
                             <div class="rectangle light-red" style="height: 27px; font-size: 10px; padding: 2px;">27 GAC2</div>
                          </div>
                          <div class="rectangle-container">
                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                              <div class="black-line"></div>
                              <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        |... ........Couche de base en grave émulsion.............|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M2.|
                  </div>
              </div> 
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                             <div class="rectangle pink" style="height: 6px; font-size: 8px; padding: 2px;">6 EB</div>
                             <div class="rectangle red" style="height: 12px; font-size: 10px; padding: 2px;">12 GE</div>
                             <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                          </div>
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                             <div class="black-line"></div>
                             <div class="rectangle light-red" style="height: 18px; font-size: 10px; padding: 2px;">18 GAC2</div>
                             <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                          </div>
                          <div class="rectangle-container">
                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                              <div class="black-line"></div>
                              <div class="rectangle green" style="height: 25px; font-size: 10px; padding: 2px;">25 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        |... ..........Couche de base en grave émulsion.......|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1.|
                  </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle red" style="height: 8px; font-size: 8px; padding: 2px;">8 GE</div>
                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f2</div>
                      </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                             <div class="black-line"></div>
                             <div class="rectangle red" style="height: 10px; font-size: 9px; padding: 2px;">10 GE</div>
                             <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f2ouf1</div>
                          </div>
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                             <div class="black-line"></div>
                             <div class="rectangle light-red" style="height: 24px; font-size: 10px; padding: 2px;">24 GAC2</div>
                          </div>
                          <div class="rectangle-container">
                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                              <div class="black-line"></div>
                              <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        |... ..........Couche de base en grave émulsion.......|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M2.|
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                             <div class="rectangle pink" style="height: 6px; font-size: 8px; padding: 2px;">6 EB</div>
                             <div class="rectangle red" style="height: 12px; font-size: 10px; padding: 2px;">12 GE</div>
                             <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                          </div>
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                             <div class="black-line"></div>
                             <div class="rectangle light-red" style="height: 28px; font-size: 10px; padding: 2px;">28 GAC2</div>
                          </div>
                          <div class="rectangle-container">
                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                              <div class="black-line"></div>
                              <div class="rectangle green" style="height: 25px; font-size: 10px; padding: 2px;">25 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        |... ..........Couche de base en grave émulsion.......|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M2.|
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                             <div class="black-line"></div>
                             <div class="rectangle red" style="height: 10px; font-size: 10px; padding: 2px;">10 GE</div>
                             <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                          </div>
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                             <div class="black-line"></div>
                             <div class="rectangle light-red" style="height: 23px; font-size: 10px; padding: 2px;">23 GAC2</div>
                          </div>
                          <div class="rectangle-container">
                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                              <div class="black-line"></div>
                              <div class="rectangle green" style="height: 21px; font-size: 10px; padding: 2px;">21 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        |............ Couche de base en grave émulsion............|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1.|
                  </div>
              </div> 
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle pink" style="height: 6px; font-size: 8px; padding: 2px;">6 EB</div>
                          <div class="rectangle red" style="height: 12px; font-size: 10px; padding: 2px;">12 GE</div>
                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                      </div>
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                             <div class="black-line"></div>
                             <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                             <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                          </div>
                          <div class="rectangle-container">
                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                              <div class="black-line"></div>
                              <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        |... ..........Couche de base en grave émulsion.......|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1.|
                  </div>
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                             <div class="black-line"></div>
                             <div class="rectangle light-red" style="height: 23px; font-size: 10px; padding: 2px;">23 GAC2</div>
                          </div>
                          <div class="rectangle-container">
                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                              <div class="black-line"></div>
                              <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M2
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                             <div class="black-line"></div>
                             <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GAC2</div>
                          </div>
                          <div class="rectangle-container">
                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                              <div class="black-line"></div>
                              <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M2
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                             <div class="black-line"></div>
                             <div class="rectangle light-red" style="height: 23px; font-size: 10px; padding: 2px;">23 GAC2</div>
                             <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GAC2</div>
                          </div>
                          <div class="rectangle-container">
                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                              <div class="black-line"></div>
                              <div class="rectangle green" style="height: 17px; font-size: 10px; padding: 2px;">17 GAC1</div>
                              <div class="rectangle green" style="height: 17px; font-size: 10px; padding: 2px;">17 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                              <div class="rectangle red" style="height: 7px; font-size: 8px; padding: 2px;">6 EB</div>
                              <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 GAC1</div>
                              <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                             <div class="black-line"></div>
                             <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GAC2</div>
                             <div class="rectangle light-red" style="height: 17px; font-size: 10px; padding: 2px;">17 GAC2</div>
                          </div>
                          <div class="rectangle-container">
                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                              <div class="black-line"></div>
                              <div class="rectangle green" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC1</div>
                              <div class="rectangle green" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                              <div class="rectangle red" style="height: 7px; font-size: 8px; padding: 2px;">6 EB</div>
                              <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 GAC1</div>
                              <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                             <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                             <div class="black-line"></div>
                             <div class="rectangle light-red" style="height: 27px; font-size: 10px; padding: 2px;">27 GAC2</div>
                          </div>
                          <div class="rectangle-container">
                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                              <div class="black-line"></div>
                              <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 GAC1</div>
                              <div class="rectangle green" style="height: 17px; font-size: 10px; padding: 2px;">17 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
          const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                          <div class="rectangle-container">
                              <div class="rectangle red" style="height: 7px; font-size: 8px; padding: 2px;">6 EB</div>
                              <div class="rectangle green" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC1</div>
                              <div class="rectangle green" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC1</div>
                        </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1
                  </div>
              </div> 
          `;
          structureOutput.innerHTML = structureHTML;
      } else if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
          const structureHTML = `
                <div class="structure-container">
                    <div style="display: flex; align-items: flex-end;">
                        <div>
                            <div class="rectangles-above">
                                <div class="rectangle-container">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                    <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                                </div>
                                <div class="rectangle-container">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                    <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                </div>
                                <div class="rectangle-container">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                                    <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                </div>
                                <div class="rectangle-container">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                    <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                </div>
                                <div class="rectangle-container">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                    <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                </div>
                            </div>
                               <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                               <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                               Couche de base en grave non traitée
                           </div>
                </div>
          `;
            structureOutput.innerHTML = structureHTML;
          } else if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
              const structureHTML = `
                  <div class="structure-container">
                      <div style="display: flex; align-items: flex-end;">
                          <div>
                              <div class="rectangles-above">
                                  <div class="rectangle-container">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                      <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                                  </div>
                                  <div class="rectangle-container">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                      <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                  </div>
                                  <div class="rectangle-container">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                                      <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                  </div>
                                  <div class="rectangle-container">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                      <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                  </div>
                                  <div class="rectangle-container">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                      <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                  </div>
                              </div>
                                 <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                                 <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                 Couche de base en grave non traitée
                             </div>
                  </div>
              `;
              structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                        <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                        <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                        <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                    </div>
                                </div>
                                   <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                                   <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                   Couche de base en grave non traitée
                               </div>
                    </div>
                `;
                structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                          <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                          <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                          <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                      </div>
                                  </div>
                                     <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                                     <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                     Couche de base en grave non traitée
                                 </div>
                      </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
                } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                    const structureHTML = `
                        <div class="structure-container">
                            <div style="display: flex; align-items: flex-end;">
                                <div>
                                    <div class="rectangles-above">
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                            <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                            <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                                            <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                            <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                            <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                        </div>
                                    </div>
                                       <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                                       <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                       Couche de base en grave non traitée
                                   </div>
                        </div>
                    `;
                    structureOutput.innerHTML = structureHTML;
                  } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                      const structureHTML = `
                          <div class="structure-container">
                              <div style="display: flex; align-items: flex-end;">
                                  <div>
                                      <div class="rectangles-above">
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                              <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                              <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                                              <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                              <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                              <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                          </div>
                                      </div>
                                         <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                                         <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                         Couche de base en grave non traitée
                                     </div>
                          </div>
                      `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                          <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                          <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                          <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                      </div>
                                  </div>
                                     <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                                     <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                     Couche de base en grave non traitée
                                 </div>
                      </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
                } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                    const structureHTML = `
                        <div class="structure-container">
                            <div style="display: flex; align-items: flex-end;">
                                <div>
                                    <div class="rectangles-above">
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                            <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                            <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                                            <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                            <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                            <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                        </div>
                                    </div>
                                       <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                                       <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                       Couche de base en grave non traitée
                                   </div>
                        </div>
                    `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                          <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                  </div>
                                     <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 320px;">10 AC</div>
                                     <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                     Couche de base en grave non traitée
                                 </div>
                      </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                          <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                  </div>
                                     <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 320px;">10 AC</div>
                                     <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                     Couche de base en grave non traitée
                                 </div>
                      </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                          <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                  </div>
                                     <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 320px;">10 AC</div>
                                     <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                     Couche de base en grave non traitée
                                 </div>
                      </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                          <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                  </div>
                                     <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 320px;">10 AC</div>
                                     <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                     Couche de base en grave non traitée
                                 </div>
                      </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                           <div>
                               <div class="rectangles-above">
                                   <div class="rectangle-container">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                    <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f2</div>
                                 </div>
                                 <div class="rectangle-container">
                                   <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                   <div class="black-line"></div>
                                   <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                                   <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                                 </div>
                                 <div class="rectangle-container">
                                   <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                   <div class="black-line"></div>
                                   <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                   <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                                 </div>
                            </div>
                            <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 320px;">10 AC</div>
                         </div>
                         <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                           <div class="black-line"></div>
                           <div class="rectangle green" style="height: 8px; font-size: 8px; padding: 1px; width: 100px;">8 GE</div>
                           <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                           <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                         </div>
                      </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                          .............................................Couche de base en grave non traitée .........................../ Couche de base en grave emulsion
                    </div>
                 `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                           <div>
                               <div class="rectangles-above">
                                   <div class="rectangle-container">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                    <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f2</div>
                                 </div>
                                 <div class="rectangle-container">
                                   <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                   <div class="black-line"></div>
                                   <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                                   <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                                 </div>
                                 <div class="rectangle-container">
                                   <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                   <div class="black-line"></div>
                                   <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                   <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                                 </div>
                            </div>
                            <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 320px;">10 AC</div>
                         </div>
                         <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                           <div class="black-line"></div>
                           <div class="rectangle green" style="height: 8px; font-size: 8px; padding: 1px; width: 100px;">8 GE</div>
                           <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                           <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                         </div>
                      </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                          .............................................Couche de base en grave non traitée .........................../ Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                           <div>
                               <div class="rectangles-above">
                                   <div class="rectangle-container">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                    <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f2</div>
                                 </div>
                                 <div class="rectangle-container">
                                   <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                   <div class="black-line"></div>
                                   <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                                   <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                                 </div>
                                 <div class="rectangle-container">
                                   <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                   <div class="black-line"></div>
                                   <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                   <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                                 </div>
                            </div>
                            <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 320px;">10 AC</div>
                         </div>
                         <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                           <div class="black-line"></div>
                           <div class="rectangle green" style="height: 8px; font-size: 8px; padding: 1px; width: 100px;">8 GE</div>
                           <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                           <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                         </div>
                      </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                          .............................................Couche de base en grave non traitée .........................../ Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                           <div>
                               <div class="rectangles-above">
                                   <div class="rectangle-container">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                    <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f2</div>
                                 </div>
                                 <div class="rectangle-container">
                                   <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                   <div class="black-line"></div>
                                   <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                                   <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                                 </div>
                                 <div class="rectangle-container">
                                   <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                   <div class="black-line"></div>
                                   <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                   <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                                 </div>
                            </div>
                            <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 320px;">10 AC</div>
                         </div>
                         <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                           <div class="black-line"></div>
                           <div class="rectangle green" style="height: 8px; font-size: 8px; padding: 1px; width: 100px;">8 GE</div>
                           <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                           <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                         </div>
                      </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                          .............................................Couche de base en grave non traitée .........................../ Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                                      </div>
                                  </div>
                                     <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                 </div>
                                 <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle green" style="height: 10px; font-size: 8px; padding: 1px; width: 100px;">10 GE</div>
                                      <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                                      <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                  </div>
                          </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                           Couche de base en grave non traitée / Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                                      </div>
                                  </div>
                                     <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                 </div>
                                 <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle green" style="height: 10px; font-size: 8px; padding: 1px; width: 100px;">10 GE</div>
                                      <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                                      <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                  </div>
                          </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                           Couche de base en grave non traitée / Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                                      </div>
                                  </div>
                                     <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                 </div>
                                 <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle green" style="height: 10px; font-size: 8px; padding: 1px; width: 100px;">10 GE</div>
                                      <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                                      <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                  </div>
                          </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                           Couche de base en grave non traitée / Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                                      </div>
                                  </div>
                                     <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                 </div>
                                 <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle green" style="height: 10px; font-size: 8px; padding: 1px; width: 100px;">10 GE</div>
                                      <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                                      <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                  </div>
                          </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                           Couche de base en grave non traitée / Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                                          <div class="rectangle red" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                                      </div>
                                  </div>
                                     <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                 </div>
                                 <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle green" style="height: 12px; font-size: 8px; padding: 1px; width: 100px;">12 GE</div>
                                      <div class="rectangle pink" style="height: 35px; font-size: 10px; padding: 1px; width: 100px;">35 F1</div>
                                      <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                  </div>
                          </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                           Couche de base en grave non traitée / Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                                          <div class="rectangle red" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                                      </div>
                                  </div>
                                     <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                 </div>
                                 <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle green" style="height: 12px; font-size: 8px; padding: 1px; width: 100px;">12 GE</div>
                                      <div class="rectangle pink" style="height: 35px; font-size: 10px; padding: 1px; width: 100px;">35 F1</div>
                                      <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                  </div>
                          </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                           Couche de base en grave non traitée / Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                                          <div class="rectangle red" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                                      </div>
                                  </div>
                                     <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                 </div>
                                 <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle green" style="height: 12px; font-size: 8px; padding: 1px; width: 100px;">12 GE</div>
                                      <div class="rectangle pink" style="height: 35px; font-size: 10px; padding: 1px; width: 100px;">35 F1</div>
                                      <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                  </div>
                          </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                           Couche de base en grave non traitée / Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                                          <div class="rectangle red" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                                      </div>
                                  </div>
                                     <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                 </div>
                                 <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle green" style="height: 12px; font-size: 8px; padding: 1px; width: 100px;">12 GE</div>
                                      <div class="rectangle pink" style="height: 35px; font-size: 10px; padding: 1px; width: 100px;">35 F1</div>
                                      <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                  </div>
                          </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                           Couche de base en grave non traitée / Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
                } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                    const structureHTML = `
                        <div class="structure-container">
                            <div style="display: flex; align-items: flex-end;">
                                <div>
                                    <div class="rectangles-above">
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                            <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                        </div>
                                    </div>
                                       <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                       Couche de base en grave non traitée
                                   </div>
                        </div>
                    `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                          <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                      </div>
                                  </div>
                                     <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                     Couche de base en grave non traitée
                                 </div>
                      </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
                } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                    const structureHTML = `
                        <div class="structure-container">
                            <div style="display: flex; align-items: flex-end;">
                                <div>
                                    <div class="rectangles-above">
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                            <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                        </div>
                                    </div>
                                       <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                       Couche de base en grave non traitée
                                   </div>
                        </div>
                    `;
                    structureOutput.innerHTML = structureHTML;
                  } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                      const structureHTML = `
                          <div class="structure-container">
                              <div style="display: flex; align-items: flex-end;">
                                  <div>
                                      <div class="rectangles-above">
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                              <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                          </div>
                                      </div>
                                         <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                         Couche de base en grave non traitée
                                     </div>
                          </div>
                      `;
                      structureOutput.innerHTML = structureHTML;
                    } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                        const structureHTML = `
                            <div class="structure-container">
                                <div style="display: flex; align-items: flex-end;">
                                    <div>
                                        <div class="rectangles-above">
                                            <div class="rectangle-container">
                                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                <div class="black-line"></div>
                                                <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                            </div>
                                            <div class="rectangle-container">
                                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                <div class="black-line"></div>
                                                <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                            </div>
                                            <div class="rectangle-container">
                                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                <div class="black-line"></div>
                                                <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                            </div>
                                            <div class="rectangle-container">
                                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                <div class="black-line"></div>
                                                <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                                <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                            </div>
                                        </div>
                                           <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                           Couche de base en grave non traitée
                                       </div>
                            </div>
                        `;
                        structureOutput.innerHTML = structureHTML;
                      } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                          const structureHTML = `
                              <div class="structure-container">
                                  <div style="display: flex; align-items: flex-end;">
                                      <div>
                                          <div class="rectangles-above">
                                              <div class="rectangle-container">
                                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                  <div class="black-line"></div>
                                                  <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                              </div>
                                              <div class="rectangle-container">
                                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                  <div class="black-line"></div>
                                                  <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                              </div>
                                              <div class="rectangle-container">
                                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                  <div class="black-line"></div>
                                                  <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                              </div>
                                              <div class="rectangle-container">
                                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                  <div class="black-line"></div>
                                                  <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                                  <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                              </div>
                                          </div>
                                             <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                             Couche de base en grave non traitée
                                         </div>
                              </div>
                          `;
                          structureOutput.innerHTML = structureHTML;
                        } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                            const structureHTML = `
                                <div class="structure-container">
                                    <div style="display: flex; align-items: flex-end;">
                                        <div>
                                            <div class="rectangles-above">
                                                <div class="rectangle-container">
                                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                    <div class="black-line"></div>
                                                    <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                                </div>
                                                <div class="rectangle-container">
                                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                    <div class="black-line"></div>
                                                    <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                                </div>
                                                <div class="rectangle-container">
                                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                    <div class="black-line"></div>
                                                    <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                                </div>
                                                <div class="rectangle-container">
                                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                    <div class="black-line"></div>
                                                    <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                                    <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                                </div>
                                            </div>
                                               <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                               Couche de base en grave non traitée
                                           </div>
                                </div>
                            `;
                            structureOutput.innerHTML = structureHTML;
                          } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                              const structureHTML = `
                                  <div class="structure-container">
                                      <div style="display: flex; align-items: flex-end;">
                                          <div>
                                              <div class="rectangles-above">
                                                  <div class="rectangle-container">
                                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                      <div class="black-line"></div>
                                                      <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                                  </div>
                                                  <div class="rectangle-container">
                                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                      <div class="black-line"></div>
                                                      <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                                  </div>
                                                  <div class="rectangle-container">
                                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                      <div class="black-line"></div>
                                                      <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                                  </div>
                                                  <div class="rectangle-container">
                                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                      <div class="black-line"></div>
                                                      <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                                      <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                                  </div>
                                              </div>
                                                 <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                                 Couche de base en grave non traitée
                                             </div>
                                  </div>
                              `;
                              
                            structureOutput.innerHTML = structureHTML;
                          } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                              const structureHTML = `
                                  <div class="structure-container">
                                      <div style="display: flex; align-items: flex-end;">
                                          <div>
                                              <div class="rectangles-above">
                                                  <div class="rectangle-container">
                                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                      <div class="black-line"></div>
                                                      <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                                  </div>
                                                  <div class="rectangle-container">
                                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                      <div class="black-line"></div>
                                                      <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                                  </div>
                                                  <div class="rectangle-container">
                                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                      <div class="black-line"></div>
                                                      <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                                  </div>
                                              </div>
                                                 <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                                 Couche de base en grave non traitée
                                             </div>
                                  </div>
                              `;
                              structureOutput.innerHTML = structureHTML;
                            } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                                const structureHTML = `
                                    <div class="structure-container">
                                        <div style="display: flex; align-items: flex-end;">
                                            <div>
                                                <div class="rectangles-above">
                                                    <div class="rectangle-container">
                                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                        <div class="black-line"></div>
                                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                                    </div>
                                                    <div class="rectangle-container">
                                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                        <div class="black-line"></div>
                                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                                    </div>
                                                    <div class="rectangle-container">
                                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                        <div class="black-line"></div>
                                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                                    </div>
                                                </div>
                                                   <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                                   Couche de base en grave non traitée
                                               </div>
                                    </div>
                                `;
                                structureOutput.innerHTML = structureHTML;
                              } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                                  const structureHTML = `
                                      <div class="structure-container">
                                          <div style="display: flex; align-items: flex-end;">
                                              <div>
                                                  <div class="rectangles-above">
                                                      <div class="rectangle-container">
                                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                          <div class="black-line"></div>
                                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                                      </div>
                                                      <div class="rectangle-container">
                                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                          <div class="black-line"></div>
                                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                                      </div>
                                                      <div class="rectangle-container">
                                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                          <div class="black-line"></div>
                                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                                      </div>
                                                  </div>
                                                     <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                                     Couche de base en grave non traitée
                                                 </div>
                                      </div>
                                  `;       
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                <div class="rectangles-above">
                                     <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                      </div>
                                      </div>
                                      <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                        Couche de base en grave non traitée
                              </div>
                          </div>
                 `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle red" style="height: 20px; font-size: 8px; padding: 1px; width: 100px;">20 GNA</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle red" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 GNA</div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 F1</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 GVC</div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 F1</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle green" style="height: 8px; font-size: 8px; padding: 1px; width: 100px;">8 GE</div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 f1</div>
                                          </div>
                                          </div>
                                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                               .............................Couche de base en grave non traitée........................... / Couche de base en grave emulsion
                      </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle red" style="height: 20px; font-size: 8px; padding: 1px; width: 100px;">20 GNA</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle red" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 GNA</div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 F1</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 GVC</div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 F1</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle green" style="height: 8px; font-size: 8px; padding: 1px; width: 100px;">8 GE</div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 f1</div>
                                          </div>
                                          </div>
                                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                               .............................Couche de base en grave non traitée........................... / Couche de base en grave emulsion
                      </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle red" style="height: 20px; font-size: 8px; padding: 1px; width: 100px;">20 GNA</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle red" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 GNA</div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 F1</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 GVC</div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 F1</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle green" style="height: 8px; font-size: 8px; padding: 1px; width: 100px;">8 GE</div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 f1</div>
                                          </div>
                                          </div>
                                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                               .............................Couche de base en grave non traitée........................... / Couche de base en grave emulsion
                      </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle red" style="height: 20px; font-size: 8px; padding: 1px; width: 100px;">20 GNA</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle red" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 GNA</div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 F1</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 GVC</div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 F1</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle green" style="height: 8px; font-size: 8px; padding: 1px; width: 100px;">8 GE</div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 f1</div>
                                          </div>
                                          </div>
                                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                               .............................Couche de base en grave non traitée........................... / Couche de base en grave emulsion
                      </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                                      </div>
                                  </div>
                                 </div>
                                 <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle green" style="height: 10px; font-size: 8px; padding: 1px; width: 100px;">10 GE</div>
                                      <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 1px; width: 100px;">15 F1</div>
                                  </div>
                          </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                           Couche de base en grave non traitée / Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                                      </div>
                                  </div>
                                 </div>
                                 <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle green" style="height: 10px; font-size: 8px; padding: 1px; width: 100px;">10 GE</div>
                                      <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 1px; width: 100px;">15 F1</div>
                                  </div>
                          </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                           Couche de base en grave non traitée / Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                                      </div>
                                  </div>
                                 </div>
                                 <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle green" style="height: 10px; font-size: 8px; padding: 1px; width: 100px;">10 GE</div>
                                      <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 1px; width: 100px;">15 F1</div>
                                  </div>
                          </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                           Couche de base en grave non traitée / Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                                      </div>
                                  </div>
                                 </div>
                                 <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle green" style="height: 10px; font-size: 8px; padding: 1px; width: 100px;">10 GE</div>
                                      <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 1px; width: 100px;">15 F1</div>
                                  </div>
                          </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                           Couche de base en grave non traitée / Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                                      </div>
                                  </div>
                                 </div>
                                 <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle green" style="height: 12px; font-size: 8px; padding: 1px; width: 100px;">12 GE</div>
                                      <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                                  </div>
                          </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                           Couche de base en grave non traitée / Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                                      </div>
                                  </div>
                                 </div>
                                 <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle green" style="height: 12px; font-size: 8px; padding: 1px; width: 100px;">12 GE</div>
                                      <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                                  </div>
                          </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                           Couche de base en grave non traitée / Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                                      </div>
                                  </div>
                                 </div>
                                 <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle green" style="height: 12px; font-size: 8px; padding: 1px; width: 100px;">12 GE</div>
                                      <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                                  </div>
                          </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                           Couche de base en grave non traitée / Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                                      </div>
                                  </div>
                                 </div>
                                 <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle green" style="height: 12px; font-size: 8px; padding: 1px; width: 100px;">12 GE</div>
                                      <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                                  </div>
                          </div>
                          <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                           Couche de base en grave non traitée / Couche de base en grave emulsion
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                          <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                          <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                          <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                          <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                          <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                          <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                          <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                          <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                          <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                          <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                          <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                          <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                          <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                          <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                          <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                          <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                       <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL5' && lifeValue === 'Longuee' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                       <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                       <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                       <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                       <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle yellow" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P1' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                       <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle yellow" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                       <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle yellow" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                       <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle yellow" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                          <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                       <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Longuee' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                       <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                       <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                       <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                       <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle yellow" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                       <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle yellow" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                       <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle yellow" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                  const structureHTML = `
                       <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                          <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                          <div class="rectangle yellow" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                      </div>
                                          <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                          <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                      </div>
                                  </div>
                          </div>
                    </div>
                  `;
          structureOutput.innerHTML = structureHTML;
    } else {
        structureOutput.innerHTML = `<p>Aucune structure trouvée pour les sélections actuelles.</p>`;
    }
  })
  document.getElementById('ne-form').addEventListener('submit', function (e) {
      e.preventDefault();
    
      const npl = parseFloat(document.getElementById('npl').value);
      const largeurChaussee = parseFloat(document.getElementById('largeur-chaussee').value);
      const cam = parseFloat(document.getElementById('cam').value);
      const tauxAccroissement = parseFloat(document.getElementById('taux-accroissement').value)/100;
      const dureeVie = parseFloat(document.getElementById('duree-vie').value);
      const typeVoie = parseFloat(document.getElementById('type-voie').value);
      const cvc = parseFloat(document.getElementById('cvc').value)/100;
      const typeStructure = document.getElementById('type-structure').value;
    
      const C1 = (largeurChaussee > 4 && largeurChaussee < 6) ? 1.5 : 1;
      const C2 = cam;
      const C3 = ((Math.pow(1 + tauxAccroissement, dureeVie) - 1) / tauxAccroissement) / ((Math.pow(1.04, dureeVie) - 1) / 0.04);
      const C4 = typeVoie;
      const N4 = 365 * ((Math.pow(1.04, dureeVie) - 1) / 0.04);
      const CVC = cvc;
      const NE = npl * C1 * C2 * C3 * C4 * N4 * CVC;
    
      let resultText = `NE = ${NE.toFixed(2)}`;
    
      if (typeStructure === "Souple" && dureeVie === 10 && NE < 8800) {
          resultText += " (TPL1) et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Souple" && dureeVie === 10 && NE < 45000 && NE > 8800) {
          resultText += " (TPL2)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Souple" && dureeVie === 10 && NE < 140000 && NE > 45000) {
          resultText += " (TPL3)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Souple" && dureeVie === 10 && NE < 380000 && NE > 140000) {
          resultText += " (TPL4)et Portance Pj minimale : P2";
      }
  
      if (typeStructure === "Souple" && dureeVie === 10 && NE < 570000 && NE > 380000) {
          resultText += " (TPL5)et Portance Pj minimale : P2";
      }
    
      if (typeStructure === "Souple" && dureeVie === 10 && NE < 1100000 && NE > 570000) {
          resultText += " (TPL6)et Portance Pj minimale : P2";
      }
  
      if (typeStructure === "Semi-rigide" && dureeVie === 10 && NE < 8800) {
          resultText += " (TPL1)";
      }
  
      if (typeStructure === "Semi-rgide" && dureeVie === 10 && NE < 45000 && NE > 8800) {
          resultText += " (TPL2)";
      }
  
      if (typeStructure === "Semi-rigide" && dureeVie === 10 && NE < 140000 && NE > 45000) {
          resultText += " (TPL3)et Portance Pj minimale : P3";
      }
  
      if (typeStructure === "Semi-rigide" && dureeVie === 10 && NE < 380000 && NE > 140000) {
          resultText += " (TPL4)et Portance Pj minimale : P3";
      }
  
      if (typeStructure === "Semi-rigide" && dureeVie === 10 && NE < 570000 && NE > 380000) {
          resultText += " (TPL5)et Portance Pj minimale : P2";
      }
    
      if (typeStructure === "Semi-rigide" && dureeVie === 10 && NE < 1100000 && NE > 570000) {
          resultText += " (TPL6)et Portance Pj minimale : P2";
      }
  
      if (typeStructure === "Souple" && dureeVie === 15 && NE < 22000) {
          resultText += " (TPL1)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Souple" && dureeVie === 15 && NE < 110000 && NE > 22000) {
          resultText += " (TPL2)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Souple" && dureeVie === 15 && NE < 350000 && NE > 110000) {
          resultText += " (TPL3)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Souple" && dureeVie === 15 && NE < 950000 && NE > 350000) {
          resultText += " (TPL4)et Portance Pj minimale : P2";
      }
  
      if (typeStructure === "Souple" && dureeVie === 15 && NE < 1400000 && NE > 950000) {
          resultText += " (TPL5)et Portance Pj minimale : P2";
      }
    
      if (typeStructure === "Souple" && dureeVie === 15 && NE < 2500000 && NE > 1400000) {
          resultText += " (TPL6)et Portance Pj minimale : P2";
      }
  
      if (typeStructure === "Semi-rigide" && dureeVie === 15 && NE < 22000) {
          resultText += " (TPL1)";
      }
  
      if (typeStructure === "Semi=rigide" && dureeVie === 15 && NE < 110000 && NE > 22000) {
          resultText += " (TPL2)";
      }
  
      if (typeStructure === "Semi-rigide" && dureeVie === 15 && NE < 350000 && NE > 110000) {
          resultText += " (TPL3)et Portance Pj minimale : P3";
      }
  
      if (typeStructure === "Semi-rigide" && dureeVie === 15 && NE < 950000 && NE > 350000) {
          resultText += " (TPL4)et Portance Pj minimale : P3";
      }
  
      if (typeStructure === "Semi-rigide" && dureeVie === 15 && NE < 1400000 && NE > 950000) {
          resultText += " (TPL5)et Portance Pj minimale : P2";
      }
    
      if (typeStructure === "Semi-rigide" && dureeVie === 15 && NE < 2500000  && NE > 1400000) {
          resultText += " (TPL6)et Portance Pj minimale : P2";
      }
  
      if (typeStructure === "Souple" && dureeVie === 20 && NE < 22000) {
          resultText += " (TPL1)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Souple" && dureeVie === 20 && NE < 110000 && NE > 22000) {
          resultText += " (TPL2)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Souple" && dureeVie === 20 && NE < 350000 && NE > 110000) {
          resultText += " (TPL3)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Souple" && dureeVie === 20 && NE < 950000 && NE > 350000) {
          resultText += " (TPL4)et Portance Pj minimale : P2";
      }
  
      if (typeStructure === "Souple" && dureeVie === 20 && NE < 1400000 && NE > 950000) {
          resultText += " (TPL5)et Portance Pj minimale : P2";
      }
    
      if (typeStructure === "Souple" && dureeVie === 20 && NE < 2500000 && NE > 1400000) {
          resultText += " (TPL6)et Portance Pj minimale : P2";
      }
  
      if (typeStructure === "Semi-rigide" && dureeVie === 20 && NE < 22000) {
          resultText += " (TPL1)";
      }
  
      if (typeStructure === "Semi=rigide" && dureeVie === 20 && NE < 110000 && NE > 22000) {
          resultText += " (TPL2)";
      }
  
      if (typeStructure === "Semi-rigide" && dureeVie === 20 && NE < 350000 && NE > 110000) {
          resultText += " (TPL3)et Portance Pj minimale : P3";
      }
  
      if (typeStructure === "Semi-rigide" && dureeVie === 20 && NE < 950000 && NE > 350000) {
          resultText += " (TPL4)et Portance Pj minimale : P3";
      }
  
      if (typeStructure === "Semi-rigide" && dureeVie === 20 && NE < 1400000  && NE > 950000) {
          resultText += " (TPL5)et Portance Pj minimale : P2";
      }
    
      if (typeStructure === "Semi-rigide" && dureeVie === 20 && NE < 2500000 && NE > 1400000) {
          resultText += " (TPL6)et Portance Pj minimale : P2";
      }
  
      if (typeStructure === "Rigide" && dureeVie === 15 && NE < 4000) {
          resultText += " (TPL1)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Rigide" && dureeVie === 15 && NE < 27000 && NE > 4000) {
          resultText += " (TPL2)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Rigide" && dureeVie === 15 && NE < 61000 && NE > 27000) {
          resultText += " (TPL3)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Rigide" && dureeVie === 15 && NE < 160000 && NE > 61000) {
          resultText += " (TPL4)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Rigide" && dureeVie === 15 && NE < 230000 && NE > 160000) {
          resultText += " (TPL5)et Portance Pj minimale : P1";
      }
    
      if (typeStructure === "Rigide" && dureeVie === 15 && NE < 3700000  && NE > 230000) {
          resultText += " (TPL6)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Rigide" && dureeVie === 20 && NE < 4000) {
          resultText += " (TPL1)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Rigide" && dureeVie === 20 && NE < 27000 && NE > 4000) {
          resultText += " (TPL2)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Rigide" && dureeVie === 20 && NE < 61000 && NE > 27000) {
          resultText += " (TPL3)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Rigide" && dureeVie === 20 && NE < 160000 && NE > 61000) {
          resultText += " (TPL4)et Portance Pj minimale : P1";
      }
  
      if (typeStructure === "Rigide" && dureeVie === 20 && NE < 230000 && NE > 160000) {
          resultText += " (TPL5)et Portance Pj minimale : P1";
      }
    
      if (typeStructure === "Rigide" && dureeVie === 20 && NE < 370000 && NE > 230000) {
          resultText += " (TPL6)et Portance Pj minimale : P1";
      }
      document.getElementById('resultat').textContent = resultText;
  });
  
  document.getElementById('startButton').addEventListener('click', function() {
      document.querySelector('.ring').style.display = 'none';
      document.getElementById('newInterface').style.display = 'block';
  });
  
  document.getElementById('structureButton').addEventListener('click', function() {
      document.getElementById('newInterface').style.display = 'none';
      document.getElementById('structureInterface').style.display = 'block';
  });
  
  document.getElementById('Trafic').addEventListener('click', function() {
      document.getElementById('newInterface').style.display = 'none';
      document.getElementById('Traficinterface').style.display = 'block';
  });
  
  document.getElementById('portance').addEventListener('click', function() {
      document.getElementById('newInterface').style.display = 'none';
      document.getElementById('portanceInterface').style.display = 'block';
  });
  document.getElementById('backDeterminerStiButton').addEventListener('click', function() {
      document.getElementById('determinerStiInterface').style.display = 'none';
      document.getElementById('portanceInterface').style.display = 'block';
  });

  
  document.getElementById('forme').addEventListener('click', function() {
      document.getElementById('newInterface').style.display = 'none';
      document.getElementById('formeinterface').style.display = 'block';
  });
  
  document.getElementById('typeSelect').addEventListener('change', function() {
      const rigideSubMenu = document.getElementById('rigideSubMenu');
      if (this.value === 'Rigide') {
          rigideSubMenu.style.display = 'block';
      } else {
          rigideSubMenu.style.display = 'none';
      }
  });
  
  document.getElementById('back').addEventListener('click', function() {
      document.getElementById('Traficinterface').style.display = 'none';
      document.getElementById('newInterface').style.display = 'block';
  });

  document.getElementById('backStiButton').addEventListener('click', function() {
      document.getElementById('portanceInterface').style.display = 'none';
      document.getElementById('newInterface').style.display = 'block';
  });

  document.getElementById('buttonback').addEventListener('click', function() {
      document.getElementById('formeinterface').style.display = 'none';
      document.getElementById('newInterface').style.display = 'block';
  });
  
  document.getElementById('backButton').addEventListener('click', function() {
      document.getElementById('structureInterface').style.display = 'none';
      document.getElementById('newInterface').style.display = 'block';
  });
          
  
  document.getElementById('structureforme').addEventListener('click', function() {
      const pValue = document.getElementById('Pj').value;
      const tplValue = document.getElementById('TPLi').value;
      const stiValue = document.getElementById('Sti').value;
    
      if (!pValue || !tplValue || !stiValue ) {
          alert("Veuillez sélectionner des options pour P, TPL et STi .");
          return;
      }
    
      const formestructure = document.getElementById('formestructure');
      formestructure.innerHTML = ''; 
    
      if (pValue === 'P1' && tplValue === 'TPL1' && stiValue === 'St0' ) {
          const structureHTML = `
              <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 30px; font-size: 10px; padding: 2px;">30 F2</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                      </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL1' && stiValue === 'St1' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 F2</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                      </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL1' && stiValue === 'St2' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 30px; font-size: 10px; padding: 2px;">30 F2</div>
                      </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P1' && tplValue === 'TPL2' && stiValue === 'St0' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 30px; font-size: 10px; padding: 2px;">30 F2</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                      </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL2' && stiValue === 'St1' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 F2</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                      </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL2' && stiValue === 'St2' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 30px; font-size: 10px; padding: 2px;">30 F2</div>
                      </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P1' && tplValue === 'TPL3' && stiValue === 'St0' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 30px; font-size: 10px; padding: 2px;">30 F2</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                      </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL3' && stiValue === 'St1' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 F2</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                      </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL3' && stiValue === 'St2' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 30px; font-size: 10px; padding: 2px;">30 F2</div>
                      </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL4' && stiValue === 'St0' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 40px; font-size: 10px; padding: 2px;">40 F1</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                      </div>
                      <div class="rectangle-container">
                        <div class="rectangle light-red" style="height: 40px; font-size: 10px; padding: 2px;">40 MT</div>
                    </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL4' && stiValue === 'St1' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 F1</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                      </div>
                      <div class="rectangle-container">
                        <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 MT</div>
                    </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL4' && stiValue === 'St2' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 40px; font-size: 10px; padding: 2px;">40 F1</div>
                      </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL4' && stiValue === 'St1' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                        <div class="rectangle light-red" style="height: 50px; font-size: 10px; padding: 2px;">50 MT</div>
                    </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL5' && stiValue === 'St0' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 40px; font-size: 10px; padding: 2px;">40 F1</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                      </div>
                      <div class="rectangle-container">
                        <div class="rectangle light-red" style="height: 40px; font-size: 10px; padding: 2px;">40 MT</div>
                    </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL5' && stiValue === 'St1' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 F1</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                      </div>
                      <div class="rectangle-container">
                        <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 MT</div>
                    </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL5' && stiValue === 'St2' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 40px; font-size: 10px; padding: 2px;">40 F1</div>
                      </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL5' && stiValue === 'St1' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                        <div class="rectangle light-red" style="height: 50px; font-size: 10px; padding: 2px;">50 MT</div>
                    </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL6' && stiValue === 'St0' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 40px; font-size: 10px; padding: 2px;">40 F1</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                      </div>
                      <div class="rectangle-container">
                        <div class="rectangle light-red" style="height: 40px; font-size: 10px; padding: 2px;">40 MT</div>
                    </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P2' && tplValue === 'TPL6' && stiValue === 'St1' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 F1</div>
                          <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                      </div>
                      <div class="rectangle-container">
                        <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 MT</div>
                    </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL6' && stiValue === 'St2' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div class="rectangle light-pink" style="height: 40px; font-size: 10px; padding: 2px;">40 F1</div>
                      </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else if (pValue === 'P3' && tplValue === 'TPL6' && stiValue === 'St1' ) {
          const structureHTML = `
             <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                        <div class="rectangle light-red" style="height: 50px; font-size: 10px; padding: 2px;">50 MT</div>
                    </div>
              </div>
          `;
          formestructure.innerHTML = structureHTML;
      } else {
      formestructure.innerHTML = `<p>Aucune structure trouvée pour les sélections actuelles.</p>`;
    }
  });

  document.querySelectorAll('button').forEach(button => {
      button.style.minWidth = '44px';
      button.style.minHeight = '44px';
  });
  
  
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
      const now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
          event.preventDefault();
      }
      lastTouchEnd = now;
  }, false);
  
  
  document.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('focus', function() {
          this.style.fontSize = '16px'; 
      });
  });

  
document.getElementById('determinerStiButton').addEventListener('click', function() {
    document.getElementById('portanceInterface').style.display = 'none';
    document.getElementById('determinerStiInterface').style.display = 'block';
});

document.getElementById('sti-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const climat = document.getElementById('environnementClimatique').value;
    const drainage = document.getElementById('drainage').value;
    const sol = document.getElementById('typeSol').value;
    const zone = document.getElementById('zoneInondable').value;

    
    let stiValue = "_"; 
    
    
    if (zone === "non-inondable" && drainage === "type2" && (climat === "humide" || climat === "semi-humide") && sol === "I") {
        stiValue = "St0";
    }
   else if (zone === "non-inondable" && drainage === "type2" && (climat === "humide" || climat === "semi-humide") && sol === "II") {
       stiValue = "St1";
    }
    else if (zone === "non-inondable" && drainage === "type2" && (climat === "humide" || climat === "semi-humide") && sol === "III") {
        stiValue = "St2";
    }
    else if (zone === "non-inondable" && drainage === "type1" && (climat === "humide" || climat === "semi-humide") && sol === "I") {
        stiValue = "St1(D) ou St2(R)";
    }
    else if (zone === "non-inondable" && drainage === "type1" && (climat === "humide" || climat === "semi-humide") && sol === "II") {
        stiValue = "St2";
    }
    else if (zone === "non-inondable" && drainage === "type1" && (climat === "humide" || climat === "semi-humide") && sol === "III") {
        stiValue = "St3 ou St4";
    }
    else if (zone === "non-inondable" && drainage === "type1" && (climat === "humide" || climat === "semi-humide") && sol === "IV") {
        stiValue = "St3 ou St4";
    }

    if (zone === "non-inondable" && drainage === "type2" && climat === "aride" && sol === "I") {
        stiValue = "St1";
    }
   else if (zone === "non-inondable" && drainage === "type2" && climat === "aride" && sol === "II") {
       stiValue = "St2";
    }
    else if (zone === "non-inondable" && drainage === "type2" && climat === "aride" && sol === "III") {
        stiValue = "St3 ou St4";
    }
    else if (zone === "non-inondable" && drainage === "type2" && climat === "aride" && sol === "IV") {
        stiValue = "St3 ou St4";
    }
    if (zone === "non-inondable" && drainage === "type1" && climat === "aride" && sol === "I") {
        stiValue = "St2 ou St3";
    }
   else if (zone === "non-inondable" && drainage === "type1" && climat === "aride" && sol === "II") {
       stiValue = "St2";
    }
    else if (zone === "non-inondable" && drainage === "type1" && climat === "aride" && sol === "III") {
        stiValue = "St3 ou St4";
    }
    else if (zone === "non-inondable" && drainage === "type1" && climat === "aride" && sol === "IV") {
        stiValue = "St3 ou St4";
    }

    if (zone === "non-inondable" && climat === "desertique" && sol === "I") {
        stiValue = "St3";
    }
   else if (zone === "non-inondable" && climat === "desertique" && sol === "II") {
       stiValue = "St3";
    }
    else if (zone === "non-inondable" && climat === "desertique" && sol === "III") {
        stiValue = "St3 ou St4";
    }
    else if (zone === "non-inondable" && climat === "desertique" && sol === "IV") {
        stiValue = "St3 ou St4";
    }

    else if (zone === "inondable" && (climat === "humide" || climat === "semi-humide" || climat === "desertique" || climat === "aride" ) && sol === "I") {
        stiValue = "St0";
    }
    else if (zone === "inondable" && (climat === "humide" || climat === "semi-humide" || climat === "desertique" || climat === "aride" ) && sol === "II") {
        stiValue = "St1";
    }
    else if (zone === "inondable" && (climat === "humide" || climat === "semi-humide" || climat === "desertique" || climat === "aride" ) && sol === "III") {
        stiValue = "St2";
    }
    else if (zone === "inondable" && (climat === "humide" || climat === "semi-humide" || climat === "desertique" || climat === "aride" ) && sol === "IV") {
        stiValue = "St2 ou plus";
    }
    
    document.getElementById('stiResult').textContent = `Valeur Sti déterminée : ${stiValue}`;
    
    
    const explications = {
        "St0": {
            desc: "Sol très stable avec excellente portance",
            reco: "Traitement minimal acceptable."
        },
        "St1": {
            desc: "Sol stable avec bonne portance",
            reco: "Traitement léger recommandé."
        },
        "St2": {
            desc: "Sol moyennement stable avec portance acceptable",
            reco: "Traitement modéré nécessaire. "
        },
        "St3": {
            desc: "Sol peu stable avec portance limitée",
            reco: "Renforcement important nécessaire."
        },
        "St4": {
            desc: "Sol instable avec très faible portance",
            reco: "Renforcement très important obligatoire."
        },
        "St1(D) ou St2(R)": {
            desc:  "D : Déblai R : Remblai",
        },
        "St3 ou St4": {
            desc: "Sol instable avec très faible portance",
            reco: " Voir tableau ci-dessous pour les caractéristiques techniques.",
        },
        "St2 ou St3": {
            desc: "Sol moyennement stable avec portance acceptable",
            reco: " Voir tableau ci-dessous pour les caractéristiques techniques.",
        }
    };
    
    const stiBase = stiValue.split("-")[0];
    const explication = explications[stiBase] || {
        desc: "_",
        reco: "_"
    };
    
    document.getElementById('stiExplication').textContent = `Caractéristique : ${explication.desc}`;
    document.getElementById('stiRecommandation').textContent = `Recommandation : ${explication.reco}`;
    document.getElementById('stiResultContainer').style.display = 'block';

    if (stiValue.includes("St3 ou St4") || stiValue.includes("St2 ou plus")) {
        document.getElementById('stiTableContainer').style.display = 'block';
    } else {
        document.getElementById('stiTableContainer').style.display = 'none';
    }

    if (stiValue.includes("St2 ou St3")) {
        document.getElementById('CBRTableContainer').style.display = 'block';
    } else {
        document.getElementById('CBRTableContainer').style.display = 'none';
    }
    t
    document.getElementById('stiResultContainer').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('categorieSolButton').addEventListener('click', function() {
    document.getElementById('portanceInterface').style.display = 'none';
    document.getElementById('categorieSolInterface').style.display = 'block';
});

// Fonctions pour l'interface Catégorie de Sol
function openTab(tabName) {
    const tabs = document.querySelectorAll('#categorieSolInterface .tab-content');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    const tabButtons = document.querySelectorAll('#categorieSolInterface .tab');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

function initGranulometryTable() {
    const sieveSizes = [
        100, 80, 63, 50, 40, 31.5, 25, 20, 16, 14, 12.5, 10, 8, 6.3, 
        5, 4, 2, 1.25, 0.63, 0.315, 0.16, 0.08
    ];
    
    const initialMasses = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.1, 
        0.4, 1.35, 10.85, 6.6, 30.2, 65.3, 60.3, 10.2
    ];
    
    const tableBody = document.querySelector('#granulometry-table tbody');
    let cumulativeMass = 0;
    let dryMass = 600; // Default value
    
    sieveSizes.forEach((size, index) => {
        const mass = initialMasses[index];
        cumulativeMass += mass;
        const percentRetained = (cumulativeMass / dryMass) * 100;
        const percentPassing = 100 - percentRetained;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${size}</td>
            <td><input type="number" value="${mass.toFixed(2)}" onchange="updateGranulometry()"></td>
            <td>${cumulativeMass.toFixed(2)}</td>
            <td>${percentRetained.toFixed(2)}%</td>
            <td>${percentPassing.toFixed(2)}%</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function updateGranulometry() {
    const dryMass = parseFloat(document.getElementById('dry-mass').value) || 600;
    const rows = document.querySelectorAll('#granulometry-table tbody tr');
    let cumulativeMass = 0;
    
    rows.forEach(row => {
        const cells = row.cells;
        const mass = parseFloat(cells[1].querySelector('input').value) || 0;
        cumulativeMass += mass;
        
        cells[2].textContent = cumulativeMass.toFixed(2);
        
        const percentRetained = (cumulativeMass / dryMass) * 100;
        cells[3].textContent = percentRetained.toFixed(2) + '%';
        
        const percentPassing = 100 - percentRetained;
        cells[4].textContent = percentPassing.toFixed(2) + '%';
    });
}

function updateWaterContent() {
    const dryMass = parseFloat(document.getElementById('dry-mass').value) || 0;
    const wetMass = parseFloat(document.getElementById('wet-mass').value) || 0;
    const dryMassAfter = parseFloat(document.getElementById('dry-mass-after').value) || 0;
    
    if (dryMass > 0) {
        const waterContent = ((wetMass - dryMass) / dryMass) * 100;
        document.getElementById('water-content-result').textContent = waterContent.toFixed(2) + '%';
    }
    
    updateGranulometry();
}

function classifySoil() {
    
    const passant008 = parseFloat(document.getElementById('passant-008').value) || 0;
    const passant2 = parseFloat(document.getElementById('passant-2').value) || 0;
    const wl = parseFloat(document.getElementById('wl').value) || 0;
    const wp = parseFloat(document.getElementById('wp').value) || 0;
    const vbs = parseFloat(document.getElementById('vbs').value) || 0;
    const dmax = parseFloat(document.getElementById('dmax').value) || 0;
    const passant50 = parseFloat(document.getElementById('passant-50').value) || 0;
    
    
    const ip = wl - wp;
    document.getElementById('ip-result').textContent = ip;
    
    let classification = "";
    let categorie = "";
    
    if (dmax <= 50) {
        if (ip <= 12 && passant008 >= 35) {
            classification = "A1";
            categorie = " I";
        } else if (ip > 12 && ip <= 25 && passant008 >= 35 ) {
            classification = "A2";
            categorie = " I";
        } else if (ip > 25 && ip <= 40 && passant008 >= 35  ) {
            classification = "A3";
            categorie = " I";
        } else if (ip > 40 && passant008 >= 35) {
            classification = "A4";
            categorie = " I";
        } else if (ip <= 10 && passant008 >= 12 && passant008 < 35) {
            classification = "B5";
            categorie = "II";
        } else if (ip > 10 && passant008 >= 12 && passant008 < 35) {
            classification = "B6";
            categorie = "II";
        } else if (passant2 > 70 && vbs < 0.1) {
            classification = "D1";
            categorie = "III";
        } else if (passant2 <= 70 && vbs < 0.1) {
            classification = "D2";
            categorie = "III";
        } else if (passant2 > 70 && vbs >= 0.1 && vbs >= 0.1 && vbs < 0.2) {
            classification = "B1";
            categorie = "III";
        } else if (passant2 <= 70 && vbs >= 0.1 && vbs >= 0.1 && vbs < 0.2) {
            classification = "B3";
            categorie = "IV";
        } else if (passant2 <= 70 && vbs >= 0.2) {
            classification = "B4";
            categorie = "II";
        } else if (passant2 > 70 && vbs >= 0.2) {
            classification = "B2";
            categorie = "II";
        }
    } else {
        if (passant50 >= 60 && dmax > 50) {
            if (ip <= 12 && passant008 >= 35) {
                classification = "C1A1";
                categorie = "II";
            } else if (ip > 12 && ip <= 25 && passant008 >= 35) {
                classification = "C1A2";
                categorie = "II";
            }else if (vbs < 0.1 && passant008 < 12){
                classification = "D3";
                categorie = "IV";
            } else if (ip > 25 && ip <= 40 && passant008 >= 35) {
                classification = "C1A3";
                categorie = "II";
            } else if (ip > 40 && passant008 >= 35) {
                classification = "C1A4";
                categorie = "II";
            } else if (ip <= 10 && passant008 >= 12 && passant008 < 35) {
                classification = "C1B5";
                categorie = "II";
            } else if (ip > 10 && passant008 >= 12 && passant008 < 35) {
                classification = "C1B6";
                categorie = "II";
            } else if (passant2 > 70 && vbs < 0.1) {
                classification = "C1D1";
            } else if (passant2 <= 70 && vbs < 0.1) {
                classification = "C1D2";
            } else if (passant2 > 70 && vbs >= 0.1 && vbs >= 0.1 && vbs < 0.2) {
                classification = "C1B1";
                categorie = "IV";
            } else if (passant2 <= 70 && vbs >= 0.1 && vbs >= 0.1 && vbs < 0.2) {
                classification = "C1B3";
                categorie = "IV";
            } else if (passant2 <= 70 && vbs >= 0.2) {
                classification = "C1B4";
                categorie = "IV";
            } else if (passant2 > 70 && vbs >= 0.2) {
                classification = "C1B2";
                categorie = "IV";
            }
    } else {
        if (passant50 < 60 && dmax > 50) {
            if (ip <= 12 && passant008 >= 35) {
                classification = "C2A1";
                categorie = "II";
            } else if (vbs < 0.1 && passant008 < 12){
                classification = "D3";
                categorie = "IV";
            } else if (ip > 12 && ip <= 25 && passant008 >= 35) {
                classification = "C2A2";
                categorie = "II";
            } else if (ip > 25 && ip <= 40 && passant008 >= 35) {
                classification = "C2A3";
                categorie = "II";
            } else if (ip > 40 && passant008 >= 35) {
                classification = "C2A4";
                categorie = "II";
            } else if (ip <= 10 && passant008 >= 12 && passant008 < 35) {
                classification = "C2B5";
                categorie = "II";
            } else if (ip > 10 && passant008 >= 12 && passant008 < 35) {
                classification = "C2B6";
                categorie = "II";
            } else if (passant2 > 70 && vbs < 0.1) {
                classification = "C2D1";
            } else if (passant2 <= 70 && vbs < 0.1) {
                classification = "C2D2";
            } else if (passant2 > 70 && vbs >= 0.1 && vbs >= 0.1 && vbs < 0.2) {
                classification = "C2B1";
                categorie = "IV";
            } else if (passant2 <= 70 && vbs >= 0.1 && vbs >= 0.1 && vbs < 0.2) {
                classification = "C2B3";
                categorie = "IV";
            } else if (passant2 <= 70 && vbs >= 0.2) {
                classification = "C2B4";
                categorie = "IV";
            } else if (passant2 > 70 && vbs >= 0.2) {
                classification = "CB2";
                categorie = "IV";
            }
        }
    }
    }
    
    document.getElementById('soil-class').textContent = classification;
    document.getElementById('classification-result').innerHTML = `
        <h3>Classification du Sol</h3>
        <p>Classification: <span id="soil-class">${classification}</span></p>
        <h3>Catégorie de sol</h3>
        <p>categorie: <span id="soil-class">${categorie}</span></p>
    `;
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de l'interface catégorie de sol
    initGranulometryTable();
    
    // Écouteurs d'événements
    document.getElementById('dry-mass').addEventListener('input', updateWaterContent);
    document.getElementById('wet-mass').addEventListener('input', updateWaterContent);
    document.getElementById('dry-mass-after').addEventListener('input', updateWaterContent);
    
    document.getElementById('backCategorieSolButton').addEventListener('click', function() {
        document.getElementById('categorieSolInterface').style.display = 'none';
        document.getElementById('portanceInterface').style.display = 'block';
    });
    
    document.getElementById('categorieSolButton').addEventListener('click', function() {
        document.getElementById('portanceInterface').style.display = 'none';
        document.getElementById('categorieSolInterface').style.display = 'block';
    });
});
