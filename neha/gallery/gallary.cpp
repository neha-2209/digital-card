h1 {
  color: #cecece;
  text-align: center;
  margin-top: 20px;
}

.main-nav {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  width: 600px;
  height: 150px;
}

.main-nav li {
  list-style: none;
  position: absolute;
  width: 200px;
  height: 200px;
  background: #000;
  transform: rotate(45deg);
  transition: 0.5s;
  margin: -100px;
  overflow: hidden;
  opacity: 0.6;
}

.main-nav li:hover {
  opacity: 1;
}

.main-nav li.item:first-child {
  top: 0;
  left: 0;
}

.main-nav li.item:nth-child(2) {
  bottom: 0;
  left: 25%;
}

.main-nav li.item:nth-child(3) {
  top: 0;
  left: 50%;
}

.main-nav li.item:nth-child(4) {
  bottom: 0;
  left: 75%;
}

.main-nav li.item:last-child {
  top: 0;
  left: 100%;
}

.main-nav li .bg {
  width: 100%;
  height: 100%;
  transform: scale(1.1);
}

.description {
  color: #fefefe;
  position: absolute;
  top: 0;
  left: 28%;
  width: 145px;
  font-size: 0.9rem;
  height: 100%;
}