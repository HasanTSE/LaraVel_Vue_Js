
  //alert("okk");
  
  function dalBtnRecipeCal(){
	  //alert("okk");
	    // pickup data

	    //var B7_bt = (jQuery("[name='B7_bt']").val() !='')? jQuery("[name='B7_bt']").val():0;
	    //var B9_lgn = (jQuery("[name='B9_lgn']").val() !='')? parseFloat(jQuery("[name='B9_lgn']").val()).toFixed(3):0;
	    //var B11_bth = (jQuery("[name='B11_bth']").val() !='')? parseFloat(jQuery("[name='B11_bth']").val()).toFixed(3):0;
		//var B12_fth = (jQuery("[name='B12_fth']").val() !='')? parseFloat(jQuery("[name='B12_fth']").val()).toFixed(3):0;
		
		if(jQuery("[name='B12_fth']").val() !='' && jQuery("[name='B12_fth']").val() !=''){
			let cal = parseFloat(parseFloat(jQuery("[name='B12_fth']").val())+((parseFloat(jQuery("[name='B12_fth']").val())*18)/100)).toFixed(3);
			jQuery("[name='B11_bth']").val(cal);
		}else{
		   jQuery("[name='B11_bth']").val(3.30);	
		}
		
	    //var E8_sr = (jQuery("[name='E8_sr']").val() !='')? parseFloat(jQuery("[name='E8_sr']").val()).toFixed(3):0;
		//var E9_rqtn = (jQuery("[name='E9_rqtn']").val() !='')? parseFloat(jQuery("[name='E9_rqtn']").val()).toFixed(3):0;
		//var E10_moq = (jQuery("[name='E10_moq']").val() !='')? parseFloat(jQuery("[name='E10_moq']").val()).toFixed(3):.55;
		//var E11_tqtn = (jQuery("[name='E11_tqtn']").val() !='')? parseFloat(jQuery("[name='E11_tqtn']").val()).toFixed(3):0;
		
		
		if(jQuery("[name='B7_bt']").val() !='' && jQuery("[name='B7_bt']").val() =="Chalk"){
			jQuery("[name='proc_cost']").val("Plain Drum");
			jQuery("[name='E8_sr']").val(0.15);
			
		   	
		}else if(jQuery("[name='B7_bt']").val() !='' && jQuery("[name='B7_bt']").val()=="Pearl"){
			
			jQuery("[name='proc_cost']").val("Plain Drum");
			jQuery("[name='E8_sr']").val(0.15);
			
		}else{
			jQuery("[name='proc_cost']").val("Road");
			jQuery("[name='E8_sr']").val(3.57);
			
		}
		
		
		
		 /* sheet_road calculation for horn button,blank thinkness, required quantity */
		if(jQuery("[name='B7_bt']").val() !="" && jQuery("[name='B7_bt']").val() =="Horn"){
			
			   var calOne = parseFloat((1/((800/parseFloat(jQuery("[name='B11_bth']").val()))/1728))*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
                  
                if(calOne >0){
				    jQuery("[name='E8_sr']").val(calOne);
	
				}else{
				jQuery("[name='E8_sr']").val(0);	
				}
			   
		}else{
			
			if(parseFloat(jQuery("[name='B9_lgn']").val())==13){
				var calTwo = parseFloat((1/9.5)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo >0){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}else{
				   jQuery("[name='E8_sr']").val(0);	
				}
			    
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==14){
				var calTwo = parseFloat((1/8.5)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==15){
				var calTwo = parseFloat((1/8.5)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==16){
				var calTwo = parseFloat((1/7.5)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==17){
				var calTwo = parseFloat((1/6.5)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==18){
				var calTwo = parseFloat((1/6.5)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==20){
				var calTwo = parseFloat((1/4.8)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==22){
				var calTwo = parseFloat((1/4)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==24){
				var calTwo = parseFloat((1/3.3)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==26){
				var calTwo = parseFloat((1/2.95)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==27){
				var calTwo = parseFloat((1/2.3)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==28){
				var calTwo = parseFloat((1/2.3)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==30){
				var calTwo = parseFloat((1/2)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==32){
				var calTwo = parseFloat((1/1.8)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==34){
				var calTwo = parseFloat((1/1.4)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==36){
				var calTwo = parseFloat((1/1.4)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==40){
				var calTwo = parseFloat((1/1)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==44){
				var calTwo = parseFloat((1/0.9)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==48){
				var calTwo = parseFloat((1/0.9)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==54){
				var calTwo = parseFloat((1/0.6)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else if(parseFloat(jQuery("[name='B9_lgn']").val())==60){
				var calTwo = parseFloat((1/0.5)*parseFloat((jQuery("[name='E9_rqtn']").val()!='')? jQuery("[name='E9_rqtn']").val():0)).toFixed(3);
			     if(calTwo){
				    jQuery("[name='E8_sr']").val(calTwo);
	
				}
				
			}else{
				 jQuery("[name='E8_sr']").val("");
			}
         
		}
		

		
		/* total_rm calculation for button type ,sheet_road,leign,blank thinkness */
		if(jQuery("[name='B7_bt']").val() !="" && jQuery("[name='B7_bt']").val() =="Chalk"){

			 jQuery("[name='E11_tqtn']").val(parseFloat(parseFloat(jQuery("[name='B11_bth']").val())*(1.9)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3));

		}else if(jQuery("[name='B7_bt']").val() !="" && jQuery("[name='B7_bt']").val() =="Pearl"){
			
			jQuery("[name='E11_tqtn']").val(parseFloat((parseFloat(jQuery("[name='B11_bth']").val())*(1.9+0.75)*parseFloat(jQuery("[name='E8_sr']").val()))).toFixed(3));
			
		}else{
			   if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==13){
				   
				 jQuery("[name='E11_tqtn']").val(parseFloat((0.075)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3)); 
			    
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==14){
				   
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.075)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3)); 
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==15){
				   
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.085)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3)); 
					
			    }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==16){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.095)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3));  
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==17){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.112)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3)); 
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==18){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.118)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3));  
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==20){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.151)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3));
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==22){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.188)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3));
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==24){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.22)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3)); 
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==26){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.25)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3)); 
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==27){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.27)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3)); 
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==28){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.291)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3));
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==30){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.34)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3));
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==32){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.38)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3));
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==34){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((E11_tqtn)*(0.44)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3));
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==36){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.5)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3));
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==40){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.6)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3)); 
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==44){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.71)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3));
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==48){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((0.873)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3));  
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==54){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((1.103)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3)); 
					
					
			   }else if(parseFloat(jQuery("[name='B9_lgn']").val()) !='' && parseFloat(jQuery("[name='B9_lgn']").val()) ==60){
					
				    jQuery("[name='E11_tqtn']").val(parseFloat((1.365)*parseFloat(jQuery("[name='E8_sr']").val())).toFixed(3));
					
			   }else{
				   
				  jQuery("[name='E11_tqtn']").val(0);   
			   }
			
		}
		
		
		 
    
  
  
  
		 // rm data
		dalBtnRecipeRMPercentToKgCal();
      
		return true;
  
   }
   
   function dalBtnRecipeRMPercentToKgCal(){
	   
	    var ttrm = parseFloat(jQuery("[name='E11_tqtn']").val()).toFixed(3);
	   
	    //var resP = 94.99;
		var resP = 49.99;
		var styP = 2.54;
		var cobP = 0.21;	
		var waxP = 0.1016;
		var mekP = 1.27;
		var lpdP = 0.0;
		var aroP = 0.0;
		var gliP = 0.0;
		var whiP = 0.1694;
		var vioP = 0.1694;
		var bluP = 0.1958;
		var blaP = 0.0511;
		var yelP = 0.3031;
		
		
		if(parseFloat(jQuery("[name='E11_tqtn']").val()) !='' && jQuery("[name='resinP']").val() !=undefined){
			
			var resigPCal = parseFloat(jQuery("[name='resinP']").val()).toFixed(3);
			
			var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val()*(parseFloat(jQuery("[name='resinP']").val())/100))).toFixed(3);
			
			 if(resigPCal){
				jQuery("[name='resinP']").val(resigPCal);
			 }
			 
			 if(resigKCal){
				jQuery("[name='resinK']").val(resigKCal); 
			 }
 		
		}else{
			
			var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val())*(resP/100)).toFixed(3);
			
			if(resigKCal){
			   jQuery("[name='resinP']").val(resP);	
			   jQuery("[name='resinK']").val(resigKCal);	
			}
			 
            	
		}
		
		if(parseFloat(jQuery("[name='E11_tqtn']").val()) !='' && jQuery("[name='styreneP']").val() !=''){
					
					var resigPCal = parseFloat(parseFloat(jQuery("[name='styreneP']").val())).toFixed(3);
					var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val()*(parseFloat(jQuery("[name='styreneP']").val())/100))).toFixed(3);
					
					 if(resigPCal){
						jQuery("[name='styreneP']").val(resigPCal);
					 }
					 
					 if(resigKCal){
						jQuery("[name='styreneK']").val(resigKCal); 
					 }
				
		}else{
			
			var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val())*(styP/100)).toFixed(3);
			if(resigKCal){
			   jQuery("[name='styreneP']").val(styP);	
			   jQuery("[name='styreneK']").val(resigKCal);	
			}
			 
				
		}
				
			
				//var styreneP = (jQuery("[name='styreneP']").val() !='')? jQuery("[name='styreneP']").val():2.54;
				//var styreneK = (jQuery("[name='styreneK']").val() !='')? jQuery("[name='styreneK']").val():0;
			  
				//var cobaltP = (jQuery("[name='cobaltP']").val() !='')? jQuery("[name='cobaltP']").val():0.21;
				//var cobaltK = (jQuery("[name='cobaltK']").val() !='')? jQuery("[name='cobaltK']").val():0;
				
				
				if(parseFloat(jQuery("[name='E11_tqtn']").val()) !='' && jQuery("[name='cobaltP']").val() !=''){
					
					var resigPCal = parseFloat(parseFloat(jQuery("[name='cobaltP']").val())).toFixed(3);
					var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val()*(parseFloat(jQuery("[name='cobaltP']").val())/100))).toFixed(3);
					
					 if(resigPCal){
						jQuery("[name='cobaltP']").val(resigPCal);
					 }
					 
					 if(resigKCal){
						jQuery("[name='cobaltK']").val(resigKCal); 
					 }
				
		}else{
			
			var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val())*(cobP/100)).toFixed(3);
			if(resigKCal){
			   jQuery("[name='cobaltP']").val(cobP);	
			   jQuery("[name='cobaltK']").val(resigKCal);	
			}
			 
				
		}
			  
				//var waxP = (jQuery("[name='waxP']").val() !='')? jQuery("[name='waxP']").val():0.10;
				//var waxK = (jQuery("[name='waxK']").val() !='')? jQuery("[name='waxK']").val():0;
				
		if(parseFloat(jQuery("[name='E11_tqtn']").val()) !='' && jQuery("[name='waxP']").val() !=''){
					
					var resigPCal = parseFloat(parseFloat(jQuery("[name='waxP']").val())).toFixed(3);
					var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val()*(parseFloat(jQuery("[name='waxP']").val())/100))).toFixed(3);
					
					 if(resigPCal){
						jQuery("[name='waxP']").val(resigPCal);
					 }
					 
					 if(resigKCal){
						jQuery("[name='waxK']").val(resigKCal); 
					 }
				
		}else{
			
			var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val())*(waxP/100)).toFixed(3);
			if(resigKCal){
			   jQuery("[name='waxP']").val(waxP);	
			   jQuery("[name='waxK']").val(resigKCal);	
			}
		}	 

				//var mekpoP = (jQuery("[name='mekpoP']").val() !='')? jQuery("[name='mekpoP']").val():0.27;
				//var mekpoK = (jQuery("[name='mekpoK']").val() !='')? jQuery("[name='mekpoK']").val():0;

		if(parseFloat(jQuery("[name='E11_tqtn']").val()) !='' && jQuery("[name='mekpoP']").val() !=''){
					
					var resigPCal = parseFloat(parseFloat(jQuery("[name='mekpoP']").val())).toFixed(3);
					var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val()*(parseFloat(jQuery("[name='mekpoP']").val())/100))).toFixed(3);
					
					 if(resigPCal){
						jQuery("[name='mekpoP']").val(resigPCal);
					 }
					 
					 if(resigKCal){
						jQuery("[name='mekpoK']").val(resigKCal); 
					 }
				
		}else{
			
			var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val())*(mekP/100)).toFixed(3);
			if(resigKCal){
			   jQuery("[name='mekpoP']").val(mekP);	
			   jQuery("[name='mekpoK']").val(resigKCal);	
			}
			 
				
		}
		
		if(parseFloat(jQuery("[name='E11_tqtn']").val()) !='' && jQuery("[name='lpdP']").val() !=''){
					
					var resigPCal = parseFloat(parseFloat(jQuery("[name='lpdP']").val())).toFixed(3);
					var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val()*(parseFloat(jQuery("[name='lpdP']").val())/100))).toFixed(3);
					
					 if(resigPCal){
						jQuery("[name='lpdP']").val(resigPCal);
					 }
					 
					 if(resigKCal){
						jQuery("[name='lpdK']").val(resigKCal); 
					 }
				
		}else{
			
			var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val())*(lpdP/100)).toFixed(3);
			if(resigKCal){
			   jQuery("[name='lpdP']").val(lpdP);	
			   jQuery("[name='lpdK']").val(resigKCal);	
			}
			 
				
		}
				


				//var arosoilPowderP = (jQuery("[name='arosoilPowderP']").val() !='')? jQuery("[name='arosoilPowderP']").val():0.55;
				//var arosoilPowderK = (jQuery("[name='arosoilPowderK']").val() !='')? jQuery("[name='arosoilPowderK']").val():0;

				
		if(parseFloat(jQuery("[name='E11_tqtn']").val()) !='' && jQuery("[name='arosoilPowderP']").val() !=''){
					
					var resigPCal = parseFloat(parseFloat(jQuery("[name='arosoilPowderP']").val())).toFixed(3);
					var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val()*(parseFloat(jQuery("[name='arosoilPowderP']").val())/100))).toFixed(3);
					
					 if(resigPCal){
						jQuery("[name='arosoilPowderP']").val(resigPCal);
					 }
					 
					 if(resigKCal){
						jQuery("[name='arosoilPowderK']").val(resigKCal); 
					 }
				
		}else{
			
			var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val())*(aroP/100)).toFixed(3);
			if(resigKCal){
			   jQuery("[name='arosoilPowderP']").val(aroP);	
			   jQuery("[name='arosoilPowderK']").val(resigKCal);	
			}
			 
				
		}


				//var glicerinP = (jQuery("[name='glicerinP']").val() !='')? jQuery("[name='glicerinP']").val():0.0;
				//var glicerinK = (jQuery("[name='glicerinK']").val() !='')? jQuery("[name='glicerinK']").val():0;

				
		if(parseFloat(jQuery("[name='E11_tqtn']").val()) !='' && jQuery("[name='glicerinP']").val() !=''){
					
					var resigPCal = parseFloat(parseFloat(jQuery("[name='glicerinP']").val())).toFixed(3);
					var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val()*(parseFloat(jQuery("[name='glicerinP']").val())/100))).toFixed(3);
					
					 if(resigPCal){
						jQuery("[name='glicerinP']").val(resigPCal);
					 }
					 
					 if(resigKCal){
						jQuery("[name='glicerinK']").val(resigKCal); 
					 }
				
		}else{
			
			var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val())*(gliP/100)).toFixed(3);
			if(resigKCal){
			   jQuery("[name='glicerinP']").val(gliP);	
			   jQuery("[name='glicerinK']").val(resigKCal);	
			}
			 
				
		}



				//var white1144P = (jQuery("[name='white1144P']").val() !='')? jQuery("[name='white1144P']").val():0.06;
				//var white1144K = (jQuery("[name='white1144K']").val() !='')? jQuery("[name='white1144K']").val():0;

				
		if(parseFloat(jQuery("[name='E11_tqtn']").val()) !='' && jQuery("[name='white1144P']").val() !=''){
					
					var resigPCal = parseFloat(parseFloat(jQuery("[name='white1144P']").val())).toFixed(3);
					var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val()*(parseFloat(jQuery("[name='white1144P']").val())/100))).toFixed(3);
					
					 if(resigPCal){
						jQuery("[name='white1144P']").val(resigPCal);
					 }
					 
					 if(resigKCal){
						jQuery("[name='white1144K']").val(resigKCal); 
					 }
				
		}else{
			
			var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val())*(whiP/100)).toFixed(3);
			if(resigKCal){
			   jQuery("[name='white1144P']").val(whiP);	
			   jQuery("[name='white1144K']").val(resigKCal);	
			}
			 
				
		}

				//var violet5019P = (jQuery("[name='violet5019P']").val() !='')? jQuery("[name='violet5019P']").val():0.16;
				//var violet5019K = (jQuery("[name='violet5019K']").val() !='')? jQuery("[name='violet5019K']").val():0;

		if(parseFloat(jQuery("[name='E11_tqtn']").val()) !='' && jQuery("[name='violet5019P']").val() !=''){
					
					var resigPCal = parseFloat(parseFloat(jQuery("[name='violet5019P']").val())).toFixed(3);
					var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val()*(parseFloat(jQuery("[name='violet5019P']").val())/100))).toFixed(3);
					
					 if(resigPCal){
						jQuery("[name='violet5019P']").val(resigPCal);
					 }
					 
					 if(resigKCal){
						jQuery("[name='violet5019K']").val(resigKCal); 
					 }
				
		}else{
			
			var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val())*(vioP/100)).toFixed(3);
			if(resigKCal){
			   jQuery("[name='violet5019P']").val(vioP);	
			   jQuery("[name='violet5019K']").val(resigKCal);	
			}
			 
				
		}
		
		if(parseFloat(jQuery("[name='E11_tqtn']").val()) !='' && jQuery("[name='blue8001P']").val() !=''){
					
					var resigPCal = parseFloat(parseFloat(jQuery("[name='blue8001P']").val())).toFixed(3);
					var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val()*(parseFloat(jQuery("[name='blue8001P']").val())/100))).toFixed(3);
					
					 if(resigPCal){
						jQuery("[name='blue8001P']").val(resigPCal);
					 }
					 
					 if(resigKCal){
						jQuery("[name='blue8001K']").val(resigKCal); 
					 }
				
		}else{
			
			var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val())*(bluP/100)).toFixed(3);
			if(resigKCal){
			   jQuery("[name='blue8001P']").val(bluP);	
			   jQuery("[name='blue8001K']").val(resigKCal);	
			}
			 
				
		}
		
		if(parseFloat(jQuery("[name='E11_tqtn']").val()) !='' && jQuery("[name='bla3003P']").val() !=''){
					
					var resigPCal = parseFloat(parseFloat(jQuery("[name='bla3003P']").val())).toFixed(3);
					var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val()*(parseFloat(jQuery("[name='bla3003P']").val())/100))).toFixed(3);
					
					 if(resigPCal){
						jQuery("[name='bla3003P']").val(resigPCal);
					 }
					 
					 if(resigKCal){
						jQuery("[name='bla3003K']").val(resigKCal); 
					 }
				
		}else{
			
			var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val())*(blaP/100)).toFixed(3);
			if(resigKCal){
			   jQuery("[name='bla3003P']").val(blaP);	
			   jQuery("[name='bla3003K']").val(resigKCal);	
			}
			 
				
		}
		
		if(parseFloat(jQuery("[name='E11_tqtn']").val()) !='' && jQuery("[name='yellow6799P']").val() !=''){
					
					var resigPCal = parseFloat(parseFloat(jQuery("[name='yellow6799P']").val())).toFixed(3);
					var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val()*(parseFloat(jQuery("[name='yellow6799P']").val())/100))).toFixed(3);
					
					 if(resigPCal){
						jQuery("[name='yellow6799P']").val(resigPCal);
					 }
					 
					 if(resigKCal){
						jQuery("[name='yellow6799K']").val(resigKCal); 
					 }
				
		}else{
			
			var resigKCal = parseFloat(parseFloat(jQuery("[name='E11_tqtn']").val())*(yelP/100)).toFixed(3);
			if(resigKCal){
			   jQuery("[name='yellow6799P']").val(yelP);	
			   jQuery("[name='yellow6799K']").val(resigKCal);	
			}
			 
				
		}

         /*
		var ttP = parseFloat(jQuery("[name='resinP']").val())
		+parseFloat(jQuery("[name='styreneP']").val())
		+parseFloat(jQuery("[name='cobaltP']").val())
		+parseFloat(jQuery("[name='waxP']").val())
		+parseFloat(jQuery("[name='mekpoP']").val())
		+parseFloat(jQuery("[name='lpdP']").val())
		+parseFloat(jQuery("[name='arosoilPowderP']").val())
		+parseFloat(jQuery("[name='glicerinP']").val())
		+parseFloat(jQuery("[name='white1144P']").val())
		+parseFloat(jQuery("[name='violet5019P']").val())
		+parseFloat(jQuery("[name='blue8001P']").val())
		+parseFloat(jQuery("[name='bla3003P']").val())
		+parseFloat(jQuery("[name='yellow6799P']").val());
		   
					 
		var ttk = parseFloat(jQuery("[name='resinK']").val())
		 +parseFloat(jQuery("[name='styreneK']").val())
		 +parseFloat(jQuery("[name='cobaltK']").val())
         +parseFloat(jQuery("[name='waxK']").val())
		 +parseFloat(jQuery("[name='mekpoK']").val())
		 +parseFloat(jQuery("[name='lpdK']").val())
		 +parseFloat(jQuery("[name='arosoilPowderK']").val())
		 +parseFloat(jQuery("[name='glicerinK']").val())
		 +parseFloat(jQuery("[name='white1144K']").val())
		 +parseFloat(jQuery("[name='violet5019K']").val())
		 +parseFloat(jQuery("[name='blue8001K']").val())
		 +parseFloat(jQuery("[name='bla3003K']").val())
		 +parseFloat(jQuery("[name='yellow6799K']").val());

       jQuery("[name='ttP']").val(parseFloat(ttP).toFixed(3));
       jQuery("[name='ttk']").val(parseFloat(ttk).toFixed(3));

       jQuery("#tp").html(parseFloat(ttP).toFixed(3)+"%");
          */
         calculateTotal();	   

	   

	
	   return true;
   }
   
   function calculateTotal(){
	   
	   
	   var ttP = parseFloat(jQuery("[name='resinP']").val())
		+parseFloat(jQuery("[name='styreneP']").val())
		+parseFloat(jQuery("[name='cobaltP']").val())
		+parseFloat(jQuery("[name='waxP']").val())
		+parseFloat(jQuery("[name='mekpoP']").val())
		+parseFloat(jQuery("[name='lpdP']").val())
		+parseFloat(jQuery("[name='arosoilPowderP']").val())
		+parseFloat(jQuery("[name='glicerinP']").val())
		+parseFloat(jQuery("[name='white1144P']").val())
		+parseFloat(jQuery("[name='violet5019P']").val())
		+parseFloat(jQuery("[name='blue8001P']").val())
		+parseFloat(jQuery("[name='bla3003P']").val())
		+parseFloat(jQuery("[name='yellow6799P']").val());
		   
					 
		var ttk = parseFloat(jQuery("[name='resinK']").val())
		 +parseFloat(jQuery("[name='styreneK']").val())
		 +parseFloat(jQuery("[name='cobaltK']").val())
         +parseFloat(jQuery("[name='waxK']").val())
		 +parseFloat(jQuery("[name='mekpoK']").val())
		 +parseFloat(jQuery("[name='lpdK']").val())
		 +parseFloat(jQuery("[name='arosoilPowderK']").val())
		 +parseFloat(jQuery("[name='glicerinK']").val())
		 +parseFloat(jQuery("[name='white1144K']").val())
		 +parseFloat(jQuery("[name='violet5019K']").val())
		 +parseFloat(jQuery("[name='blue8001K']").val())
		 +parseFloat(jQuery("[name='bla3003K']").val())
		 +parseFloat(jQuery("[name='yellow6799K']").val());
		 
		 if(parseFloat(ttP) >0){
			 jQuery("[name='ttP']").val(parseFloat(ttP).toFixed(3)); 
		 }else{
			 jQuery("[name='ttP']").val(0); 
		 }
		 
		  if(parseFloat(ttk) >0){
			 jQuery("[name='ttk']").val(parseFloat(ttk).toFixed(3));
			  jQuery("#tp").html(parseFloat(ttP).toFixed(3)+"%");
		 }else{
			 jQuery("[name='ttk']").val(0);
			  jQuery("#tp").html(0+"%");
		 }

      
       

      

        return true;	   
   }

   function percentToKg(resinP,resinK){
	   
	   /*jQuery("#rm_requisition").hide(true);*/
	   
	   
	   
	    var ttrm = (jQuery("[name='E11_tqtn']").val() !='')? parseFloat(jQuery("[name='E11_tqtn']").val()):0;
		var percentVal = (jQuery("[name='"+resinP+"']").val() !='')? parseFloat(jQuery("[name='"+resinP+"']").val()):parseFloat(0.0);

		if(ttrm >0  && parseFloat(percentVal) > 0){
			//alert(ttrm);
			
		   var kgVal = (ttrm*(percentVal/100));
		   
		   //alert("1-"+kgVal);
		   
           jQuery("[name='"+resinK+"']").val(parseFloat(kgVal).toFixed(3));
		   calculateTotal();
		   
		}else{
			//alert("2-"+0);
		  jQuery("[name='"+resinK+"']").val(0);	
		   calculateTotal();
		  
		} 

        
         return true;		
   }
   
   function kgToPercent(resinK,resinP){
	   
	    var ttrm = (jQuery("[name='E11_tqtn']").val() !='')? parseFloat(jQuery("[name='E11_tqtn']").val()):0;
		var kgVal = (jQuery("[name='"+resinK+"']").val() !='')? parseFloat(jQuery("[name='"+resinK+"']").val()):parseFloat(0.0);

		if((ttrm >0) && parseFloat(kgVal) > 0){
			//alert(ttrm);
			
		   var percentVal = ((kgVal*100)/ttrm);
		   
		   //alert("1-"+kgVal);
		   
           jQuery("[name='"+resinP+"']").val(parseFloat(percentVal).toFixed(3));
		   calculateTotal();
		   
		}else{
			//alert("2-"+0);
		  jQuery("[name='"+resinP+"']").val(0);	
		   calculateTotal();
		  
		}  
		
		 
         return true;
   }
   
   dalBtnRecipeCal();
