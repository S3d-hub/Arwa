const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe4e1);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("scene-container").appendChild(renderer.domElement);

// كعكة ثلاثية الأبعاد
const cakeGeometry = new THREE.CylinderGeometry(1, 1, 0.5, 32);
const cakeMaterial = new THREE.MeshStandardMaterial({ color: 0xff8fab });
const cake = new THREE.Mesh(cakeGeometry, cakeMaterial);
scene.add(cake);

cake.position.y = 0.5;

// طبقة إضافية للكعكة
const secondLayerGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.4, 32);
const secondLayerMaterial = new THREE.MeshStandardMaterial({ color: 0xffd1dc });
const secondLayer = new THREE.Mesh(secondLayerGeometry, secondLayerMaterial);
secondLayer.position.y = 1;
scene.add(secondLayer);

// الشموع
const candleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.3, 16);
const candleMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });

for (let i = -0.4; i <= 0.4; i += 0.4) {
  const candle = new THREE.Mesh(candleGeometry, candleMaterial);
  candle.position.set(i, 1.5, 0);
  scene.add(candle);
}

// إضاءة
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 5, 5);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040, 1);
scene.add(ambientLight);

// دوران الكعكة
function animate() {
  requestAnimationFrame(animate);
  cake.rotation.y += 0.01;
  secondLayer.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// تأثير التفاعل
document.getElementById("interact-btn").addEventListener("click", () => {
  alert("🎂 انفجار الكعكة بالبالونات!");
  // يمكنك إضافة تأثير بالونات هنا
});
