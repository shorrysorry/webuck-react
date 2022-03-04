import { useState, useEffect } from 'react';
import TopNav from '../../components/nav/TopNav';
import './List.scss';

function List() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('./data/coffeeList.json')
      .then(res => res.json())
      .then(res => setUsers(res));
  }, []);

  return (
    <div className="listSubin">
      <TopNav />

      {/* <!-- main --> */}
      <main>
        {/* <!-- section1 head --> */}
        <section className="listHead">
          <h3 className="listType">콜드 브루 커피</h3>
          <i className="fa-solid fa-mug-hot" />
          <p className="feature">
            디카페인 에스프레스 샷 추가 가능 (일부 음료 제외)
          </p>
        </section>

        {/* <!-- section1 grid --> */}
        <section className="listGrid">
          {users.map(user => {
            return (
              <div className="gridWrap" key={user.key}>
                <div className="overflow" onClick={() => {}}>
                  <img
                    className="coffeeImg"
                    src={user.imgURL}
                    alt={user.name}
                  />
                </div>
                <p className="coffeeName">{user.name}</p>
                <i className="fa-regular fa-heart btnOff" />
              </div>
            );
          })}
        </section>

        {/* <!-- section2 head --> */}
        {/* <section className="listHead">
          <h3 className="listType">브루드 커피</h3>
          <i className="fa-solid fa-mug-hot" />
          <p className="feature">
            디카페인 에스프레스 샷 추가 가능 (일부 음료 제외)
          </p>
        </section> */}

        {/* <!-- section2 grid --> */}
        {/* <section className="listGrid">
          <div className="gridWrap">
            <div className="overflow">
              <img
                className="coffeeImg"
                src="/images/subin/coffee11.jpg"
                alt="아이스 커피"
              />
            </div>
            <p className="coffeeName">아이스 커피</p>
            <i className="fa-regular fa-heart btnOff" />
          </div>
          <div className="gridWrap">
            <div className="overflow">
              <img
                className="coffeeImg"
                src="/images/subin/coffee12.jpg"
                alt="오늘의 커피"
              />
            </div>
            <p className="coffeeName">오늘의 커피</p>
            <i className="fa-regular fa-heart btnOff" />
          </div>
        </section> */}
      </main>
    </div>
  );
}

export default List;
