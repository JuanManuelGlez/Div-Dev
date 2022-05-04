
               function downloadPDF(){
                const canvas1=document.getElementById("porEstados");
                const canvas1Image= canvas1.toDataURL('image/jpeg',1.0);

                const canvas2=document.getElementById("porProcedencia");
                const canvas2Image= canvas2.toDataURL('image/jpeg',1.0);

                const canvas3=document.getElementById("porResolucion");
                const canvas3Image= canvas3.toDataURL('image/jpeg',1.0);

                const canvas4=document.getElementById("tiempoYDestiempo");
                const canvas4Image= canvas4.toDataURL('image/jpeg',1.0);
                
                const canvas5=document.getElementById("promedios");
                const canvas5Image= canvas5.toDataURL('image/jpeg',1.0);
                
                const canvas6=document.getElementById("porTipoIncidencia");
                const canvas6Image= canvas6.toDataURL('image/jpeg',1.0);

                const usuario=document.getElementById("filtro_usuario");
                const usuarios= usuario.options[usuario.selectedIndex].text;
                
                const tipo=document.getElementById("filtro_tipo_incidencia");
                const tipos= tipo.options[tipo.selectedIndex].text;
                
                const archi=document.getElementById("filtro_archivado");
                const archis= archi.options[archi.selectedIndex].text;
                
                const inicio=document.getElementById("fecha_inicio").value;
                if (inicio===0){
                    fecha_inicio="N/A";
                }else{
                    fecha_inicio=inicio;
                }
                
                const fin=document.getElementById("fecha_fin").value;
                if (fin===0){
                    fecha_fin="N/A";
                }else{
                    fecha_fin=fin;
                }

                
                let pdf = new jsPDF();
                
                pdf.setFontSize(20);
                pdf.text(10,15,"Zebrands");
                pdf.text(75,20,"Reporte de Métricas");
                pdf.text(175,15,"Ticketz");
                pdf.setFontSize(10);
                
                pdf.setFontStyle("bold");
                pdf.text(20,30,"Usuarios: ");
                pdf.setFontStyle("normal");
                pdf.setFontSize(8);
                pdf.text(20,35,usuarios);
                
                pdf.setFontSize(10);
                pdf.setFontStyle("bold");
                pdf.text(50,30,"Tipos de incidencia: ");
                pdf.setFontStyle("normal");
                pdf.setFontSize(8);
                pdf.text(50,35,tipos);
                
                pdf.setFontSize(10);
                pdf.setFontStyle("bold");
                pdf.text(100,30,"Archivados: ");
                pdf.setFontStyle("normal");
                pdf.setFontSize(8);
                pdf.text(100,35,archis);
                
                pdf.setFontSize(10);
                pdf.setFontStyle("bold");
                pdf.text(130,30,"Fecha Inicio: ");
                pdf.setFontStyle("normal");
                pdf.setFontSize(8);
                pdf.text(130,35,fecha_inicio);    

                pdf.setFontSize(10);
                pdf.setFontStyle("bold");
                pdf.text(160,30,"Fecha Fin: ");
                pdf.setFontStyle("normal");
                pdf.setFontSize(8);
                pdf.text(160,35,fecha_fin);  

                ////PORESTADOS
                pdf.setFontStyle("bold");
                pdf.text(8,50,"Status");
                pdf.setFontStyle("normal");
                pdf.setFontSize(8);
                pdf.text(8,55,"Tickets organizados por su estado actual");
                pdf.addImage(canvas1Image, 'JPEG',5,60,90,70);
                ////PROCEDENCIA
                pdf.setFontStyle("bold");
                pdf.setFontSize(10);
                pdf.text(112,50,"Procedencia");
                pdf.setFontStyle("normal");
                pdf.setFontSize(8);
                pdf.text(112,55,"Tickets organizados por su procedencia");
                pdf.addImage(canvas2Image,'JPEG',115,60,90,70);
                ////Resolucion
                pdf.setFontStyle("bold");
                pdf.setFontSize(10);
                pdf.text(95,140,"Resolucion");
                pdf.text(8,115,"");
                pdf.addImage(canvas3Image,'JPEG',15,145,170,55);

                ///TIEMPO Y DESTIEMPO
                pdf.setFontStyle("bold");
                pdf.setFontSize(10);
                pdf.text(12,210,"Historial de tickets completados a tiempo vs fuera de tiempo");
                pdf.setFontStyle("normal");
                pdf.setFontSize(8);
                pdf.text(12,215,"Cuantos tickets fueron completados a tiempo vs fuera de tiempo por semana");
                pdf.addImage(canvas4Image,'JPEG',15,220,170,60);
                
                /////
                pdf.addPage()
                pdf.setFontSize(20);
                pdf.text(60,20,"Reporte de Métricas General");
                pdf.text(10,15,"Zebrands");
                pdf.text(175,15,"Ticketz");
                pdf.setFontSize(10);
                ///Promedios
                pdf.setFontStyle("bold")
                pdf.setFontSize(10);
                pdf.text(70,35,"Tiempo promedio de resolución según categoría");
                pdf.text(12,205,"");
                pdf.addImage(canvas5Image,'JPEG',20,45,160,90);


                //TipoIncidencia
                pdf.setFontStyle("bold");
                pdf.setFontSize(10);
                pdf.text(12,155,"Tipo de Incidencia:");
                pdf.setFontStyle("normal");
                pdf.setFontSize(8);
                pdf.text(12,160,"Tickets organizados por su tipo de incidencia");
                pdf.addImage(canvas6Image,'JPEG',10,165,190,75);

                let today = new Date().toISOString().slice(0, 10)

                pdf.save('Reporte_'+ today +'.pdf');
            }
     