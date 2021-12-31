import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container} >
      <div className={styles.hero}>
        <div className={styles.hero_inner}>
          <h1 className={styles.hero_h}>Purity That <br /> is Priceless</h1>
          <p className={styles.hero_p}>Far far away, behind the word mountains, far from the countries <br />Vokalia and Consonantia, there live the blind texts. Separated they live<br /> in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <button className={styles.hero_btn}>Shop Now <i className="fas fa-angle-right"></i></button>
        </div>
      </div>
      <div className={styles.featured}>
        <h1>Featured Products</h1>
        <div className={styles.hr}></div>
        <div className={styles.featured_wrap}>
          <div className={styles.featured_item}>

            <div className={styles.home_product_image}><Image width="200" height="200" src="/images/goumet.jpg" className={styles.img_f} /></div>
            <p className={styles.p}>Gourmet Foods</p>
          </div>
          <div className={styles.featured_item}>
            <div className={styles.home_product_image}><Image width="200" height="200" src="/images/beuti.jpg" className={styles.img_f} /></div>
            <p className={styles.p}>Beauty Products</p>
          </div>
          <div className={styles.featured_item}>
            <div className={styles.home_product_image}><Image width="200" height="200" src="/images/alter.jpg" className={styles.img_f} /></div>
            <p className={styles.p}>Alternative Medicines</p>
          </div>
          <div className={styles.featured_item}>
            <div className={styles.home_product_image}><Image width="200" height="200" src="/images/healthy.jpg" className={styles.img_f} /></div>
            <p className={styles.p}>Personal Health</p>
          </div>
        </div>
        <div className={styles.hr_f}></div>
        <div className={styles.f_images_wrap}>
          <div className={styles.f_images}>
            <div className={styles.f_left}>
              <div className={styles.f_box}>
                <div className={styles.img_box}></div>
                <p className={styles.img_box_h}>Amala Maurabba</p>
                <p className={styles.img_box_p}>500g</p> <span className={styles.img_box_pp}>₹ 360</span>
              </div>
              <div className={styles.f_box}>
                <div className={styles.img_box}></div>
                <p className={styles.img_box_h}>Amala Maurabba</p>
                <p className={styles.img_box_p}>500g</p> <span className={styles.img_box_pp}>₹ 360</span>
              </div>
            </div>
            <div className={styles.f_center}>
              <div className={styles.f_box_center}>
                <div className={styles.img_box_center}></div>
                <p className={styles.img_box_h_center}>Amala Maurabba</p>
                <p className={styles.img_box_p_center}>500g</p> <span className={styles.img_box_pp}>₹ 360</span>
              </div>
            </div>
            <div className={styles.f_right}>
              <div className={styles.f_box}>
                <div className={styles.img_box}></div>
                <p className={styles.img_box_h}>Amala Maurabba</p>
                <p className={styles.img_box_p}>500g</p> <span className={styles.img_box_pp}>₹ 360</span>
              </div>
              <div className={styles.f_box}>
                <div className={styles.img_box}></div>
                <p className={styles.img_box_h}>Amala Maurabba</p>
                <p className={styles.img_box_p}>500g</p> <span className={styles.img_box_pp}>₹ 360</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.featred_btn}>
          <button className={styles.hero_btn}>Visit the shop now <i className="fas fa_angle_right"></i></button>
        </div>
      </div>
      <div className={styles.community}>
        <div className={styles.community_inner}>
          <p>From The Heart of Chattrisgarh</p>
          <h1>Empowering Tribal Women</h1>
          <div className={styles.featred_btn}>
            <button className={styles.hero_btn}>Know More</button>
          </div>
        </div>
      </div>
      <div className={styles.thecom}>
        <div className={styles.community_des}>

          <h1>The Community</h1>
          <div className={styles.hr}></div>
          
          <p>  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,  there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
        
        </div>
        <div className={styles.thecom_inner}>
          <div className={styles.thecom_box}>
            <h1>Premium <br /> Cashew</h1>
          </div>
          <div className={styles.thecom_box}><h1>Premium <br /> Cashew</h1></div>
          <div className={styles.thecom_box}><h1>Premium <br /> Cashew</h1></div>
        </div>
        <div className={styles.thecom_inner}>
          <div className={styles.thecom_box}>
            <h1>Premium <br /> Cashew</h1>
          </div>
          <div className={styles.thecom_box}><h1>Premium <br /> Cashew</h1></div>
          <div className={styles.thecom_box}><h1>Premium <br /> Cashew</h1></div>
        </div>
      </div>
      <div className={styles.community_follow}>
        <div className={styles.community_inner_follow}>
          <div className={styles.featred_btn}>
            <button className={styles.hero_btn}>Follow Us</button>
          </div>
        </div>
      </div>

    </div>
  )
}
