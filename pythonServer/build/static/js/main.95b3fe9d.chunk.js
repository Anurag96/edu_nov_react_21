(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],{13:function(e,i,t){},15:function(e,i,t){},16:function(e,i,t){"use strict";t.r(i);var o=t(1),n=t.n(o),a=t(8),s=t.n(a),r=t(2),c=t(3),d=t(5),b=t(4),m=(t(13),t(0)),l=function(e){Object(d.a)(t,e);var i=Object(b.a)(t);function t(){var e;return Object(r.a)(this,t),(e=i.call(this)).handleChange=function(i){e.setState({keyword:i.target.value?i.target.value:"User Input Here"}),e.props.userText(i.target.value)},e.state={title:"React App",keyword:"User Input Here"},e}return Object(c.a)(t,[{key:"render",value:function(){return Object(m.jsx)(o.Fragment,{children:Object(m.jsxs)("header",{children:[Object(m.jsx)("div",{className:"logo",children:this.state.title}),Object(m.jsxs)("center",{children:[Object(m.jsx)("input",{onChange:this.handleChange}),Object(m.jsx)("div",{style:{color:"white",fontSize:"15px"},children:this.state.keyword})]}),Object(m.jsx)("hr",{})]})})}}]),t}(o.Component),u=function(e){return console.log(e),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("hr",{}),Object(m.jsx)("center",{children:Object(m.jsxs)("h3",{children:["\xa9 Developer Funnel ",e.year," ",e.month," "]})})]})},p=(t(15),function(e){var i=e.prodData.map((function(e){return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{src:e.image,style:{height:100,width:100}}),Object(m.jsx)("h2",{children:e.name}),Object(m.jsx)("p",{children:e.brand})]},e.id)}));return Object(m.jsx)("div",{className:"mainDiv",children:i})}),g=t(7),h=function(e){Object(d.a)(t,e);var i=Object(b.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=i.call(this,e)).filterProduct=function(e){var i=o.state.products.filter((function(i){return i.name.toLowerCase().indexOf(e.toLowerCase())>-1}));o.setState({filtered:i})},o.state={products:g,filtered:g},o}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return Object(m.jsxs)(n.a.Fragment,{children:[Object(m.jsx)(l,{userText:function(i){e.filterProduct(i)}}),Object(m.jsx)(p,{prodData:this.state.filtered}),Object(m.jsx)(u,{year:"2022",month:"Nov"})]})}}]),t}(o.Component);s.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"id":1,"brand":"3M","discount":"Less than 10%","form":"Mask","use":"Respiratory Care","name":"3M 9004IN Particle Respirator Mask","image":"https://i.ibb.co/8BJhgK2/r6xkegcloxgn5eq8owwg.jpg","description":"box of 10 masks","cost":230},{"id":2,"brand":"Vogmask","discount":"10% and above","form":"Mask","uses":"Respiratory Care","name":"Vogmask Vector Havoc N99CV Mask Large","image":"https://i.ibb.co/fHQ8JY4/kclatp7d9dt0dwgu4zkq.jpg","description":"box of 10 masks","cost":300},{"id":3,"brand":"Faballey","discount":"10% and above","form":"Mask","uses":"Respiratory Care","name":"Faballey Boota 3 Ply Tie On Balloon Reusable Mask Set","image":"https://i.ibb.co/wCQQF6F/swa8ycmducwcfdmehhqe.jpg","description":"box of 20 masks","cost":380},{"id":4,"brand":"FLOH","discount":"Less than 10%","form":"Mask","uses":"Respiratory Care","name":"FLOH KN95 Four Layered Air Purifying Particle Respirator Mask","image":"https://i.ibb.co/MSxXqxj/nwow2gmqjkmrqewkkx6d.png","description":"box of 10 masks","cost":222},{"id":5,"brand":"3M","discount":"20% and above","form":"Sanitizer","use":"Skin Care","name":"3M Avagard CHG Handrub Hand Sanitizer Antiseptic Solution","image":"https://i.ibb.co/HpHFygW/vcweesrsrifexmfl55wo.png","description":"bottle of 100 ml Liquid","cost":200},{"id":6,"brand":"Dettol","discount":"Less than 10%","form":"Liquid","use":"Skin Care","name":"Dettol Original Liquid Handwash","image":"https://i.ibb.co/tY2xBCG/j4sqs2mbm0k8bolkmoie.jpg","description":"pump bottle of 200 ml Liquid","cost":140},{"id":7,"brand":"FLOH","discount":"30% and above","form":"Sanitizer","use":"Skin Care","name":"FLOH Sharp Hand Sanitizer Gel","image":"https://i.ibb.co/3kWY6kf/d0spy2mrd5zdl8kqvrqi.png","description":"fliptop bottle of 750 ml Sanitizer","cost":300},{"id":8,"brand":"Lifebuoy","discount":"Less than 10%","form":"Sanitizer","use":"Skin Care","name":"Lifebuoy Total Immunity Boosting","image":"https://i.ibb.co/gdLGpT9/quirhf5d70blu2vopx0i.jpg","description":"Hand Sanitizer","cost":80},{"id":9,"brand":"AIO","discount":"10% and above","form":"Glove","use":"Surgical Aids","name":"AIO Large White Latex Gloves (Lightly Powdered)","image":"https://i.ibb.co/dQ77Gmd/z6c8yluzcazs6vz8exye.png","description":"box of 100 Gloves","cost":2345},{"id":10,"brand":"Dominion","discount":"10% and above","form":"Glove","use":"Surgical Aids","name":"Dominion Care Large Disposable Nitrile Examination Glove","image":"https://i.ibb.co/3d3wGg1/ylqwnob7subiqzw8glv6.png","description":"box of 100 Gloves","cost":2165},{"id":11,"brand":"Nulife","discount":"Less than 10%","form":"Glove","use":"Surgical Aids","name":"Nulife Latex Medical Examination Powdered Gloves Medium","image":"https://i.ibb.co/j382LmP/lutid8hcmdhznj3vtzkg.jpg","description":"box of 100 Gloves","cost":2450},{"id":12,"brand":"Nulife","discount":"Less than 10%","form":"Glove","use":"Surgical Aids","name":"Nulife Sterile Powdered Surgical Gloves 7.0","image":"https://i.ibb.co/1XBFnGQ/cfvhf73iuhbvrqdcro3b.jpg","description":"box of 50 Gloves","cost":1401},{"id":13,"brand":"Nulife","discount":"Less than 10%","form":"Glove","use":"Surgical Aids","name":"Nulife Latex Medical Examination Powdered Gloves Large","image":"https://i.ibb.co/NC97S6L/aurrxnutankojka5aka0.jpg","description":"box of 100 Gloves","cost":2310},{"id":14,"brand":"Savion","discount":"Less than 10%","form":"Bottle","use":"First Aid","name":"Savlon Antiseptic Disinfectant Liquid","image":"https://i.ibb.co/mBKqHvT/ot724agfjsdhntsgbnev.png","description":"bottle of 1000 ml Liquid","cost":217},{"id":15,"brand":"Coronation","discount":"Less than 10%","form":"Glove","use":"First Aid","name":"Coronation Latex Examination Glove Medium","image":"https://i.ibb.co/nryTm7w/jphdf2v5me8vdypheeqv.jpg","description":"box of 100 Gloves","cost":581},{"id":16,"brand":"Volatile","discount":"Less than 10%","form":"Pack","use":"First Aid","name":"Volatile Marketing Ultra Digital Thermometer","image":"https://i.ibb.co/sHZKRhJ/lqp5zyhcmwwufo78rrkx.jpg","description":"packet of 1 Unit","cost":202},{"id":17,"brand":"Dettol","discount":"Less than 10%","form":"Liquid","use":"First Aid","name":"Dettol Antiseptic Disinfectant Liquid","image":"https://i.ibb.co/z7zqLz5/ujyvrk4znxpycleal5e1.jpg","description":"bottle of 60 ml Liquid","cost":30.25},{"id":18,"brands":"Ankush","discount":"Less than 10%","form":"Liquid","use":"First Aid","name":"Keya Seth Medicure Ankush Antiseptic","image":"https://i.ibb.co/Cwvh2RD/eatvvln8vxzq6bot2jp5.png","description":"bottle of 100 ml Liquid","cost":50},{"id":19,"brand":"Giloy","discount":"30% and above","form":"Capsules","use":"Fever & Pain Management","name":"1mg Giloy 500mg Capsule","image":"https://i.ibb.co/7Yjv6cT/o7mnm6jsfwkimiqwnxjp.png","description":"bottle of 30 capsules","cost":129},{"id":20,"brand":"Sahyog","discount":"30% and above","form":"Pack","use":"Fever & Pain Management","name":"Sahyog Wellness 2306 Multi","image":"https://i.ibb.co/zQFXc14/hwsmjd0dcodd5gx13g7l.jpg","description":"box of 1 Unit","cost":999},{"id":21,"brand":"Dr Morepen","discount":"10% and above","form":"Pack","use":"Fever & Pain Management","name":"Dr Morepen NCT-02 Non Contact Infra Red Thermometer","image":"https://i.ibb.co/Rggkk24/jucvx8dpn51mqzc2tdgy.png","description":"box of 1 Unit","cost":6499},{"id":22,"brand":"MCP","discount":"30% and above","form":"Pack","use":"Fever & Pain Management","name":"MCP Medical Infra Red Forehead Thermometer for Baby & Adult","image":"https://i.ibb.co/vPWbNjL/aiptwfmfetgq7tvfrwbc.png","description":"box of 1 Unit","cost":2180},{"id":23,"brand":"MCP","discount":"30% and above","form":"Pack","use":"Fever & Pain Management","name":"MCP Flexible Tip Waterproof Digital Thermometer Orange","image":"https://i.ibb.co/t8v78P7/cyaa0qoo93nkjdyfyehs.png","description":"box of 1 Unit","cost":220},{"id":24,"brand":"Omron","discount":"Less than 10%","form":"Pack","use":"Fever & Pain Management","name":"Fever Management Combo of Omron MC 246 Thermometer &","image":"https://i.ibb.co/7jdGYfD/hazrvv9v9bbp9khbvbgi.jpg","description":"combo pack of 2 Packs","cost":269.91},{"id":25,"brand":"Phytorelief","discount":"10% and above","form":"Pack","use":"Cough & cold","name":"Phytorelief-CC Lozenges Sugar Free","image":"https://i.ibb.co/KxWm0S9/slc75udpwkxw0oen8zqi.jpg","description":"strip of 10 lozenges","cost":261},{"id":26,"brand":"1mg","discount":"30% and above","form":"Bottle","use":"Cough & cold","name":"1mg Turmeric Drops with Piperine","image":"https://i.ibb.co/kxVhzfG/kkdzmgnewqmtezxvl39v.jpg","description":"bottle of 30 ml Drop","cost":138},{"id":27,"brand":"Coronation","discount":"30% and above","form":"Pack","use":"Cough & cold","name":"Coronation All-In-One Vaporiser","image":"https://i.ibb.co/bH59XYY/n0ck9phylmmbr2hsgpua.png","description":"box of 1 Unit","cost":292}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.95b3fe9d.chunk.js.map