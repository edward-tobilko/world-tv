import "./subscription.scss";

const Subscription = () => {
  return (
    <>
      <section className="subscription">
        <div className="subscription__content container">
          <div className="subscription__item">
            <div className="subscription__item-name">
              <h1>
                Choose <br /> optimal <br /> subscription!
              </h1>
            </div>

            <div className="subscription__item-list">
              <h1 className="subscription__item-list-package">S</h1>
              <p className="subscription__item-list-price">$99 month</p>
              <p
                className="subscription__item-list-oldprice"
                style={{ opacity: 0 }}
              >
                $149 month
              </p>
              <button className="subscription__item-list-btn">Connect</button>
            </div>
            <div className="subscription__item-list">
              <h1 className="subscription__item-list-package">M</h1>
              <p className="subscription__item-list-price">$99 month</p>
              <p className="subscription__item-list-oldprice">$149 month</p>
              <button className="subscription__item-list-btn">Connect</button>
            </div>
            <div className="subscription__item-list">
              <h1 className="subscription__item-list-package">L</h1>
              <p className="subscription__item-list-price">$199 month</p>
              <p
                className="subscription__item-list-oldprice"
                style={{ opacity: 0 }}
              >
                $149 month
              </p>
              <button className="subscription__item-list-btn try__free">
                Try it <br className="try__free-btn" /> for free
              </button>
            </div>
          </div>

          <div className="subscription__item">
            <div className="subscription__item-name">
              <h5>Number of TV channels</h5>
            </div>
            <div className="subscription__item-list">161</div>
            <div className="subscription__item-list">234</div>
            <div className="subscription__item-list">260</div>
          </div>
          <div className="subscription__item">
            <div className="subscription__item-name">
              <h5>Library of rated movies for free</h5>
              <p>All your favorite Disney, Sony and other movies.</p>
            </div>
            <div className="subscription__item-list">515</div>
            <div className="subscription__item-list">5.000</div>
            <div className="subscription__item-list">10.000</div>
          </div>
          <div className="subscription__item">
            <div className="subscription__item-name">
              <h5>Library of favorite cartoons for free</h5>
              <p>
                All your favorite cartoons from Disney, Paramount and others.
              </p>
            </div>
            <div className="subscription__item-list">500</div>
            <div className="subscription__item-list">1.000</div>
            <div className="subscription__item-list">2.000</div>
          </div>
          <div className="subscription__item">
            <div className="subscription__item-name">
              <h5>Library of cult series</h5>
              <p>
                "Doctor House", "Lusty California", "Twin Peaks" and others.
              </p>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot emptyDot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
          </div>
          <div className="subscription__item">
            <div className="subscription__item-name">
              <h5>High image quality</h5>
              <p>In particular HD, Full HD and 4K</p>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
          </div>
          <div className="subscription__item">
            <div className="subscription__item-name">
              <h5>Management of live TV broadcasting</h5>
              <p>Pause, rewind and record TV air up to 7 days</p>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
          </div>
          <div className="subscription__item">
            <div className="subscription__item-name">
              <h5>View from 5 devices for one price</h5>
              <p>Watch on your TV, smartphone, laptop, tablet or Xbox</p>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
          </div>
          <div className="subscription__item">
            <div className="subscription__item-name">
              <h5 className="subscription__content-title">
                National television
              </h5>
              <p>1+1, STB, New Channel and others.</p>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
          </div>
          <div className="subscription__item">
            <div className="subscription__item-name">
              <h5 className="subscription__content-title">
                Regional TV channels
              </h5>
              <p>Local TV channels of your city</p>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
          </div>
          <div className="subscription__item">
            <div className="subscription__item-name">
              <h5 className="subscription__content-title">Film TV channels</h5>
              <p>TV1000, ViP Megahit, ViP Comedy and others.</p>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot emptyDot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
          </div>
          <div className="subscription__item">
            <div className="subscription__item-name">
              <h5 className="subscription__content-title">
                Premium TV channels
              </h5>
              <p>Discovery, National Geographic та ін.</p>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot emptyDot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
          </div>
          <div className="subscription__item">
            <div className="subscription__item-name">
              <h5 className="subscription__content-title">
                Children's TV channels
              </h5>
              <p>Nick Junior, Cartoon Network and others.</p>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot emptyDot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
          </div>
          <div className="subscription__item">
            <div className="subscription__item-name">
              <h5 className="subscription__content-title">
                Sports TV channels
              </h5>
              <p>Setanta Sports, Eurosport, Viasat Sport and others.</p>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot emptyDot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
            <div className="subscription__item-list">
              <div className="subscription__item-dot"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscription;
