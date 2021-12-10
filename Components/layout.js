import Footer from "./footerSection/Footer";
import Header from "./headerSection/Header";

export default function layout({ children }) {
   
   return (
      <>
        
         <div className="content" style={{ width: "100%" }}>
            <Header  />
              <div style={{ width: "100%" }}>{children}</div>
            <Footer />
         </div>
      </>
   )

}