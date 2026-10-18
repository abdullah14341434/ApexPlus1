import{a as w,r as s,F as y,j as e,i as x,G as g}from"./index-BfJV1-7K.js";const j=`{brand} Privacy Policy

Last updated: {date}

1. What we collect
{brand} collects only the information you give us directly:
- Reviews: your name, star rating and review text.
- Support tickets: your name, email address, subject and message, plus any replies in the conversation.
- Basic usage events: page views, product views, searches and order-button clicks. These contain no personal information.

2. What we do not collect
We do not ask you to create an account, and we do not collect payment details on this website. Payments and personal details you share inside WhatsApp are handled under WhatsApp's own privacy policy.

3. How we use the information
- To display your review (your name and text are public).
- To respond to your support ticket.
- To understand which services are popular so we can improve the catalogue.

4. Sharing
We do not sell your information. Ticket details are visible only to the {brand} administrator.

5. Your choices
You can ask us to hide or delete your review, or to delete your ticket, by contacting us through the Contact page.

6. Contact
For privacy questions, use the contact details on our Contact page.`,k=`{brand} Terms and Conditions

Last updated: {date}

1. The service
{brand} ({tagline}) sells digital subscriptions, software licences and web services. Browsing the catalogue does not require an account.

2. Ordering
Orders are placed through WhatsApp using the order button on each product. Tapping the button opens WhatsApp with a pre-filled message; nothing is confirmed until we reply and agree the details with you. Prices are shown in Pakistani Rupees (PKR) and are set by {brand}.

3. Availability and delivery
Each product shows its availability (Available, Out of Stock, Coming Soon) and its warranty or validity period. Digital delivery details are confirmed with you on WhatsApp before any payment.

4. Reviews
By submitting a review you confirm it reflects your genuine experience. We may hide or remove reviews that are spam, abusive or misleading.

5. Support tickets
When you open a ticket you receive a ticket ID. Keep it safe: you need the ID together with your email address to track the ticket.

6. Acceptable use
Do not misuse the website, attempt to access the admin panel, or submit false information through forms.

7. Changes
We may update these terms. The current version is always published on this page.

8. Contact
Questions about these terms can be sent through the Contact page.`;function v(a,i,n){const o=new Date().toISOString().slice(0,10);return a.split("{brand}").join(i).split("{tagline}").join(n).split("{date}").join(o)}function S(){const{site:a}=w(),[i,n]=s.useState(""),[o,c]=s.useState(""),[b,f]=s.useState(!0),[r,h]=s.useState(!1),[l,d]=s.useState("");s.useEffect(()=>{(async()=>{try{const[t,u]=await Promise.all([y("legal","privacy"),y("legal","terms")]);n((t==null?void 0:t.content)||""),c((u==null?void 0:u.content)||"")}catch{}finally{f(!1)}})()},[]);const p=async()=>{h(!0),d("");try{await Promise.all([g("legal","privacy",{content:i}),g("legal","terms",{content:o})]),d("Legal pages saved and live on the website.")}catch{d("Could not save. Check your connection and Firestore rules.")}finally{h(!1)}},m=t=>{window.confirm("Replace the current text with the default template? Your current text will be lost unless you saved it.")&&(t==="privacy"?n(v(j,a.brandName,a.tagline)):c(v(k,a.brandName,a.tagline)))};return b?e.jsx(x,{}):e.jsxs("div",{children:[e.jsxs("div",{className:"admin-top",children:[e.jsx("h1",{children:"Privacy Policy and Terms"}),e.jsx("button",{className:"btn btn-primary btn-sm",onClick:p,disabled:r,children:r?"Saving...":"Save Both Pages"})]}),l&&e.jsx("div",{className:l.startsWith("Could")?"form-error":"form-ok",children:l}),e.jsx("p",{className:"section-sub",children:"These pages describe what this website actually collects (reviews, tickets, order intents, basic usage events). Keep them accurate: do not add certifications or promises you have not implemented."}),e.jsxs("div",{className:"card card-pad",style:{marginBottom:20},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10,flexWrap:"wrap",gap:8},children:[e.jsx("h2",{style:{fontSize:"1.2rem",margin:0},children:"Privacy Policy"}),e.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>m("privacy"),children:"Load Default Template"})]}),e.jsx("textarea",{className:"textarea",value:i,onChange:t=>n(t.target.value),style:{minHeight:320},placeholder:"Write your privacy policy here..."})]}),e.jsxs("div",{className:"card card-pad",style:{marginBottom:20},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10,flexWrap:"wrap",gap:8},children:[e.jsx("h2",{style:{fontSize:"1.2rem",margin:0},children:"Terms and Conditions"}),e.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>m("terms"),children:"Load Default Template"})]}),e.jsx("textarea",{className:"textarea",value:o,onChange:t=>c(t.target.value),style:{minHeight:320},placeholder:"Write your terms and conditions here..."})]}),e.jsx("button",{className:"btn btn-primary",onClick:p,disabled:r,children:r?"Saving...":"Save Both Pages"})]})}export{S as LegalAdmin};
