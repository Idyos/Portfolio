import styles from "./portinfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function PortInfo(props) {
  useEffect(() => {
    if (props.trigger === true) {
      document.querySelector("#popupwrapper").classList.add(styles.rotated);
    }
  }, [props.trigger]);

  console.log(props);
  if (props.trigger === true) {
    switch (props.dataType) {
      default:
        return "Nothing to see here";
      case 0:
        return (
          <div className={styles.popup}>
            <div className={styles.popupwrapper} id="popupwrapper">
              <div
                className={styles.close}
                onClick={() => {
                  document
                    .querySelector("#popupwrapper")
                    .classList.add(styles.rotateout);
                  setTimeout(() => {
                    props.setTrigger(false);
                  }, 1000);
                }}
              >
                <FontAwesomeIcon icon={faX} />
              </div>

              <Swiper
                style={{ height: "100%" }}
                initialSlide={props.data.id - 1}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                //onSwiper={(swiper) => console.log(swiper)}
                //onSlideChange={() => console.log("slide change")}
              >
                {props.completeData.map((data, index) => {
                  return (
                    <SwiperSlide
                      key={data.id}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <div className={styles.popupdetails}>
                        <div className={styles.popupinfo}>
                          <h1 style={{ fontSize: "4em" }}>{data.name}</h1>
                          <h3
                            style={{ fontWeight: "normal", fontSize: "1.5em" }}
                          >
                            {data.subname}
                          </h3>
                          <br />
                        </div>
                        <iframe
                          title={data.name}
                          src={data.link}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        <h5>{data.description}</h5>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        );
      case 1:
        return (
          <div className={styles.popup}>
            <div className={styles.popupwrapper} id="popupwrapper">
              <div
                className={styles.close}
                onClick={() => {
                  document
                    .querySelector("#popupwrapper")
                    .classList.add(styles.rotateout);
                  setTimeout(() => {
                    props.setTrigger(false);
                  }, 1000);
                }}
              >
                <FontAwesomeIcon icon={faX} />
              </div>

              <Swiper
                style={{ height: "100%" }}
                initialSlide={props.data.id - 6}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                //onSwiper={(swiper) => console.log(swiper)}
                //onSlideChange={() => console.log("slide change")}
              >
                {props.completeData.map((data, index) => {
                  return (
                    <SwiperSlide
                      key={data.id}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <div className={styles.popupdetails}>
                        <img src={data.file} alt={data.description} style={{maxWidth: "80%", maxHeight: "90%"}}/>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        );
    }
  }
}

export default PortInfo;
