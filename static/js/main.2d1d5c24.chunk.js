(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(7),r=n.n(o),s=n(10),i=n(2),u=n(3),l=n(5),b=n(4),m=n(8),d=n(25),h=n(9),j=(n(15),n(0)),f=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:"ContactForm",onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{className:"ContactForm__input",onChange:this.onInputChange,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{className:"ContactForm__input",onChange:this.onInputChange,value:this.state.number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:"submit__btn",onChange:this.onSubmit,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),p=(n(17),function(t){var e=t.contacts,n=t.onDelete;return e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:"ContactListItem",children:[Object(j.jsxs)("span",{className:"ContactListItem__data",children:[a,": ",c]}),Object(j.jsx)("button",{className:"delete__btn",onClick:function(){return n(e)},type:"button",children:"Delete"})]},e)}))}),O=(n(18),function(t){var e=t.contacts,n=t.onDelete;return Object(j.jsx)("ul",{className:"ContactList",children:Object(j.jsx)(p,{contacts:e,onDelete:n})})}),C=(n(19),function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{children:["Find your contacts by name",Object(j.jsx)("input",{className:"Filter__input",type:"text",value:e,onChange:n})]})}),v=(n(20),function(t){var e=t.children;return Object(j.jsx)("div",{className:"Container",children:e})}),g=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:m,filter:""},t.addContact=function(e){var n=e.name,a=e.number,c=t.state.contacts,o=n.toLocaleLowerCase(),r={id:Object(d.a)(),name:n,number:a};c.some((function(t){return t.name.toLocaleLowerCase()===o}))?alert("".concat(n," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(s.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLocaleLowerCase();return n.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(j.jsxs)(v,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(f,{onSubmit:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(C,{value:t,onChange:this.changeFilter}),Object(j.jsx)(O,{contacts:e,onDelete:this.deleteContact})]})}}]),n}(a.Component);n(21),n(22);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.2d1d5c24.chunk.js.map