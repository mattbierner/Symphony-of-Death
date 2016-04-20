webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _match_view = __webpack_require__(1);

	var _match_view2 = _interopRequireDefault(_match_view);

	var _event_list = __webpack_require__(178);

	var _event_list2 = _interopRequireDefault(_event_list);

	var _audio_context = __webpack_require__(280);

	var audioCtx = _interopRequireWildcard(_audio_context);

	var _sound_manager = __webpack_require__(279);

	var _sound_manager2 = _interopRequireDefault(_sound_manager);

	var _sine = __webpack_require__(283);

	var _sine2 = _interopRequireDefault(_sine);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(20);
	var ReactDOM = __webpack_require__(177);

	var DeathStream = __webpack_require__(285);

	var matchId = "5b27a620-cebf-40a3-b09c-a37f15fd135f";

	var onIos = function onIos() {
	    return (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
	    );
	};

	/**
	 * 
	 */

	var Application = function (_React$Component) {
	    _inherits(Application, _React$Component);

	    function Application(props) {
	        _classCallCheck(this, Application);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Application).call(this, props));

	        _this.state = {
	            matchId: props.matchId,
	            shownEvents: new Set()
	        };

	        _this._soundManager = new _sound_manager2.default([_sine2.default]);
	        return _this;
	    }

	    _createClass(Application, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            DeathStream.loadForMatch(this.state.matchId).then(function (_ref) {
	                var stream = _ref.stream;
	                var events = _ref.events;

	                var shown = new Set();
	                stream.forEach(function (x) {
	                    return shown.add(x);
	                });
	                _this2.setState({ stream: stream, shownEvents: shown });
	            }).catch(function (x) {
	                return console.error(x);
	            });

	            if (!onIos()) audioCtx.init();

	            this._soundManager.playAmbient('./sounds/spaceambient.mp3');
	        }
	    }, {
	        key: 'onTouchStart',
	        value: function onTouchStart() {
	            // must be created inside of a touch event
	            if (onIos()) audioCtx.init();
	        }
	    }, {
	        key: 'onEventActivate',
	        value: function onEventActivate(event, data) {
	            this._soundManager.play(event, Object.assign({}, data, { stream: this.state.stream }));
	            this._eventCallback(event);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            return React.createElement(
	                'div',
	                { className: 'container', onTouchStart: this.onTouchStart.bind(this) },
	                React.createElement(_event_list2.default, { registerOnEvent: function registerOnEvent(f) {
	                        _this3._eventCallback = f;
	                    } }),
	                React.createElement(_match_view2.default, {
	                    stream: this.state.stream,
	                    shownEvents: this.state.shownEvents,
	                    onEventActivate: this.onEventActivate.bind(this) }),
	                React.createElement('a', { href: '/', className: 'page-logo' })
	            );
	        }
	    }]);

	    return Application;
	}(React.Component);

	;

	ReactDOM.render(React.createElement(Application, { matchId: matchId }), document.getElementById('content'));

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _match_3d_view = __webpack_require__(2);

	var _match_3d_view2 = _interopRequireDefault(_match_3d_view);

	var _view_controls = __webpack_require__(19);

	var _view_controls2 = _interopRequireDefault(_view_controls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(20);
	var ReactDOM = __webpack_require__(177);

	/**
	 * Displays a match.
	 */

	var MatchView = function (_React$Component) {
	    _inherits(MatchView, _React$Component);

	    function MatchView(props) {
	        _classCallCheck(this, MatchView);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MatchView).call(this, props));

	        _this.state = {
	            shownEvents: new Set(props.shownEvents || [])
	        };
	        return _this;
	    }

	    _createClass(MatchView, [{
	        key: 'onEventFocus',
	        value: function onEventFocus(event) {
	            this._3dview.highlightEvent(event);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this._3dview) return;

	            var element = ReactDOM.findDOMNode(this);
	            var canvas = element.getElementsByClassName('glCanvas')[0];
	            this._3dview = new _match_3d_view2.default(canvas, element, this);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var _this2 = this;

	            if (nextProps.stream !== this.props.stream) {
	                var _ret = function () {
	                    var shownEvents = new Set(nextProps.shownEvents || []);
	                    nextProps.stream.forEach(function (event) {
	                        _this2._3dview.addEvent(event, !shownEvents.has(event));
	                    });
	                    _this2._3dview.setBounds(nextProps.stream.bounds);

	                    _this2.setState({ shownEvents: shownEvents });
	                    return {
	                        v: void 0
	                    };
	                }();

	                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	            }
	            var next = new Set(nextProps.shownEvents);
	            var added = Array.from(next).filter(function (x) {
	                return !_this2.state.shownEvents.has(x);
	            });
	            var removed = Array.from(this.state.shownEvents).filter(function (x) {
	                return !next.has(x);
	            });

	            added.forEach(function (e) {
	                return _this2._3dview.showEvent(e);
	            });
	            removed.forEach(function (e) {
	                return _this2._3dview.hideEvent(e);
	            });

	            this.setState({ shownEvents: next });
	        }
	    }, {
	        key: 'onEventActivate',
	        value: function onEventActivate(event, activation) {
	            this.props.onEventActivate(event, activation);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            return React.createElement(
	                'div',
	                { className: 'match-view' },
	                React.createElement('canvas', { className: "glCanvas" }),
	                React.createElement(_view_controls2.default, {
	                    onFrontViewSelected: function onFrontViewSelected() {
	                        return _this3._3dview.goToFrontView();
	                    },
	                    onSideViewSelected: function onSideViewSelected() {
	                        return _this3._3dview.goToSideView();
	                    },
	                    onTopViewSelected: function onTopViewSelected() {
	                        return _this3._3dview.goToTopView();
	                    } })
	            );
	        }
	    }]);

	    return MatchView;
	}(React.Component);

	exports.default = MatchView;
	;

/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _three = __webpack_require__(3);

	var _three2 = _interopRequireDefault(_three);

	var _CopyShader = __webpack_require__(4);

	var _CopyShader2 = _interopRequireDefault(_CopyShader);

	var _HorizontalBlurShader = __webpack_require__(5);

	var _HorizontalBlurShader2 = _interopRequireDefault(_HorizontalBlurShader);

	var _VerticalBlurShader = __webpack_require__(6);

	var _VerticalBlurShader2 = _interopRequireDefault(_VerticalBlurShader);

	var _MaskPass = __webpack_require__(7);

	var _MaskPass2 = _interopRequireDefault(_MaskPass);

	var _RenderPass = __webpack_require__(8);

	var _RenderPass2 = _interopRequireDefault(_RenderPass);

	var _ShaderPass = __webpack_require__(9);

	var _ShaderPass2 = _interopRequireDefault(_ShaderPass);

	var _EffectComposer = __webpack_require__(10);

	var _EffectComposer2 = _interopRequireDefault(_EffectComposer);

	var _importsTHREEThreeShaderParticleEngine = __webpack_require__(11);

	var _importsTHREEThreeShaderParticleEngine2 = _interopRequireDefault(_importsTHREEThreeShaderParticleEngine);

	var _additive = __webpack_require__(12);

	var _additive2 = _interopRequireDefault(_additive);

	var _default = __webpack_require__(13);

	var _default2 = _interopRequireDefault(_default);

	var _wave = __webpack_require__(14);

	var _wave2 = _interopRequireDefault(_wave);

	var _tube = __webpack_require__(15);

	var tube = _interopRequireWildcard(_tube);

	var _OrbitControls = __webpack_require__(16);

	var _OrbitControls2 = _interopRequireDefault(_OrbitControls);

	var _weapons = __webpack_require__(17);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var enableGlow = false;

	var killerColor = new _three2.default.Color(0x777777);
	var victimColor = new _three2.default.Color(0x777777);

	var topSize = 0.1;
	var bottomSize = 0.1;
	var sides = 8;
	var damping = 0.98;

	var shaderMaterial = new _three2.default.ShaderMaterial(_wave2.default);

	/**
	 * Create a plane from two vectors that share an origin.
	 */
	var planeFromVectors = function planeFromVectors(r1, r2, origin) {
	    var norm = new _three2.default.Vector3().crossVectors(r1, r2);
	    var le = -norm.dot(origin.clone());
	    return new _three2.default.Plane(norm, le);
	};

	/**
	 * 3D match viewer
	 */

	var Viewer = function () {
	    function Viewer(canvas, container, delegate) {
	        _classCallCheck(this, Viewer);

	        this.delegate = delegate;
	        this.isMouseDown = false;
	        this.container = container;

	        this.bounds = { x: 40, y: 40, z: 40 };

	        this._insersecting = new Set();
	        this._active = new Set();
	        this.mouse = null;

	        this._raycaster = new _three2.default.Raycaster();
	        this._clock = new _three2.default.Clock();

	        this._scene = new _three2.default.Scene();

	        this.initRenderer(canvas);
	        this.initCamera();
	        this.initControls();
	        this.initComposer();
	        this.initParticles();

	        window.addEventListener('resize', this.onWindowResize.bind(this), false);
	        document.addEventListener('mousedown', this.onMouseDown.bind(this), false);
	        document.addEventListener('mouseup', this.onMouseUp.bind(this), false);
	        document.addEventListener('mousemove', this.onMouseMove.bind(this), false);
	        document.addEventListener('touchstart', this.onTouchStart.bind(this), false);
	        document.addEventListener('touchstop', this.onTouchStop.bind(this), false);
	        document.addEventListener('touchmove', this.onTouchMove.bind(this), false);

	        this.onWindowResize();
	        this.animate();
	    }

	    /**
	     * Setup the initial renderer.
	     */


	    _createClass(Viewer, [{
	        key: 'initRenderer',
	        value: function initRenderer(canvas) {
	            this._renderer = new _three2.default.WebGLRenderer({
	                canvas: canvas,
	                alpha: true
	            });
	            this._renderer.setClearColor(0xffffff, 0);
	            this._renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
	        }

	        /**
	         * Setup the initial camera.
	         */

	    }, {
	        key: 'initCamera',
	        value: function initCamera() {
	            var _getViewportSize2 = this._getViewportSize();

	            var _getViewportSize3 = _slicedToArray(_getViewportSize2, 2);

	            var viewWidth = _getViewportSize3[0];
	            var viewHeight = _getViewportSize3[1];

	            var aspect = viewWidth / viewHeight;
	            this._camera = new _three2.default.PerspectiveCamera(75, aspect, 0.1, 800);
	            this._camera.position.z = 40;
	        }
	    }, {
	        key: 'initControls',
	        value: function initControls() {
	            this._controls = new _OrbitControls2.default(this._camera);
	            this._controls.enableDamping = true;
	            this._controls.dampingFactor = 0.25;
	            this._controls.enableZoom = true;
	        }

	        /**
	         * Setup the composer.
	         */

	    }, {
	        key: 'initComposer',
	        value: function initComposer() {
	            this._composer = new _three2.default.EffectComposer(this._renderer);
	            this._composer.addPass(new _three2.default.RenderPass(this._scene, this._camera));

	            if (enableGlow) {
	                this._effectHorizBlur = new _three2.default.ShaderPass(_three2.default.HorizontalBlurShader);
	                this._effectVertiBlur = new _three2.default.ShaderPass(_three2.default.VerticalBlurShader);

	                var _getViewportSize4 = this._getViewportSize();

	                var _getViewportSize5 = _slicedToArray(_getViewportSize4, 2);

	                var viewWidth = _getViewportSize5[0];
	                var viewHeight = _getViewportSize5[1];

	                this._effectHorizBlur.uniforms["h"].value = 2 / viewWidth;
	                this._effectVertiBlur.uniforms["v"].value = 2 / viewHeight;
	                this._composer.addPass(this._effectHorizBlur);
	                this._composer.addPass(this._effectVertiBlur);
	            }

	            //final render pass
	            this._composer2 = new _three2.default.EffectComposer(this._renderer);

	            this._composer2.addPass(new _three2.default.RenderPass(this._scene, this._camera));

	            var effectBlend = new _three2.default.ShaderPass(_additive2.default, 'tDiffuse1');
	            effectBlend.uniforms['tDiffuse2'].value = this._composer.renderTarget2;
	            effectBlend.renderToScreen = true;
	            this._composer2.addPass(effectBlend);
	        }

	        /**
	         * Setup the particle system
	         */

	    }, {
	        key: 'initParticles',
	        value: function initParticles() {
	            this.createDustEmitter(100);
	        }
	    }, {
	        key: 'createDustEmitter',
	        value: function createDustEmitter(bounds) {
	            if (this._particleGroup) {
	                this._particleGroup.removeEmitter(this._emitter);
	                this._scene.remove(this._particleGroup.mesh);
	            }

	            this._particleGroup = new _importsTHREEThreeShaderParticleEngine2.default.Group({
	                texture: {
	                    value: _three2.default.ImageUtils.loadTexture('./images/smokeparticle.png')
	                },
	                fog: true,
	                scale: 200,
	                depthWrite: false
	            });
	            this._emitter = new _importsTHREEThreeShaderParticleEngine2.default.Emitter({
	                type: _importsTHREEThreeShaderParticleEngine2.default.distributions.BOX,
	                maxAge: {
	                    value: 15
	                },
	                opacity: {
	                    value: [0, 0.05, 0]
	                },
	                position: {
	                    value: new _three2.default.Vector3(0, 0, 0),
	                    spread: new _three2.default.Vector3(bounds, bounds, bounds),
	                    randomise: true
	                },
	                velocity: {
	                    value: new _three2.default.Vector3(0, -0.05, 0),
	                    randomise: true
	                },
	                wiggle: {
	                    spread: 10
	                },
	                particleCount: 5000
	            });
	            this._particleGroup.addEmitter(this._emitter);
	            this._scene.add(this._particleGroup.mesh);
	        }

	        /**
	         * Get the size of the viewport.
	         */

	    }, {
	        key: '_getViewportSize',
	        value: function _getViewportSize() {
	            var rect = this.container.getBoundingClientRect();
	            return [rect.width, rect.height];
	        }

	        /**
	         * Set the bounds of the scene being rendered.
	         */

	    }, {
	        key: 'setBounds',
	        value: function setBounds(bounds) {
	            this.bounds = bounds;

	            this._controls.maxDistance = Math.max(this.bounds.x, this.bounds.y, this.bounds.z) * 2 * 1.5;
	            this.createDustEmitter(this._controls.maxDistance * 2);
	            this.goToTopView();
	        }
	    }, {
	        key: 'goToFrontView',
	        value: function goToFrontView() {
	            this._camera.position.set(0, Math.max(this.bounds.x, this.bounds.z) * 2, 0);
	        }
	    }, {
	        key: 'goToSideView',
	        value: function goToSideView() {
	            this._camera.position.set(Math.max(this.bounds.y, this.bounds.z) * 2, 0, 0);
	        }
	    }, {
	        key: 'goToTopView',
	        value: function goToTopView() {
	            this._camera.position.set(0, 0, Math.max(this.bounds.x, this.bounds.y) * 2);
	        }

	        /**
	         * Show the object for event.
	         */

	    }, {
	        key: 'showEvent',
	        value: function showEvent(event) {
	            var obj = this._getObjectForEvent(event);
	            if (obj) {
	                obj.visible = true;
	            }
	        }

	        /**
	         * Hide the object for `event`.
	         */

	    }, {
	        key: 'hideEvent',
	        value: function hideEvent(event) {
	            var obj = this._getObjectForEvent(event);
	            if (obj) {
	                obj.visible = false;
	            }
	        }
	    }, {
	        key: '_getObjectForEvent',
	        value: function _getObjectForEvent(event) {
	            return this._scene.getObjectByName(event.Id);
	        }
	    }, {
	        key: '_drawLine',
	        value: function _drawLine(vec, color) {
	            var material = new _three2.default.LineBasicMaterial({ color: color });
	            var geometry = new _three2.default.Geometry();
	            geometry.vertices.push(new _three2.default.Vector3(0, 0, 0), vec);
	            return new _three2.default.Line(geometry, material);
	        }
	    }, {
	        key: '_highlightTarget',
	        value: function _highlightTarget(target, mouse, previousMouse) {
	            var uniforms = target.material.uniforms;
	            if (uniforms && uniforms.wave_strength) {
	                uniforms.wave_strength.value = 1.0;
	                uniforms.wave_strength.needsUpdate = true;

	                var killVec = target.userData.killVec;
	                if (killVec) {
	                    this._raycaster.setFromCamera(mouse, this._camera);
	                    var ray = this._raycaster.ray.direction.clone();
	                    this._raycaster.setFromCamera(previousMouse, this._camera);
	                    var ray2 = this._raycaster.ray.direction.clone();

	                    var dRay = new _three2.default.Vector3().subVectors(ray, ray2);
	                    var mag = dRay.length();
	                    dRay.applyQuaternion(target.quaternion);
	                    dRay.y = 0;
	                    dRay.normalize().multiplyScalar(mag);

	                    uniforms.wave_direction.value = dRay;
	                    uniforms.wave_direction.needsUpdate = true;
	                }

	                this._active.add(target);
	                this.delegate.onEventActivate(target.userData.event, {
	                    velocity: new _three2.default.Vector2().subVectors(mouse, previousMouse).length()
	                });
	            }
	        }

	        /**
	         * Handle window resize events.
	         */

	    }, {
	        key: 'onWindowResize',
	        value: function onWindowResize() {
	            var _getViewportSize6 = this._getViewportSize();

	            var _getViewportSize7 = _slicedToArray(_getViewportSize6, 2);

	            var width = _getViewportSize7[0];
	            var height = _getViewportSize7[1];


	            this._camera.aspect = width / height;
	            this._camera.updateProjectionMatrix();
	            this._renderer.setSize(width, height);

	            var scaling = window.devicePixelRatio ? window.devicePixelRatio : 1;
	            var bufferWidth = width * scaling;
	            var bufferHeight = height * scaling;
	            this._composer.setSize(bufferWidth, bufferHeight);
	            this._composer2.setSize(bufferWidth, bufferHeight);
	        }
	    }, {
	        key: '_setLastPosition',
	        value: function _setLastPosition(x, y) {
	            var _getViewportSize8 = this._getViewportSize();

	            var _getViewportSize9 = _slicedToArray(_getViewportSize8, 2);

	            var width = _getViewportSize9[0];
	            var height = _getViewportSize9[1];


	            this.mouse = new _three2.default.Vector2(x / width * 2 - 1, -(y / height) * 2 + 1);
	        }

	        /**
	         * Handle mouse down events.
	         */

	    }, {
	        key: 'onMouseDown',
	        value: function onMouseDown(event) {
	            if (event.button === _three2.default.MOUSE.LEFT) {
	                this.isMouseDown = true;
	                this._setLastPosition(event.clientX, event.clientY);
	            }
	        }

	        /**
	         * Handle touch start events
	         */

	    }, {
	        key: 'onTouchStart',
	        value: function onTouchStart(event) {
	            if (event.touches.length === 1) {
	                this.isMouseDown = true;
	                this._setLastPosition(event.touches[0].pageX, event.touches[0].pageY);
	            } else {
	                this.isMouseDown = false;
	            }
	        }

	        /**
	         * Handle mouse up events.
	         */

	    }, {
	        key: 'onMouseUp',
	        value: function onMouseUp(event) {
	            if (event.button === _three2.default.MOUSE.LEFT) {
	                this.isMouseDown = false;
	            }
	        }

	        /**
	         * Handle touch end events
	         */

	    }, {
	        key: 'onTouchStop',
	        value: function onTouchStop(event) {
	            this.isMouseDown = false;
	        }

	        /**
	         * Handle mouse move events.
	         */

	    }, {
	        key: 'onMouseMove',
	        value: function onMouseMove(event) {
	            this._onMove(event.clientX, event.clientY);
	        }

	        /**
	         * Handle touch move events
	         */

	    }, {
	        key: 'onTouchMove',
	        value: function onTouchMove(event) {
	            event.preventDefault();
	            event.stopPropagation();
	            if (event.touches.length === 1) {
	                this._onMove(event.touches[0].pageX, event.touches[0].pageY);
	            }
	        }
	    }, {
	        key: '_onMove',
	        value: function _onMove(x, y) {
	            var previousMouse = this.mouse;
	            this._setLastPosition(x, y);

	            if (this.isMouseDown) {
	                this.handleIntersections(this.mouse, previousMouse);
	            }
	        }
	    }, {
	        key: '_shotLine',
	        value: function _shotLine(event, killer, victim) {
	            var killvec = new _three2.default.Vector3().subVectors(killer, victim);
	            var height = killvec.length();

	            var buffergeometry = new _three2.default.BufferGeometry();
	            var len = Math.max(3, Math.ceil(height / 1.0));

	            var position = new _three2.default.Float32Attribute(sides * 6 * 3 * len, 3);
	            buffergeometry.addAttribute('position', position);

	            var wave = new _three2.default.Float32Attribute(sides * 6 * len, 1);
	            buffergeometry.addAttribute('wave', wave);

	            var customColor = new _three2.default.Float32Attribute(sides * 6 * 3 * len, 3);
	            buffergeometry.addAttribute('customColor', customColor);

	            var d = height / len;
	            var y = -height / 2;
	            var index = 0;
	            var dWave = Math.PI / (len - 1) * 1;
	            var w = 0;
	            var ii = 0;
	            for (var i = 0; i < len - 1; ++i) {
	                var color = killerColor.clone().lerp(victimColor, i / len);
	                var nextColor = killerColor.clone().lerp(victimColor, (i + 1) / len);

	                tube.createGeometry(index, topSize, bottomSize, y, d, 3, position);
	                index = tube.fillData(index, 3, color, nextColor, customColor);
	                ii = tube.fillData(ii, 3, Math.sin(w), Math.sin(w + dWave), wave);

	                w += dWave;
	                y += d;
	            }

	            var mesh = new _three2.default.Mesh(buffergeometry, shaderMaterial.clone());
	            var arrow = new _three2.default.ArrowHelper(killvec.clone().normalize(), victim);

	            mesh.rotation.setFromQuaternion(arrow.quaternion);
	            mesh.position.addVectors(victim, killvec.multiplyScalar(0.5));

	            mesh.userData = { event: event, killVec: killvec };
	            return mesh;
	        }
	    }, {
	        key: 'addEvent',
	        value: function addEvent(event, hidden) {
	            var KillerWorldLocation = event.KillerWorldLocation;
	            var VictimWorldLocation = event.VictimWorldLocation;


	            var killer = new _three2.default.Vector3(KillerWorldLocation.x, KillerWorldLocation.y, KillerWorldLocation.z);
	            var victim = new _three2.default.Vector3(VictimWorldLocation.x, VictimWorldLocation.y, VictimWorldLocation.z);
	            var killvec = new _three2.default.Vector3().subVectors(killer, victim);
	            var weapon = (0, _weapons.getWeaponsTable)().get(event.KillerWeaponStockId);
	            var height = killvec.length();

	            var objs = [];
	            if (weapon && weapon.type === 'Grenade' || event.IsMelee) {
	                var geometry = new _three2.default.SphereGeometry(0.2, 32, 23);
	                var material = new _three2.default.MeshBasicMaterial({ color: event.IsMelee ? 0xffff00 : 0xff0000 });
	                var sphere = new _three2.default.Mesh(geometry, material);
	                sphere.position.add(victim);
	                objs.push(sphere);
	            } else if (weapon) {
	                var path = this._shotLine(event, killer, victim);
	                /*{
	                    const geometry = new THREE.SphereGeometry(2, 32, 23);
	                    const material = new THREE.MeshBasicMaterial({ color: killerColor, transparent: true, opacity: 0.2 });
	                    const sphere = new THREE.Mesh(geometry, material);
	                    sphere.position.y = height * 0.5;
	                    path.add(sphere);
	                }
	                {
	                    const geometry = new THREE.SphereGeometry(2, 32, 23);
	                    const material = new THREE.MeshBasicMaterial({ color: victimColor , transparent: true, opacity: 0.2});
	                    const sphere = new THREE.Mesh(geometry, material);
	                    sphere.position.y = height * -0.5;
	                    path.add(sphere);
	                }*/
	                objs.push(path);
	            }

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = objs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var obj = _step.value;

	                    obj.name = event.Id;
	                    obj.visible = !hidden;
	                    this._scene.add(obj);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }

	        /**
	         * Handle any objects that mouse intersected with while moving.
	         */

	    }, {
	        key: 'handleIntersections',
	        value: function handleIntersections(mouse, previousMouse) {
	            var found = this.findMouseIntersections(mouse, previousMouse);
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = found[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var object = _step2.value;

	                    if (!this._insersecting.has(object)) this._highlightTarget(object, mouse, previousMouse);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }

	            this._insersecting = found;
	        }

	        /**
	         * Find all objects that mouse intersected with while moving.
	         */

	    }, {
	        key: 'findMouseIntersections',
	        value: function findMouseIntersections(mouse, previousMouse) {
	            var found = new Set();

	            if (!mouse || !previousMouse || previousMouse.equals(mouse)) return found;

	            this._raycaster.setFromCamera(previousMouse, this._camera);
	            var previousRay = this._raycaster.ray.clone();

	            this._raycaster.setFromCamera(mouse, this._camera);
	            var currentRay = this._raycaster.ray.clone();

	            var plane = planeFromVectors(previousRay.direction, currentRay.direction, currentRay.origin);

	            var upperPlane = planeFromVectors(plane.normal, currentRay.direction, currentRay.origin);
	            var lowerPlane = planeFromVectors(plane.normal, previousRay.direction, currentRay.origin);

	            this._scene.traverse(function (obj) {
	                if (!obj.userData || !obj.userData.event || !obj.visible) return;

	                var intersection = plane.intersectLine(obj.userData.event.ShotLine);
	                if (!intersection) return;

	                if (upperPlane.distanceToPoint(intersection) < 0 && lowerPlane.distanceToPoint(intersection) > 0) {
	                    found.add(obj);
	                }
	            });
	            return found;
	        }

	        /**
	         * Main update function.
	         */

	    }, {
	        key: 'update',
	        value: function update(delta) {
	            var time = this._clock.getElapsedTime() * 10;

	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = this._active[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var child = _step3.value;

	                    var uniforms = child.material && child.material.uniforms;
	                    if (uniforms && uniforms.time) {
	                        uniforms.time.value = time;
	                        uniforms.time.needsUpdate = true;
	                    }
	                    if (uniforms && uniforms.wave_strength) {
	                        uniforms.wave_strength.value *= damping;
	                        if (uniforms.wave_strength.value < 0.05) this._active.delete(child);
	                        uniforms.wave_strength.needsUpdate = true;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }

	            this._controls.update();
	        }
	    }, {
	        key: 'animate',
	        value: function animate() {
	            var _this = this;

	            requestAnimationFrame(function () {
	                return _this.animate();
	            });

	            var delta = this._clock.getDelta();
	            this.update(delta);
	            this._particleGroup.tick(delta);
	            this.render(delta);
	        }
	    }, {
	        key: 'render',
	        value: function render(delta) {
	            this._composer.render();
	            this._composer2.render();
	        }
	    }]);

	    return Viewer;
	}();

	exports.default = Viewer;

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var THREE = __webpack_require__(3);

	"use strict";

	/**
	 * @author alteredq / http://alteredqualia.com/
	 *
	 * Full-screen textured quad shader
	 */

	THREE.CopyShader = {

			uniforms: {

					"tDiffuse": { type: "t", value: null },
					"opacity": { type: "f", value: 1.0 }

			},

			vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),

			fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n")

	};


/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var THREE = __webpack_require__(3);

	"use strict";

	/**
	 * @author zz85 / http://www.lab4games.net/zz85/blog
	 *
	 * Two pass Gaussian blur filter (horizontal and vertical blur shaders)
	 * - described in http://www.gamerendering.com/2008/10/11/gaussian-blur-filter-shader/
	 *   and used in http://www.cake23.de/traveling-wavefronts-lit-up.html
	 *
	 * - 9 samples per pass
	 * - standard deviation 2.7
	 * - "h" and "v" parameters should be set to "1 / width" and "1 / height"
	 */

	THREE.HorizontalBlurShader = {

			uniforms: {

					"tDiffuse": { type: "t", value: null },
					"h": { type: "f", value: 1.0 / 512.0 }

			},

			vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),

			fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float h;", "varying vec2 vUv;", "void main() {", "vec4 sum = vec4( 0.0 );", "sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;", "sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;", "sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;", "sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;", "sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;", "sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;", "sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;", "sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;", "gl_FragColor = sum;", "}"].join("\n")

	};


/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var THREE = __webpack_require__(3);

	"use strict";

	/**
	 * @author zz85 / http://www.lab4games.net/zz85/blog
	 *
	 * Two pass Gaussian blur filter (horizontal and vertical blur shaders)
	 * - described in http://www.gamerendering.com/2008/10/11/gaussian-blur-filter-shader/
	 *   and used in http://www.cake23.de/traveling-wavefronts-lit-up.html
	 *
	 * - 9 samples per pass
	 * - standard deviation 2.7
	 * - "h" and "v" parameters should be set to "1 / width" and "1 / height"
	 */

	THREE.VerticalBlurShader = {

			uniforms: {

					"tDiffuse": { type: "t", value: null },
					"v": { type: "f", value: 1.0 / 512.0 }

			},

			vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),

			fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float v;", "varying vec2 vUv;", "void main() {", "vec4 sum = vec4( 0.0 );", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;", "gl_FragColor = sum;", "}"].join("\n")

	};


/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var THREE = __webpack_require__(3);

	"use strict";

	/**
	 * @author alteredq / http://alteredqualia.com/
	 */

	THREE.MaskPass = function (scene, camera) {

			this.scene = scene;
			this.camera = camera;

			this.enabled = true;
			this.clear = true;
			this.needsSwap = false;

			this.inverse = false;
	};

	THREE.MaskPass.prototype = {

			render: function render(renderer, writeBuffer, readBuffer, delta) {

					var context = renderer.context;

					// don't update color or depth

					context.colorMask(false, false, false, false);
					context.depthMask(false);

					// set up stencil

					var writeValue, clearValue;

					if (this.inverse) {

							writeValue = 0;
							clearValue = 1;
					} else {

							writeValue = 1;
							clearValue = 0;
					}

					context.enable(context.STENCIL_TEST);
					context.stencilOp(context.REPLACE, context.REPLACE, context.REPLACE);
					context.stencilFunc(context.ALWAYS, writeValue, 0xffffffff);
					context.clearStencil(clearValue);

					// draw into the stencil buffer

					renderer.render(this.scene, this.camera, readBuffer, this.clear);
					renderer.render(this.scene, this.camera, writeBuffer, this.clear);

					// re-enable update of color and depth

					context.colorMask(true, true, true, true);
					context.depthMask(true);

					// only render where stencil is set to 1

					context.stencilFunc(context.EQUAL, 1, 0xffffffff); // draw if == 1
					context.stencilOp(context.KEEP, context.KEEP, context.KEEP);
			}

	};

	THREE.ClearMaskPass = function () {

			this.enabled = true;
	};

	THREE.ClearMaskPass.prototype = {

			render: function render(renderer, writeBuffer, readBuffer, delta) {

					var context = renderer.context;

					context.disable(context.STENCIL_TEST);
			}

	};


/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var THREE = __webpack_require__(3);

	"use strict";

	/**
	 * @author alteredq / http://alteredqualia.com/
	 */

	THREE.RenderPass = function (scene, camera, overrideMaterial, clearColor, clearAlpha) {

		this.scene = scene;
		this.camera = camera;

		this.overrideMaterial = overrideMaterial;

		this.clearColor = clearColor;
		this.clearAlpha = clearAlpha !== undefined ? clearAlpha : 1;

		this.oldClearColor = new THREE.Color();
		this.oldClearAlpha = 1;

		this.enabled = true;
		this.clear = true;
		this.needsSwap = false;
	};

	THREE.RenderPass.prototype = {

		render: function render(renderer, writeBuffer, readBuffer, delta) {

			this.scene.overrideMaterial = this.overrideMaterial;

			if (this.clearColor) {

				this.oldClearColor.copy(renderer.getClearColor());
				this.oldClearAlpha = renderer.getClearAlpha();

				renderer.setClearColor(this.clearColor, this.clearAlpha);
			}

			renderer.render(this.scene, this.camera, readBuffer, this.clear);

			if (this.clearColor) {

				renderer.setClearColor(this.oldClearColor, this.oldClearAlpha);
			}

			this.scene.overrideMaterial = null;
		}

	};


/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var THREE = __webpack_require__(3);

	"use strict";

	/**
	 * @author alteredq / http://alteredqualia.com/
	 */

	THREE.ShaderPass = function (shader, textureID) {

		this.textureID = textureID !== undefined ? textureID : "tDiffuse";

		if (shader instanceof THREE.ShaderMaterial) {

			this.uniforms = shader.uniforms;

			this.material = shader;
		} else if (shader) {

			this.uniforms = THREE.UniformsUtils.clone(shader.uniforms);

			this.material = new THREE.ShaderMaterial({

				defines: shader.defines || {},
				uniforms: this.uniforms,
				vertexShader: shader.vertexShader,
				fragmentShader: shader.fragmentShader

			});
		}

		this.renderToScreen = false;

		this.enabled = true;
		this.needsSwap = true;
		this.clear = false;

		this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
		this.scene = new THREE.Scene();

		this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null);
		this.scene.add(this.quad);
	};

	THREE.ShaderPass.prototype = {

		render: function render(renderer, writeBuffer, readBuffer, delta) {

			if (this.uniforms[this.textureID]) {

				this.uniforms[this.textureID].value = readBuffer;
			}

			this.quad.material = this.material;

			if (this.renderToScreen) {

				renderer.render(this.scene, this.camera);
			} else {

				renderer.render(this.scene, this.camera, writeBuffer, this.clear);
			}
		}

	};


/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var THREE = __webpack_require__(3);

	"use strict";

	/**
	 * @author alteredq / http://alteredqualia.com/
	 */

	THREE.EffectComposer = function (renderer, renderTarget) {

		this.renderer = renderer;

		if (renderTarget === undefined) {

			var parameters = {
				minFilter: THREE.LinearFilter,
				magFilter: THREE.LinearFilter,
				format: THREE.RGBAFormat,
				stencilBuffer: false
			};
			var size = renderer.getSize();
			renderTarget = new THREE.WebGLRenderTarget(size.width, size.height, parameters);
		}

		this.renderTarget1 = renderTarget;
		this.renderTarget2 = renderTarget.clone();

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

		this.passes = [];

		if (THREE.CopyShader === undefined) console.error("THREE.EffectComposer relies on THREE.CopyShader");

		this.copyPass = new THREE.ShaderPass(THREE.CopyShader);
	};

	THREE.EffectComposer.prototype = {

		swapBuffers: function swapBuffers() {

			var tmp = this.readBuffer;
			this.readBuffer = this.writeBuffer;
			this.writeBuffer = tmp;
		},

		addPass: function addPass(pass) {

			this.passes.push(pass);
		},

		insertPass: function insertPass(pass, index) {

			this.passes.splice(index, 0, pass);
		},

		render: function render(delta) {

			this.writeBuffer = this.renderTarget1;
			this.readBuffer = this.renderTarget2;

			var maskActive = false;

			var pass,
			    i,
			    il = this.passes.length;

			for (i = 0; i < il; i++) {

				pass = this.passes[i];

				if (!pass.enabled) continue;

				pass.render(this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive);

				if (pass.needsSwap) {

					if (maskActive) {

						var context = this.renderer.context;

						context.stencilFunc(context.NOTEQUAL, 1, 0xffffffff);

						this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, delta);

						context.stencilFunc(context.EQUAL, 1, 0xffffffff);
					}

					this.swapBuffers();
				}

				if (pass instanceof THREE.MaskPass) {

					maskActive = true;
				} else if (pass instanceof THREE.ClearMaskPass) {

					maskActive = false;
				}
			}
		},

		reset: function reset(renderTarget) {

			if (renderTarget === undefined) {

				var size = this.renderer.getSize();

				renderTarget = this.renderTarget1.clone();
				renderTarget.setSize(size.width, size.height);
			}

			this.renderTarget1.dispose();
			this.renderTarget2.dispose();
			this.renderTarget1 = renderTarget;
			this.renderTarget2 = renderTarget.clone();

			this.writeBuffer = this.renderTarget1;
			this.readBuffer = this.renderTarget2;
		},

		setSize: function setSize(width, height) {

			this.renderTarget1.setSize(width, height);
			this.renderTarget2.setSize(width, height);
		}

	};


/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/
	var THREE = __webpack_require__(3);

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*** IMPORTS FROM imports-loader ***/
	var THREE = __webpack_require__(3);

	/* shader-particle-engine 1.0.4
	 * 
	 * (c) 2015 Luke Moody (http://www.github.com/squarefeet)
	 *     Originally based on Lee Stemkoski's original work (https://github.com/stemkoski/stemkoski.github.com/blob/master/Three.js/js/ParticleEngine.js).
	 *
	 * shader-particle-engine may be freely distributed under the MIT license (See LICENSE at root of this repository.)
	 */
	var SPE = { distributions: { BOX: 1, SPHERE: 2, DISC: 3 }, valueOverLifetimeLength: 4 }; true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (SPE), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof exports && "undefined" != typeof module && (module.exports = SPE), SPE.TypedArrayHelper = function (a, b, c, d) {
	  "use strict";
	  this.componentSize = c || 1, this.size = b || 1, this.TypedArrayConstructor = a || Float32Array, this.array = new a(b * this.componentSize), this.indexOffset = d || 0;
	}, SPE.TypedArrayHelper.constructor = SPE.TypedArrayHelper, SPE.TypedArrayHelper.prototype.setSize = function (a, b) {
	  "use strict";
	  var c = this.array.length;return b || (a *= this.componentSize), c > a ? this.shrink(a) : a > c ? this.grow(a) : void console.info("TypedArray is already of size:", a + ".", "Will not resize.");
	}, SPE.TypedArrayHelper.prototype.shrink = function (a) {
	  "use strict";
	  return this.array = this.array.subarray(0, a), this.size = a, this;
	}, SPE.TypedArrayHelper.prototype.grow = function (a) {
	  "use strict";
	  var b = this.array,
	      c = new this.TypedArrayConstructor(a);return c.set(b), this.array = c, this.size = a, this;
	}, SPE.TypedArrayHelper.prototype.splice = function (a, b) {
	  "use strict";
	  a *= this.componentSize, b *= this.componentSize;for (var c = [], d = this.array, e = d.length, f = 0; e > f; ++f) {
	    (a > f || f >= b) && c.push(d[f]);
	  }return this.setFromArray(0, c), this;
	}, SPE.TypedArrayHelper.prototype.setFromArray = function (a, b) {
	  "use strict";
	  var c = b.length,
	      d = a + c;return d > this.array.length ? this.grow(d) : d < this.array.length && this.shrink(d), this.array.set(b, this.indexOffset + a), this;
	}, SPE.TypedArrayHelper.prototype.setVec2 = function (a, b) {
	  "use strict";
	  return this.setVec2Components(a, b.x, b.y);
	}, SPE.TypedArrayHelper.prototype.setVec2Components = function (a, b, c) {
	  "use strict";
	  var d = this.array,
	      e = this.indexOffset + a * this.componentSize;return d[e] = b, d[e + 1] = c, this;
	}, SPE.TypedArrayHelper.prototype.setVec3 = function (a, b) {
	  "use strict";
	  return this.setVec3Components(a, b.x, b.y, b.z);
	}, SPE.TypedArrayHelper.prototype.setVec3Components = function (a, b, c, d) {
	  "use strict";
	  var e = this.array,
	      f = this.indexOffset + a * this.componentSize;return e[f] = b, e[f + 1] = c, e[f + 2] = d, this;
	}, SPE.TypedArrayHelper.prototype.setVec4 = function (a, b) {
	  "use strict";

	  return this.setVec4Components(a, b.x, b.y, b.z, b.w);
	}, SPE.TypedArrayHelper.prototype.setVec4Components = function (a, b, c, d, e) {
	  "use strict";
	  var f = this.array,
	      g = this.indexOffset + a * this.componentSize;return f[g] = b, f[g + 1] = c, f[g + 2] = d, f[g + 3] = e, this;
	}, SPE.TypedArrayHelper.prototype.setMat3 = function (a, b) {
	  "use strict";
	  return this.setFromArray(this.indexOffset + a * this.componentSize, b.elements);
	}, SPE.TypedArrayHelper.prototype.setMat4 = function (a, b) {
	  "use strict";
	  return this.setFromArray(this.indexOffset + a * this.componentSize, b.elements);
	}, SPE.TypedArrayHelper.prototype.setColor = function (a, b) {
	  "use strict";
	  return this.setVec3Components(a, b.r, b.g, b.b);
	}, SPE.TypedArrayHelper.prototype.setNumber = function (a, b) {
	  "use strict";
	  return this.array[this.indexOffset + a * this.componentSize] = b, this;
	}, SPE.TypedArrayHelper.prototype.getValueAtIndex = function (a) {
	  "use strict";
	  return this.array[this.indexOffset + a];
	}, SPE.TypedArrayHelper.prototype.getComponentValueAtIndex = function (a) {
	  "use strict";
	  return this.array.subarray(this.indexOffset + a * this.componentSize);
	}, SPE.ShaderAttribute = function (a, b, c) {
	  "use strict";
	  var d = SPE.ShaderAttribute.typeSizeMap;this.type = "string" == typeof a && d.hasOwnProperty(a) ? a : "f", this.componentSize = d[this.type], this.arrayType = c || Float32Array, this.typedArray = null, this.bufferAttribute = null, this.dynamicBuffer = !!b, this.updateMin = 0, this.updateMax = 0;
	}, SPE.ShaderAttribute.constructor = SPE.ShaderAttribute, SPE.ShaderAttribute.typeSizeMap = { f: 1, v2: 2, v3: 3, v4: 4, c: 3, m3: 9, m4: 16 }, SPE.ShaderAttribute.prototype.setUpdateRange = function (a, b) {
	  "use strict";
	  this.updateMin = Math.min(a * this.componentSize, this.updateMin * this.componentSize), this.updateMax = Math.max(b * this.componentSize, this.updateMax * this.componentSize);
	}, SPE.ShaderAttribute.prototype.flagUpdate = function () {
	  "use strict";
	  var a = this.bufferAttribute,
	      b = a.updateRange;b.offset = this.updateMin, b.count = Math.min(this.updateMax - this.updateMin + this.componentSize, this.typedArray.array.length), a.needsUpdate = !0;
	}, SPE.ShaderAttribute.prototype.resetUpdateRange = function () {
	  "use strict";
	  this.updateMin = 0, this.updateMax = 0;
	}, SPE.ShaderAttribute.prototype.resetDynamic = function () {
	  "use strict";
	  this.bufferAttribute.dynamic = this.dynamicBuffer;
	}, SPE.ShaderAttribute.prototype.splice = function (a, b) {
	  "use strict";
	  this.typedArray.splice(a, b), this.forceUpdateAll();
	}, SPE.ShaderAttribute.prototype.forceUpdateAll = function () {
	  "use strict";
	  this.bufferAttribute.array = this.typedArray.array, this.bufferAttribute.updateRange.offset = 0, this.bufferAttribute.updateRange.count = -1, this.bufferAttribute.dynamic = !1, this.bufferAttribute.needsUpdate = !0;
	}, SPE.ShaderAttribute.prototype._ensureTypedArray = function (a) {
	  "use strict";
	  null !== this.typedArray && this.typedArray.size === a * this.componentSize || (null !== this.typedArray && this.typedArray.size !== a ? this.typedArray.setSize(a) : null === this.typedArray && (this.typedArray = new SPE.TypedArrayHelper(this.arrayType, a, this.componentSize)));
	}, SPE.ShaderAttribute.prototype._createBufferAttribute = function (a) {
	  "use strict";
	  return this._ensureTypedArray(a), null !== this.bufferAttribute ? (this.bufferAttribute.array = this.typedArray.array, void (this.bufferAttribute.needsUpdate = !0)) : (this.bufferAttribute = new THREE.BufferAttribute(this.typedArray.array, this.componentSize), void (this.bufferAttribute.dynamic = this.dynamicBuffer));
	}, SPE.ShaderAttribute.prototype.getLength = function () {
	  "use strict";
	  return null === this.typedArray ? 0 : this.typedArray.array.length;
	}, SPE.shaderChunks = { defines: ["#define PACKED_COLOR_SIZE 256.0", "#define PACKED_COLOR_DIVISOR 255.0"].join("\n"), uniforms: ["uniform float deltaTime;", "uniform float runTime;", "uniform sampler2D texture;", "uniform vec4 textureAnimation;", "uniform float scale;"].join("\n"), attributes: ["attribute vec4 acceleration;", "attribute vec3 velocity;", "attribute vec4 rotation;", "attribute vec3 rotationCenter;", "attribute vec4 params;", "attribute vec4 size;", "attribute vec4 angle;", "attribute vec4 color;", "attribute vec4 opacity;"].join("\n"), varyings: ["varying vec4 vColor;", "#ifdef SHOULD_ROTATE_TEXTURE", "    varying float vAngle;", "#endif", "#ifdef SHOULD_CALCULATE_SPRITE", "    varying vec4 vSpriteSheet;", "#endif"].join("\n"),
	  branchAvoidanceFunctions: ["float when_gt(float x, float y) {", "    return max(sign(x - y), 0.0);", "}", "float when_lt(float x, float y) {", "    return min( max(1.0 - sign(x - y), 0.0), 1.0 );", "}", "float when_eq( float x, float y ) {", "    return 1.0 - abs( sign( x - y ) );", "}", "float when_ge(float x, float y) {", "  return 1.0 - when_lt(x, y);", "}", "float when_le(float x, float y) {", "  return 1.0 - when_gt(x, y);", "}", "float and(float a, float b) {", "    return a * b;", "}", "float or(float a, float b) {", "    return min(a + b, 1.0);", "}"].join("\n"), unpackColor: ["vec3 unpackColor( in float hex ) {", "   vec3 c = vec3( 0.0 );", "   float r = mod( (hex / PACKED_COLOR_SIZE / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );", "   float g = mod( (hex / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );", "   float b = mod( hex, PACKED_COLOR_SIZE );", "   c.r = r / PACKED_COLOR_DIVISOR;", "   c.g = g / PACKED_COLOR_DIVISOR;", "   c.b = b / PACKED_COLOR_DIVISOR;", "   return c;", "}"].join("\n"), unpackRotationAxis: ["vec3 unpackRotationAxis( in float hex ) {", "   vec3 c = vec3( 0.0 );", "   float r = mod( (hex / PACKED_COLOR_SIZE / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );", "   float g = mod( (hex / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );", "   float b = mod( hex, PACKED_COLOR_SIZE );", "   c.r = r / PACKED_COLOR_DIVISOR;", "   c.g = g / PACKED_COLOR_DIVISOR;", "   c.b = b / PACKED_COLOR_DIVISOR;", "   c *= vec3( 2.0 );", "   c -= vec3( 1.0 );", "   return c;", "}"].join("\n"),
	  floatOverLifetime: ["float getFloatOverLifetime( in float positionInTime, in vec4 attr ) {", "    highp float value = 0.0;", "    float deltaAge = positionInTime * float( VALUE_OVER_LIFETIME_LENGTH - 1 );", "    float fIndex = 0.0;", "    float shouldApplyValue = 0.0;", "    value += attr[ 0 ] * when_eq( deltaAge, 0.0 );", "", "    for( int i = 0; i < VALUE_OVER_LIFETIME_LENGTH - 1; ++i ) {", "       fIndex = float( i );", "       shouldApplyValue = and( when_gt( deltaAge, fIndex ), when_le( deltaAge, fIndex + 1.0 ) );", "       value += shouldApplyValue * mix( attr[ i ], attr[ i + 1 ], deltaAge - fIndex );", "    }", "", "    return value;", "}"].join("\n"), colorOverLifetime: ["vec3 getColorOverLifetime( in float positionInTime, in vec3 color1, in vec3 color2, in vec3 color3, in vec3 color4 ) {", "    vec3 value = vec3( 0.0 );", "    value.x = getFloatOverLifetime( positionInTime, vec4( color1.x, color2.x, color3.x, color4.x ) );", "    value.y = getFloatOverLifetime( positionInTime, vec4( color1.y, color2.y, color3.y, color4.y ) );", "    value.z = getFloatOverLifetime( positionInTime, vec4( color1.z, color2.z, color3.z, color4.z ) );", "    return value;", "}"].join("\n"),
	  paramFetchingFunctions: ["float getAlive() {", "   return params.x;", "}", "float getAge() {", "   return params.y;", "}", "float getMaxAge() {", "   return params.z;", "}", "float getWiggle() {", "   return params.w;", "}"].join("\n"), forceFetchingFunctions: ["vec4 getPosition( in float age ) {", "   return modelViewMatrix * vec4( position, 1.0 );", "}", "vec3 getVelocity( in float age ) {", "   return velocity * age;", "}", "vec3 getAcceleration( in float age ) {", "   return acceleration.xyz * age;", "}"].join("\n"), rotationFunctions: ["#ifdef SHOULD_ROTATE_PARTICLES", "   mat4 getRotationMatrix( in vec3 axis, in float angle) {", "       axis = normalize(axis);", "       float s = sin(angle);", "       float c = cos(angle);", "       float oc = 1.0 - c;", "", "       return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,", "                   oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,", "                   oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,", "                   0.0,                                0.0,                                0.0,                                1.0);", "   }", "", "   vec3 getRotation( in vec3 pos, in float positionInTime ) {", "      if( rotation.y == 0.0 ) {", "           return pos;", "      }", "", "      vec3 axis = unpackRotationAxis( rotation.x );", "      vec3 center = rotationCenter;", "      vec3 translated;", "      mat4 rotationMatrix;", "      float angle = 0.0;", "      angle += when_eq( rotation.z, 0.0 ) * rotation.y;", "      angle += when_gt( rotation.z, 0.0 ) * mix( 0.0, rotation.y, positionInTime );", "      translated = rotationCenter - pos;", "      rotationMatrix = getRotationMatrix( axis, angle );", "      return center - vec3( rotationMatrix * vec4( translated, 0.0 ) );", "   }", "#endif"].join("\n"),
	  rotateTexture: ["    vec2 vUv = vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y );", "", "    #ifdef SHOULD_ROTATE_TEXTURE", "       float x = gl_PointCoord.x - 0.5;", "       float y = 1.0 - gl_PointCoord.y - 0.5;", "       float c = cos( -vAngle );", "       float s = sin( -vAngle );", "       vUv = vec2( c * x + s * y + 0.5, c * y - s * x + 0.5 );", "    #endif", "", "    #ifdef SHOULD_CALCULATE_SPRITE", "        float framesX = vSpriteSheet.x;", "        float framesY = vSpriteSheet.y;", "        float columnNorm = vSpriteSheet.z;", "        float rowNorm = vSpriteSheet.w;", "        vUv.x = gl_PointCoord.x * framesX + columnNorm;", "        vUv.y = 1.0 - (gl_PointCoord.y * framesY + rowNorm);", "    #endif", "", "    vec4 rotatedTexture = texture2D( texture, vUv );"].join("\n") }, SPE.shaders = { vertex: [SPE.shaderChunks.defines, SPE.shaderChunks.uniforms, SPE.shaderChunks.attributes, SPE.shaderChunks.varyings, THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_vertex, SPE.shaderChunks.branchAvoidanceFunctions, SPE.shaderChunks.unpackColor, SPE.shaderChunks.unpackRotationAxis, SPE.shaderChunks.floatOverLifetime, SPE.shaderChunks.colorOverLifetime, SPE.shaderChunks.paramFetchingFunctions, SPE.shaderChunks.forceFetchingFunctions, SPE.shaderChunks.rotationFunctions, "void main() {", "    highp float age = getAge();", "    highp float alive = getAlive();", "    highp float maxAge = getMaxAge();", "    highp float positionInTime = (age / maxAge);", "    highp float isAlive = when_gt( alive, 0.0 );", "    #ifdef SHOULD_WIGGLE_PARTICLES", "        float wiggleAmount = positionInTime * getWiggle();", "        float wiggleSin = isAlive * sin( wiggleAmount );", "        float wiggleCos = isAlive * cos( wiggleAmount );", "    #endif", "    vec3 vel = getVelocity( age );", "    vec3 accel = getAcceleration( age );", "    vec3 force = vec3( 0.0 );", "    vec3 pos = vec3( position );", "    float drag = 1.0 - (positionInTime * 0.5) * acceleration.w;", "    force += vel;", "    force *= drag;", "    force += accel * age;", "    pos += force;", "    #ifdef SHOULD_WIGGLE_PARTICLES", "        pos.x += wiggleSin;", "        pos.y += wiggleCos;", "        pos.z += wiggleSin;", "    #endif", "    #ifdef SHOULD_ROTATE_PARTICLES", "        pos = getRotation( pos, positionInTime );", "    #endif", "    vec4 mvPos = modelViewMatrix * vec4( pos, 1.0 );", "    highp float pointSize = getFloatOverLifetime( positionInTime, size ) * isAlive;", "    #ifdef HAS_PERSPECTIVE", "        float perspective = scale / length( mvPos.xyz );", "    #else", "        float perspective = 1.0;", "    #endif", "    float pointSizePerspective = pointSize * perspective;", "    #ifdef COLORIZE", "       vec3 c = isAlive * getColorOverLifetime(", "           positionInTime,", "           unpackColor( color.x ),", "           unpackColor( color.y ),", "           unpackColor( color.z ),", "           unpackColor( color.w )", "       );", "    #else", "       vec3 c = vec3(1.0);", "    #endif", "    float o = isAlive * getFloatOverLifetime( positionInTime, opacity );", "    vColor = vec4( c, o );", "    #ifdef SHOULD_ROTATE_TEXTURE", "        vAngle = isAlive * getFloatOverLifetime( positionInTime, angle );", "    #endif", "    #ifdef SHOULD_CALCULATE_SPRITE", "        float framesX = textureAnimation.x;", "        float framesY = textureAnimation.y;", "        float loopCount = textureAnimation.w;", "        float totalFrames = textureAnimation.z;", "        float frameNumber = mod( (positionInTime * loopCount) * totalFrames, totalFrames );", "        float column = floor(mod( frameNumber, framesX ));", "        float row = floor( (frameNumber - column) / framesX );", "        float columnNorm = column / framesX;", "        float rowNorm = row / framesY;", "        vSpriteSheet.x = 1.0 / framesX;", "        vSpriteSheet.y = 1.0 / framesY;", "        vSpriteSheet.z = columnNorm;", "        vSpriteSheet.w = rowNorm;", "    #endif", "    gl_PointSize = pointSizePerspective;", "    gl_Position = projectionMatrix * mvPos;", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
	  fragment: [SPE.shaderChunks.uniforms, THREE.ShaderChunk.common, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, SPE.shaderChunks.varyings, SPE.shaderChunks.branchAvoidanceFunctions, "void main() {", "    vec3 outgoingLight = vColor.xyz;", "    ", "    #ifdef ALPHATEST", "       if ( vColor.w < float(ALPHATEST) ) discard;", "    #endif", SPE.shaderChunks.rotateTexture, THREE.ShaderChunk.logdepthbuf_fragment, "    outgoingLight = vColor.xyz * rotatedTexture.xyz;", THREE.ShaderChunk.fog_fragment, "    gl_FragColor = vec4( outgoingLight.xyz, rotatedTexture.w * vColor.w );", "}"].join("\n") }, SPE.utils = { types: { BOOLEAN: "boolean", STRING: "string", NUMBER: "number", OBJECT: "object" }, ensureTypedArg: function ensureTypedArg(a, b, c) {
	    "use strict";
	    return (typeof a === "undefined" ? "undefined" : _typeof(a)) === b ? a : c;
	  }, ensureArrayTypedArg: function ensureArrayTypedArg(a, b, c) {
	    "use strict";
	    if (Array.isArray(a)) {
	      for (var d = a.length - 1; d >= 0; --d) {
	        if (_typeof(a[d]) !== b) return c;
	      }return a;
	    }return this.ensureTypedArg(a, b, c);
	  }, ensureInstanceOf: function ensureInstanceOf(a, b, c) {
	    "use strict";
	    return void 0 !== b && a instanceof b ? a : c;
	  }, ensureArrayInstanceOf: function ensureArrayInstanceOf(a, b, c) {
	    "use strict";
	    if (Array.isArray(a)) {
	      for (var d = a.length - 1; d >= 0; --d) {
	        if (void 0 !== b && a[d] instanceof b == !1) return c;
	      }return a;
	    }return this.ensureInstanceOf(a, b, c);
	  }, ensureValueOverLifetimeCompliance: function ensureValueOverLifetimeCompliance(a, b, c) {
	    "use strict";
	    b = b || 3, c = c || 3, Array.isArray(a._value) === !1 && (a._value = [a._value]), Array.isArray(a._spread) === !1 && (a._spread = [a._spread]);var d = this.clamp(a._value.length, b, c),
	        e = this.clamp(a._spread.length, b, c),
	        f = Math.max(d, e);a._value.length !== f && (a._value = this.interpolateArray(a._value, f)), a._spread.length !== f && (a._spread = this.interpolateArray(a._spread, f));
	  }, interpolateArray: function interpolateArray(a, b) {
	    "use strict";
	    for (var c = a.length, d = ["function" == typeof a[0].clone ? a[0].clone() : a[0]], e = (c - 1) / (b - 1), f = 1; b - 1 > f; ++f) {
	      var g = f * e,
	          h = Math.floor(g),
	          i = Math.ceil(g),
	          j = g - h;d[f] = this.lerpTypeAgnostic(a[h], a[i], j);
	    }return d.push("function" == typeof a[c - 1].clone ? a[c - 1].clone() : a[c - 1]), d;
	  }, clamp: function clamp(a, b, c) {
	    "use strict";
	    return Math.max(b, Math.min(a, c));
	  }, zeroToEpsilon: function zeroToEpsilon(a, b) {
	    "use strict";
	    var c = 1e-5,
	        d = a;return d = b ? Math.random() * c * 10 : c, 0 > a && a > -c && (d = -d), d;
	  }, lerpTypeAgnostic: function lerpTypeAgnostic(a, b, c) {
	    "use strict";
	    var d,
	        e = this.types;return (typeof a === "undefined" ? "undefined" : _typeof(a)) === e.NUMBER && (typeof b === "undefined" ? "undefined" : _typeof(b)) === e.NUMBER ? a + (b - a) * c : a instanceof THREE.Vector2 && b instanceof THREE.Vector2 ? (d = a.clone(), d.x = this.lerp(a.x, b.x, c), d.y = this.lerp(a.y, b.y, c), d) : a instanceof THREE.Vector3 && b instanceof THREE.Vector3 ? (d = a.clone(), d.x = this.lerp(a.x, b.x, c), d.y = this.lerp(a.y, b.y, c), d.z = this.lerp(a.z, b.z, c), d) : a instanceof THREE.Vector4 && b instanceof THREE.Vector4 ? (d = a.clone(), d.x = this.lerp(a.x, b.x, c), d.y = this.lerp(a.y, b.y, c), d.z = this.lerp(a.z, b.z, c), d.w = this.lerp(a.w, b.w, c), d) : a instanceof THREE.Color && b instanceof THREE.Color ? (d = a.clone(), d.r = this.lerp(a.r, b.r, c), d.g = this.lerp(a.g, b.g, c), d.b = this.lerp(a.b, b.b, c), d) : void console.warn("Invalid argument types, or argument types do not match:", a, b);
	  }, lerp: function lerp(a, b, c) {
	    "use strict";
	    return a + (b - a) * c;
	  }, roundToNearestMultiple: function roundToNearestMultiple(a, b) {
	    "use strict";
	    var c = 0;return 0 === b ? a : (c = Math.abs(a) % b, 0 === c ? a : 0 > a ? -(Math.abs(a) - c) : a + b - c);
	  }, arrayValuesAreEqual: function arrayValuesAreEqual(a) {
	    "use strict";
	    for (var b = 0; b < a.length - 1; ++b) {
	      if (a[b] !== a[b + 1]) return !1;
	    }return !0;
	  }, randomFloat: function randomFloat(a, b) {
	    "use strict";
	    return a + b * (Math.random() - .5);
	  }, randomVector3: function randomVector3(a, b, c, d, e) {
	    "use strict";
	    var f = c.x + (Math.random() * d.x - .5 * d.x),
	        g = c.y + (Math.random() * d.y - .5 * d.y),
	        h = c.z + (Math.random() * d.z - .5 * d.z);e && (f = .5 * -e.x + this.roundToNearestMultiple(f, e.x), g = .5 * -e.y + this.roundToNearestMultiple(g, e.y), h = .5 * -e.z + this.roundToNearestMultiple(h, e.z)), a.typedArray.setVec3Components(b, f, g, h);
	  }, randomColor: function randomColor(a, b, c, d) {
	    "use strict";
	    var e = c.r + Math.random() * d.x,
	        f = c.g + Math.random() * d.y,
	        g = c.b + Math.random() * d.z;e = this.clamp(e, 0, 1), f = this.clamp(f, 0, 1), g = this.clamp(g, 0, 1), a.typedArray.setVec3Components(b, e, f, g);
	  }, randomColorAsHex: function () {
	    "use strict";
	    var a = new THREE.Color();return function (b, c, d, e) {
	      for (var f = d.length, g = [], h = 0; f > h; ++h) {
	        var i = e[h];a.copy(d[h]), a.r += Math.random() * i.x - .5 * i.x, a.g += Math.random() * i.y - .5 * i.y, a.b += Math.random() * i.z - .5 * i.z, a.r = this.clamp(a.r, 0, 1), a.g = this.clamp(a.g, 0, 1), a.b = this.clamp(a.b, 0, 1), g.push(a.getHex());
	      }b.typedArray.setVec4Components(c, g[0], g[1], g[2], g[3]);
	    };
	  }(), randomVector3OnSphere: function randomVector3OnSphere(a, b, c, d, e, f, g, h) {
	    "use strict";
	    var i = 2 * Math.random() - 1,
	        j = 6.2832 * Math.random(),
	        k = Math.sqrt(1 - i * i),
	        l = this.randomFloat(d, e),
	        m = 0,
	        n = 0,
	        o = 0;g && (l = Math.round(l / g) * g), m = k * Math.cos(j) * l, n = k * Math.sin(j) * l, o = i * l, m *= f.x, n *= f.y, o *= f.z, m += c.x, n += c.y, o += c.z, a.typedArray.setVec3Components(b, m, n, o);
	  }, seededRandom: function seededRandom(a) {
	    var b = 1e4 * Math.sin(a);return b - (0 | b);
	  }, randomVector3OnDisc: function randomVector3OnDisc(a, b, c, d, e, f, g) {
	    "use strict";
	    var h = 6.2832 * Math.random(),
	        i = Math.abs(this.randomFloat(d, e)),
	        j = 0,
	        k = 0,
	        l = 0;g && (i = Math.round(i / g) * g), j = Math.cos(h) * i, k = Math.sin(h) * i, j *= f.x, k *= f.y, j += c.x, k += c.y, l += c.z, a.typedArray.setVec3Components(b, j, k, l);
	  }, randomDirectionVector3OnSphere: function () {
	    "use strict";
	    var a = new THREE.Vector3();return function (b, c, d, e, f, g, h, i) {
	      a.copy(g), a.x -= d, a.y -= e, a.z -= f, a.normalize().multiplyScalar(-this.randomFloat(h, i)), b.typedArray.setVec3Components(c, a.x, a.y, a.z);
	    };
	  }(), randomDirectionVector3OnDisc: function () {
	    "use strict";
	    var a = new THREE.Vector3();return function (b, c, d, e, f, g, h, i) {
	      a.copy(g), a.x -= d, a.y -= e, a.z -= f, a.normalize().multiplyScalar(-this.randomFloat(h, i)), b.typedArray.setVec3Components(c, a.x, a.y, 0);
	    };
	  }(), getPackedRotationAxis: function () {
	    "use strict";
	    var a = new THREE.Vector3(),
	        b = new THREE.Vector3(),
	        c = new THREE.Color(),
	        d = new THREE.Vector3(1, 1, 1);return function (e, f) {
	      return a.copy(e).normalize(), b.copy(f).normalize(), a.x += .5 * -f.x + Math.random() * f.x, a.y += .5 * -f.y + Math.random() * f.y, a.z += .5 * -f.z + Math.random() * f.z, a.normalize().add(d).multiplyScalar(.5), c.setRGB(a.x, a.y, a.z), c.getHex();
	    };
	  }() }, SPE.Group = function (a) {
	  "use strict";
	  var b = SPE.utils,
	      c = b.types;a = b.ensureTypedArg(a, c.OBJECT, {}), a.texture = b.ensureTypedArg(a.texture, c.OBJECT, {}), this.uuid = THREE.Math.generateUUID(), this.fixedTimeStep = b.ensureTypedArg(a.fixedTimeStep, c.NUMBER, .016), this.texture = b.ensureInstanceOf(a.texture.value, THREE.Texture, null), this.textureFrames = b.ensureInstanceOf(a.texture.frames, THREE.Vector2, new THREE.Vector2(1, 1)), this.textureFrameCount = b.ensureTypedArg(a.texture.frameCount, c.NUMBER, this.textureFrames.x * this.textureFrames.y), this.textureLoop = b.ensureTypedArg(a.texture.loop, c.NUMBER, 1), this.textureFrames.max(new THREE.Vector2(1, 1)), this.hasPerspective = b.ensureTypedArg(a.hasPerspective, c.BOOLEAN, !0), this.colorize = b.ensureTypedArg(a.colorize, c.BOOLEAN, !0), this.maxParticleCount = b.ensureTypedArg(a.maxParticleCount, c.NUMBER, null), this.blending = b.ensureTypedArg(a.blending, c.NUMBER, THREE.AdditiveBlending), this.transparent = b.ensureTypedArg(a.transparent, c.BOOLEAN, !0), this.alphaTest = parseFloat(b.ensureTypedArg(a.alphaTest, c.NUMBER, 0)), this.depthWrite = b.ensureTypedArg(a.depthWrite, c.BOOLEAN, !1), this.depthTest = b.ensureTypedArg(a.depthTest, c.BOOLEAN, !0), this.fog = b.ensureTypedArg(a.fog, c.BOOLEAN, !0), this.scale = b.ensureTypedArg(a.scale, c.NUMBER, 300), this.emitters = [], this.emitterIDs = [], this._pool = [], this._poolCreationSettings = null, this._createNewWhenPoolEmpty = 0, this._attributesNeedRefresh = !1, this._attributesNeedDynamicReset = !1, this.particleCount = 0, this.uniforms = { texture: { type: "t", value: this.texture }, textureAnimation: { type: "v4", value: new THREE.Vector4(this.textureFrames.x, this.textureFrames.y, this.textureFrameCount, Math.max(Math.abs(this.textureLoop), 1)) }, fogColor: { type: "c", value: null }, fogNear: { type: "f", value: 10 }, fogFar: { type: "f", value: 200 }, fogDensity: { type: "f", value: .5 }, deltaTime: { type: "f", value: 0 }, runTime: { type: "f", value: 0 }, scale: { type: "f", value: this.scale } }, this.defines = { HAS_PERSPECTIVE: this.hasPerspective, COLORIZE: this.colorize, VALUE_OVER_LIFETIME_LENGTH: SPE.valueOverLifetimeLength, SHOULD_ROTATE_TEXTURE: !1, SHOULD_ROTATE_PARTICLES: !1, SHOULD_WIGGLE_PARTICLES: !1, SHOULD_CALCULATE_SPRITE: this.textureFrames.x > 1 || this.textureFrames.y > 1 }, this.attributes = { position: new SPE.ShaderAttribute("v3", !0), acceleration: new SPE.ShaderAttribute("v4", !0), velocity: new SPE.ShaderAttribute("v3", !0), rotation: new SPE.ShaderAttribute("v4", !0), rotationCenter: new SPE.ShaderAttribute("v3", !0), params: new SPE.ShaderAttribute("v4", !0), size: new SPE.ShaderAttribute("v4", !0),
	    angle: new SPE.ShaderAttribute("v4", !0), color: new SPE.ShaderAttribute("v4", !0), opacity: new SPE.ShaderAttribute("v4", !0) }, this.attributeKeys = Object.keys(this.attributes), this.attributeCount = this.attributeKeys.length, this.material = new THREE.ShaderMaterial({ uniforms: this.uniforms, vertexShader: SPE.shaders.vertex, fragmentShader: SPE.shaders.fragment, blending: this.blending, transparent: this.transparent, alphaTest: this.alphaTest, depthWrite: this.depthWrite, depthTest: this.depthTest, defines: this.defines, fog: this.fog }), this.geometry = new THREE.BufferGeometry(), this.mesh = new THREE.Points(this.geometry, this.material), null === this.maxParticleCount && console.warn("SPE.Group: No maxParticleCount specified. Adding emitters after rendering will probably cause errors.");
	}, SPE.Group.constructor = SPE.Group, SPE.Group.prototype._updateDefines = function () {
	  "use strict";
	  var a,
	      b = this.emitters,
	      c = b.length - 1,
	      d = this.defines;for (c; c >= 0; --c) {
	    a = b[c], d.SHOULD_CALCULATE_SPRITE || (d.SHOULD_ROTATE_TEXTURE = d.SHOULD_ROTATE_TEXTURE || !!Math.max(Math.max.apply(null, a.angle.value), Math.max.apply(null, a.angle.spread))), d.SHOULD_ROTATE_PARTICLES = d.SHOULD_ROTATE_PARTICLES || !!Math.max(a.rotation.angle, a.rotation.angleSpread), d.SHOULD_WIGGLE_PARTICLES = d.SHOULD_WIGGLE_PARTICLES || !!Math.max(a.wiggle.value, a.wiggle.spread);
	  }this.material.needsUpdate = !0;
	}, SPE.Group.prototype._applyAttributesToGeometry = function () {
	  "use strict";
	  var a,
	      b,
	      c = this.attributes,
	      d = this.geometry,
	      e = d.attributes;for (var f in c) {
	    c.hasOwnProperty(f) && (a = c[f], b = e[f], b ? b.array = a.typedArray.array : d.addAttribute(f, a.bufferAttribute), a.bufferAttribute.needsUpdate = !0);
	  }this.geometry.setDrawRange(0, this.particleCount);
	}, SPE.Group.prototype.addEmitter = function (a) {
	  "use strict";
	  if (a instanceof SPE.Emitter == !1) return void console.error("`emitter` argument must be instance of SPE.Emitter. Was provided with:", a);if (this.emitterIDs.indexOf(a.uuid) > -1) return void console.error("Emitter already exists in this group. Will not add again.");if (null !== a.group) return void console.error("Emitter already belongs to another group. Will not add to requested group.");var b = this.attributes,
	      c = this.particleCount,
	      d = c + a.particleCount;
	  this.particleCount = d, null !== this.maxParticleCount && this.particleCount > this.maxParticleCount && console.warn("SPE.Group: maxParticleCount exceeded. Requesting", this.particleCount, "particles, can support only", this.maxParticleCount), a._calculatePPSValue(a.maxAge._value + a.maxAge._spread), a._setBufferUpdateRanges(this.attributeKeys), a._setAttributeOffset(c), a.group = this, a.attributes = this.attributes;for (var e in b) {
	    b.hasOwnProperty(e) && b[e]._createBufferAttribute(null !== this.maxParticleCount ? this.maxParticleCount : this.particleCount);
	  }for (var f = c; d > f; ++f) {
	    a._assignPositionValue(f), a._assignForceValue(f, "velocity"), a._assignForceValue(f, "acceleration"), a._assignAbsLifetimeValue(f, "opacity"), a._assignAbsLifetimeValue(f, "size"), a._assignAngleValue(f), a._assignRotationValue(f), a._assignParamsValue(f), a._assignColorValue(f);
	  }return this._applyAttributesToGeometry(), this.emitters.push(a), this.emitterIDs.push(a.uuid), this._updateDefines(a), this.material.needsUpdate = !0, this.geometry.needsUpdate = !0, this._attributesNeedRefresh = !0, this;
	}, SPE.Group.prototype.removeEmitter = function (a) {
	  "use strict";
	  var b = this.emitterIDs.indexOf(a.uuid);if (a instanceof SPE.Emitter == !1) return void console.error("`emitter` argument must be instance of SPE.Emitter. Was provided with:", a);if (-1 === b) return void console.error("Emitter does not exist in this group. Will not remove.");for (var c = a.attributeOffset, d = c + a.particleCount, e = this.attributes.params.typedArray, f = c; d > f; ++f) {
	    e.array[4 * f] = 0, e.array[4 * f + 1] = 0;
	  }this.emitters.splice(b, 1), this.emitterIDs.splice(b, 1);for (var g in this.attributes) {
	    this.attributes.hasOwnProperty(g) && this.attributes[g].splice(c, d);
	  }this.particleCount -= a.particleCount, a._onRemove(), this._attributesNeedRefresh = !0;
	}, SPE.Group.prototype.getFromPool = function () {
	  "use strict";
	  var a = this._pool,
	      b = this._createNewWhenPoolEmpty;return a.length ? a.pop() : b ? new SPE.Emitter(this._poolCreationSettings) : null;
	}, SPE.Group.prototype.releaseIntoPool = function (a) {
	  "use strict";
	  return a instanceof SPE.Emitter == !1 ? void console.error("Argument is not instanceof SPE.Emitter:", a) : (a.reset(), this._pool.unshift(a), this);
	}, SPE.Group.prototype.getPool = function () {
	  "use strict";
	  return this._pool;
	}, SPE.Group.prototype.addPool = function (a, b, c) {
	  "use strict";
	  var d;this._poolCreationSettings = b, this._createNewWhenPoolEmpty = !!c;for (var e = 0; a > e; ++e) {
	    d = Array.isArray(b) ? new SPE.Emitter(b[e]) : new SPE.Emitter(b), this.addEmitter(d), this.releaseIntoPool(d);
	  }return this;
	}, SPE.Group.prototype._triggerSingleEmitter = function (a) {
	  "use strict";
	  var b = this.getFromPool(),
	      c = this;return null === b ? void console.log("SPE.Group pool ran out.") : (a instanceof THREE.Vector3 && (b.position.value.copy(a), b.position.value = b.position.value), b.enable(), setTimeout(function () {
	    b.disable(), c.releaseIntoPool(b);
	  }, 1e3 * Math.max(b.duration, b.maxAge.value + b.maxAge.spread)), this);
	}, SPE.Group.prototype.triggerPoolEmitter = function (a, b) {
	  "use strict";
	  if ("number" == typeof a && a > 1) for (var c = 0; a > c; ++c) {
	    this._triggerSingleEmitter(b);
	  } else this._triggerSingleEmitter(b);return this;
	}, SPE.Group.prototype._updateUniforms = function (a) {
	  "use strict";
	  this.uniforms.runTime.value += a, this.uniforms.deltaTime.value = a;
	}, SPE.Group.prototype._resetBufferRanges = function () {
	  "use strict";
	  var a = this.attributeKeys,
	      b = this.attributeCount - 1,
	      c = this.attributes;for (b; b >= 0; --b) {
	    c[a[b]].resetUpdateRange();
	  }
	}, SPE.Group.prototype._updateBuffers = function (a) {
	  "use strict";
	  var b,
	      c,
	      d,
	      e = this.attributeKeys,
	      f = this.attributeCount - 1,
	      g = this.attributes,
	      h = a.bufferUpdateRanges;for (f; f >= 0; --f) {
	    b = e[f], c = h[b], d = g[b], d.setUpdateRange(c.min, c.max), d.flagUpdate();
	  }
	}, SPE.Group.prototype.tick = function (a) {
	  "use strict";
	  var b,
	      c = this.emitters,
	      d = c.length,
	      e = a || this.fixedTimeStep,
	      f = this.attributeKeys,
	      g = this.attributes;if (this._updateUniforms(e), this._resetBufferRanges(), 0 !== d || this._attributesNeedRefresh !== !1 || this._attributesNeedDynamicReset !== !1) {
	    for (var h, b = 0; d > b; ++b) {
	      h = c[b], h.tick(e), this._updateBuffers(h);
	    }if (this._attributesNeedDynamicReset === !0) {
	      for (b = this.attributeCount - 1; b >= 0; --b) {
	        g[f[b]].resetDynamic();
	      }this._attributesNeedDynamicReset = !1;
	    }if (this._attributesNeedRefresh === !0) {
	      for (b = this.attributeCount - 1; b >= 0; --b) {
	        g[f[b]].forceUpdateAll();
	      }this._attributesNeedRefresh = !1, this._attributesNeedDynamicReset = !0;
	    }
	  }
	}, SPE.Group.prototype.dispose = function () {
	  "use strict";
	  return this.geometry.dispose(), this.material.dispose(), this;
	}, SPE.Emitter = function (a) {
	  "use strict";
	  var b = SPE.utils,
	      c = b.types,
	      d = SPE.valueOverLifetimeLength;a = b.ensureTypedArg(a, c.OBJECT, {}), a.position = b.ensureTypedArg(a.position, c.OBJECT, {}), a.velocity = b.ensureTypedArg(a.velocity, c.OBJECT, {}), a.acceleration = b.ensureTypedArg(a.acceleration, c.OBJECT, {}), a.radius = b.ensureTypedArg(a.radius, c.OBJECT, {}), a.drag = b.ensureTypedArg(a.drag, c.OBJECT, {}), a.rotation = b.ensureTypedArg(a.rotation, c.OBJECT, {}), a.color = b.ensureTypedArg(a.color, c.OBJECT, {}), a.opacity = b.ensureTypedArg(a.opacity, c.OBJECT, {}), a.size = b.ensureTypedArg(a.size, c.OBJECT, {}), a.angle = b.ensureTypedArg(a.angle, c.OBJECT, {}), a.wiggle = b.ensureTypedArg(a.wiggle, c.OBJECT, {}), a.maxAge = b.ensureTypedArg(a.maxAge, c.OBJECT, {}), a.onParticleSpawn && console.warn("onParticleSpawn has been removed. Please set properties directly to alter values at runtime."), this.uuid = THREE.Math.generateUUID(), this.type = b.ensureTypedArg(a.type, c.NUMBER, SPE.distributions.BOX), this.position = { _value: b.ensureInstanceOf(a.position.value, THREE.Vector3, new THREE.Vector3()), _spread: b.ensureInstanceOf(a.position.spread, THREE.Vector3, new THREE.Vector3()), _spreadClamp: b.ensureInstanceOf(a.position.spreadClamp, THREE.Vector3, new THREE.Vector3()), _distribution: b.ensureTypedArg(a.position.distribution, c.NUMBER, this.type), _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1), _radius: b.ensureTypedArg(a.position.radius, c.NUMBER, 10), _radiusScale: b.ensureInstanceOf(a.position.radiusScale, THREE.Vector3, new THREE.Vector3(1, 1, 1)), _distributionClamp: b.ensureTypedArg(a.position.distributionClamp, c.NUMBER, 0) }, this.velocity = { _value: b.ensureInstanceOf(a.velocity.value, THREE.Vector3, new THREE.Vector3()), _spread: b.ensureInstanceOf(a.velocity.spread, THREE.Vector3, new THREE.Vector3()), _distribution: b.ensureTypedArg(a.velocity.distribution, c.NUMBER, this.type), _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1)
	  }, this.acceleration = { _value: b.ensureInstanceOf(a.acceleration.value, THREE.Vector3, new THREE.Vector3()), _spread: b.ensureInstanceOf(a.acceleration.spread, THREE.Vector3, new THREE.Vector3()), _distribution: b.ensureTypedArg(a.acceleration.distribution, c.NUMBER, this.type), _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1) }, this.drag = { _value: b.ensureTypedArg(a.drag.value, c.NUMBER, 0), _spread: b.ensureTypedArg(a.drag.spread, c.NUMBER, 0), _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1) }, this.wiggle = { _value: b.ensureTypedArg(a.wiggle.value, c.NUMBER, 0), _spread: b.ensureTypedArg(a.wiggle.spread, c.NUMBER, 0) }, this.rotation = { _axis: b.ensureInstanceOf(a.rotation.axis, THREE.Vector3, new THREE.Vector3(0, 1, 0)), _axisSpread: b.ensureInstanceOf(a.rotation.axisSpread, THREE.Vector3, new THREE.Vector3()), _angle: b.ensureTypedArg(a.rotation.angle, c.NUMBER, 0), _angleSpread: b.ensureTypedArg(a.rotation.angleSpread, c.NUMBER, 0), _static: b.ensureTypedArg(a.rotation["static"], c.BOOLEAN, !1), _center: b.ensureInstanceOf(a.rotation.center, THREE.Vector3, this.position._value.clone()),
	    _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1) }, this.maxAge = { _value: b.ensureTypedArg(a.maxAge.value, c.NUMBER, 2), _spread: b.ensureTypedArg(a.maxAge.spread, c.NUMBER, 0) }, this.color = { _value: b.ensureArrayInstanceOf(a.color.value, THREE.Color, new THREE.Color()), _spread: b.ensureArrayInstanceOf(a.color.spread, THREE.Vector3, new THREE.Vector3()), _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1) }, this.opacity = { _value: b.ensureArrayTypedArg(a.opacity.value, c.NUMBER, 1), _spread: b.ensureArrayTypedArg(a.opacity.spread, c.NUMBER, 0), _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1) }, this.size = { _value: b.ensureArrayTypedArg(a.size.value, c.NUMBER, 1), _spread: b.ensureArrayTypedArg(a.size.spread, c.NUMBER, 0), _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1) }, this.angle = { _value: b.ensureArrayTypedArg(a.angle.value, c.NUMBER, 0), _spread: b.ensureArrayTypedArg(a.angle.spread, c.NUMBER, 0), _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1) }, this.particleCount = b.ensureTypedArg(a.particleCount, c.NUMBER, 100), this.duration = b.ensureTypedArg(a.duration, c.NUMBER, null), this.isStatic = b.ensureTypedArg(a.isStatic, c.BOOLEAN, !1), this.activeMultiplier = b.ensureTypedArg(a.activeMultiplier, c.NUMBER, 1), this.direction = b.ensureTypedArg(a.direction, c.NUMBER, 1), this.alive = b.ensureTypedArg(a.alive, c.BOOLEAN, !0), this.particlesPerSecond = 0, this.activationIndex = 0, this.attributeOffset = 0, this.attributeEnd = 0, this.age = 0, this.activeParticleCount = 0, this.group = null, this.attributes = null, this.paramsArray = null, this.resetFlags = { position: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1) || b.ensureTypedArg(a.radius.randomise, c.BOOLEAN, !1), velocity: b.ensureTypedArg(a.velocity.randomise, c.BOOLEAN, !1), acceleration: b.ensureTypedArg(a.acceleration.randomise, c.BOOLEAN, !1) || b.ensureTypedArg(a.drag.randomise, c.BOOLEAN, !1), rotation: b.ensureTypedArg(a.rotation.randomise, c.BOOLEAN, !1), rotationCenter: b.ensureTypedArg(a.rotation.randomise, c.BOOLEAN, !1), size: b.ensureTypedArg(a.size.randomise, c.BOOLEAN, !1), color: b.ensureTypedArg(a.color.randomise, c.BOOLEAN, !1),
	    opacity: b.ensureTypedArg(a.opacity.randomise, c.BOOLEAN, !1), angle: b.ensureTypedArg(a.angle.randomise, c.BOOLEAN, !1) }, this.updateFlags = {}, this.updateCounts = {}, this.updateMap = { maxAge: "params", position: "position", velocity: "velocity", acceleration: "acceleration", drag: "acceleration", wiggle: "params", rotation: "rotation", size: "size", color: "color", opacity: "opacity", angle: "angle" };for (var e in this.updateMap) {
	    this.updateMap.hasOwnProperty(e) && (this.updateCounts[this.updateMap[e]] = 0, this.updateFlags[this.updateMap[e]] = !1, this._createGetterSetters(this[e], e));
	  }this.bufferUpdateRanges = {}, this.attributeKeys = null, this.attributeCount = 0, b.ensureValueOverLifetimeCompliance(this.color, d, d), b.ensureValueOverLifetimeCompliance(this.opacity, d, d), b.ensureValueOverLifetimeCompliance(this.size, d, d), b.ensureValueOverLifetimeCompliance(this.angle, d, d);
	}, SPE.Emitter.constructor = SPE.Emitter, SPE.Emitter.prototype._createGetterSetters = function (a, b) {
	  "use strict";
	  var c = this;for (var d in a) {
	    if (a.hasOwnProperty(d)) {
	      var e = d.replace("_", "");
	      Object.defineProperty(a, e, { get: function (a) {
	          return function () {
	            return this[a];
	          };
	        }(d), set: function (a) {
	          return function (d) {
	            var e = c.updateMap[b],
	                f = this[a],
	                g = SPE.valueOverLifetimeLength;"_rotationCenter" === a ? (c.updateFlags.rotationCenter = !0, c.updateCounts.rotationCenter = 0) : "_randomise" === a ? c.resetFlags[e] = d : (c.updateFlags[e] = !0, c.updateCounts[e] = 0), c.group._updateDefines(), this[a] = d, Array.isArray(f) && SPE.utils.ensureValueOverLifetimeCompliance(c[b], g, g);
	          };
	        }(d) });
	    }
	  }
	}, SPE.Emitter.prototype._setBufferUpdateRanges = function (a) {
	  "use strict";
	  this.attributeKeys = a, this.attributeCount = a.length;for (var b = this.attributeCount - 1; b >= 0; --b) {
	    this.bufferUpdateRanges[a[b]] = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
	  }
	}, SPE.Emitter.prototype._calculatePPSValue = function (a) {
	  "use strict";
	  var b = this.particleCount;this.duration ? this.particlesPerSecond = b / (a < this.duration ? a : this.duration) : this.particlesPerSecond = b / a;
	}, SPE.Emitter.prototype._setAttributeOffset = function (a) {
	  this.attributeOffset = a, this.activationIndex = a, this.activationEnd = a + this.particleCount;
	}, SPE.Emitter.prototype._assignValue = function (a, b) {
	  "use strict";
	  switch (a) {case "position":
	      this._assignPositionValue(b);break;case "velocity":case "acceleration":
	      this._assignForceValue(b, a);break;case "size":case "opacity":
	      this._assignAbsLifetimeValue(b, a);break;case "angle":
	      this._assignAngleValue(b);break;case "params":
	      this._assignParamsValue(b);break;case "rotation":
	      this._assignRotationValue(b);break;case "color":
	      this._assignColorValue(b);}
	}, SPE.Emitter.prototype._assignPositionValue = function (a) {
	  "use strict";
	  var b = SPE.distributions,
	      c = SPE.utils,
	      d = this.position,
	      e = this.attributes.position,
	      f = d._value,
	      g = d._spread,
	      h = d._distribution;switch (h) {case b.BOX:
	      c.randomVector3(e, a, f, g, d._spreadClamp);break;case b.SPHERE:
	      c.randomVector3OnSphere(e, a, f, d._radius, d._spread.x, d._radiusScale, d._spreadClamp.x, d._distributionClamp || this.particleCount);break;case b.DISC:
	      c.randomVector3OnDisc(e, a, f, d._radius, d._spread.x, d._radiusScale, d._spreadClamp.x);}
	}, SPE.Emitter.prototype._assignForceValue = function (a, b) {
	  "use strict";
	  var c,
	      d,
	      e,
	      f,
	      g,
	      h = SPE.distributions,
	      i = SPE.utils,
	      j = this[b],
	      k = j._value,
	      l = j._spread,
	      m = j._distribution;switch (m) {case h.BOX:
	      i.randomVector3(this.attributes[b], a, k, l);break;case h.SPHERE:
	      c = this.attributes.position.typedArray.array, g = 3 * a, d = c[g], e = c[g + 1], f = c[g + 2], i.randomDirectionVector3OnSphere(this.attributes[b], a, d, e, f, this.position._value, j._value.x, j._spread.x);break;case h.DISC:
	      c = this.attributes.position.typedArray.array, g = 3 * a, d = c[g], e = c[g + 1], f = c[g + 2], i.randomDirectionVector3OnDisc(this.attributes[b], a, d, e, f, this.position._value, j._value.x, j._spread.x);}if ("acceleration" === b) {
	    var n = i.clamp(i.randomFloat(this.drag._value, this.drag._spread), 0, 1);this.attributes.acceleration.typedArray.array[4 * a + 3] = n;
	  }
	}, SPE.Emitter.prototype._assignAbsLifetimeValue = function (a, b) {
	  "use strict";
	  var c,
	      d = this.attributes[b].typedArray,
	      e = this[b],
	      f = SPE.utils;f.arrayValuesAreEqual(e._value) && f.arrayValuesAreEqual(e._spread) ? (c = Math.abs(f.randomFloat(e._value[0], e._spread[0])), d.setVec4Components(a, c, c, c, c)) : d.setVec4Components(a, Math.abs(f.randomFloat(e._value[0], e._spread[0])), Math.abs(f.randomFloat(e._value[1], e._spread[1])), Math.abs(f.randomFloat(e._value[2], e._spread[2])), Math.abs(f.randomFloat(e._value[3], e._spread[3])));
	}, SPE.Emitter.prototype._assignAngleValue = function (a) {
	  "use strict";
	  var b,
	      c = this.attributes.angle.typedArray,
	      d = this.angle,
	      e = SPE.utils;e.arrayValuesAreEqual(d._value) && e.arrayValuesAreEqual(d._spread) ? (b = e.randomFloat(d._value[0], d._spread[0]), c.setVec4Components(a, b, b, b, b)) : c.setVec4Components(a, e.randomFloat(d._value[0], d._spread[0]), e.randomFloat(d._value[1], d._spread[1]), e.randomFloat(d._value[2], d._spread[2]), e.randomFloat(d._value[3], d._spread[3]));
	}, SPE.Emitter.prototype._assignParamsValue = function (a) {
	  "use strict";
	  this.attributes.params.typedArray.setVec4Components(a, this.isStatic ? 1 : 0, 0, Math.abs(SPE.utils.randomFloat(this.maxAge._value, this.maxAge._spread)), SPE.utils.randomFloat(this.wiggle._value, this.wiggle._spread));
	}, SPE.Emitter.prototype._assignRotationValue = function (a) {
	  "use strict";
	  this.attributes.rotation.typedArray.setVec3Components(a, SPE.utils.getPackedRotationAxis(this.rotation._axis, this.rotation._axisSpread), SPE.utils.randomFloat(this.rotation._angle, this.rotation._angleSpread), this.rotation._static ? 0 : 1), this.attributes.rotationCenter.typedArray.setVec3(a, this.rotation._center);
	}, SPE.Emitter.prototype._assignColorValue = function (a) {
	  "use strict";
	  SPE.utils.randomColorAsHex(this.attributes.color, a, this.color._value, this.color._spread);
	}, SPE.Emitter.prototype._resetParticle = function (a) {
	  "use strict";
	  for (var b, c, d = this.resetFlags, e = this.updateFlags, f = this.updateCounts, g = this.attributeKeys, h = this.attributeCount - 1; h >= 0; --h) {
	    b = g[h], c = e[b], d[b] !== !0 && c !== !0 || (this._assignValue(b, a), this._updateAttributeUpdateRange(b, a), c === !0 && f[b] === this.particleCount ? (e[b] = !1, f[b] = 0) : 1 == c && ++f[b]);
	  }
	}, SPE.Emitter.prototype._updateAttributeUpdateRange = function (a, b) {
	  "use strict";
	  var c = this.bufferUpdateRanges[a];c.min = Math.min(b, c.min), c.max = Math.max(b, c.max);
	}, SPE.Emitter.prototype._resetBufferRanges = function () {
	  "use strict";
	  var a,
	      b = this.bufferUpdateRanges,
	      c = this.bufferUpdateKeys,
	      d = this.bufferUpdateCount - 1;for (d; d >= 0; --d) {
	    a = c[d], b[a].min = Number.POSITIVE_INFINITY, b[a].max = Number.NEGATIVE_INFINITY;
	  }
	}, SPE.Emitter.prototype._onRemove = function () {
	  "use strict";
	  this.particlesPerSecond = 0, this.attributeOffset = 0, this.activationIndex = 0, this.activeParticleCount = 0, this.group = null, this.attributes = null, this.paramsArray = null, this.age = 0;
	}, SPE.Emitter.prototype._decrementParticleCount = function () {
	  "use strict";
	  --this.activeParticleCount;
	}, SPE.Emitter.prototype._incrementParticleCount = function () {
	  "use strict";
	  ++this.activeParticleCount;
	}, SPE.Emitter.prototype._checkParticleAges = function (a, b, c, d) {
	  "use strict";
	  for (var e, f, g, h, i = b - 1; i >= a; --i) {
	    e = 4 * i, h = c[e], 0 !== h && (g = c[e + 1], f = c[e + 2], 1 === this.direction ? (g += d, g >= f && (g = 0, h = 0, this._decrementParticleCount())) : (g -= d, 0 >= g && (g = f, h = 0, this._decrementParticleCount())), c[e] = h, c[e + 1] = g, this._updateAttributeUpdateRange("params", i));
	  }
	}, SPE.Emitter.prototype._activateParticles = function (a, b, c, d) {
	  "use strict";
	  for (var e, f, g = this.direction, h = a; b > h; ++h) {
	    e = 4 * h, 0 != c[e] && 1 !== this.particleCount || (this._incrementParticleCount(), c[e] = 1, this._resetParticle(h), f = d * (h - a), c[e + 1] = -1 === g ? c[e + 2] - f : f, this._updateAttributeUpdateRange("params", h));
	  }
	}, SPE.Emitter.prototype.tick = function (a) {
	  "use strict";
	  if (!this.isStatic) {
	    null === this.paramsArray && (this.paramsArray = this.attributes.params.typedArray.array);var b = this.attributeOffset,
	        c = b + this.particleCount,
	        d = this.paramsArray,
	        e = this.particlesPerSecond * this.activeMultiplier * a,
	        f = this.activationIndex;if (this._resetBufferRanges(), this._checkParticleAges(b, c, d, a), this.alive === !1) return void (this.age = 0);if (null !== this.duration && this.age > this.duration) return this.alive = !1, void (this.age = 0);var g = 1 === this.particleCount ? f : 0 | f,
	        h = Math.min(g + e, this.activationEnd),
	        i = h - this.activationIndex | 0,
	        j = i > 0 ? a / i : 0;this._activateParticles(g, h, d, j), this.activationIndex += e, this.activationIndex > c && (this.activationIndex = b), this.age += a;
	  }
	}, SPE.Emitter.prototype.reset = function (a) {
	  "use strict";
	  if (this.age = 0, this.alive = !1, a === !0) {
	    for (var b, c = this.attributeOffset, d = c + this.particleCount, e = this.paramsArray, f = this.attributes.params.bufferAttribute, g = d - 1; g >= c; --g) {
	      b = 4 * g, e[b] = 0, e[b + 1] = 0;
	    }f.updateRange.offset = 0, f.updateRange.count = -1, f.needsUpdate = !0;
	  }return this;
	}, SPE.Emitter.prototype.enable = function () {
	  "use strict";
	  return this.alive = !0, this;
	}, SPE.Emitter.prototype.disable = function () {
	  "use strict";
	  return this.alive = !1, this;
	}, SPE.Emitter.prototype.remove = function () {
	  "use strict";
	  return null !== this.group ? this.group.removeEmitter(this) : console.error("Emitter does not belong to a group, cannot remove."), this;
	};


/***/ },

/***/ 12:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    uniforms: {
	        tDiffuse1: { type: 't', value: null },
	        tDiffuse2: { type: 't', value: null }
	    },

	    vertexShader: '\n        varying vec2 vUv;\n\n        void main() {\n            vUv = uv;\n            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n        }\n    ',

	    fragmentShader: '\n        uniform sampler2D tDiffuse1;\n        uniform sampler2D tDiffuse2;\n\n        varying vec2 vUv;\n\n        void main() {\n            vec4 texel1 = texture2D(tDiffuse1, vUv);\n            vec4 texel2 = texture2D(tDiffuse2, vUv);\n            gl_FragColor = texel1 + texel2;\n        }\n    '
	};

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var THREE = __webpack_require__(3);

	exports.default = {
	    uniforms: {
	        opacity: { type: 'f', value: 1.0 },
	        mul: { type: 'f', value: 1.0 }
	    },
	    vertexShader: '\n        attribute vec3 customColor;\n\n        varying vec3 vColor;\n        \n        void main() {\n            vColor = customColor;\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        }\n    ',
	    fragmentShader: '\n        uniform float opacity;\n        uniform float mul;\n        \n        varying vec3 vColor;\n        \n        void main() {\n            gl_FragColor = vec4(vColor * mul, opacity);\n        }\n    ',
	    transparent: true,
	    side: THREE.DoubleSide
	};

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var THREE = __webpack_require__(3);

	exports.default = {
	    uniforms: {
	        time: { type: 'f', value: 0.0 },
	        wave_strength: { type: 'f', value: 0.0 },
	        wave_direction: { type: 'v3', value: new THREE.Vector3(1, 1, 1) }
	    },
	    vertexShader: '\n        uniform float time;\n        uniform float wave_strength;\n        uniform vec3 wave_direction;\n\n        attribute vec3 customColor;\n        attribute float wave;\n        \n        varying vec3 vColor;\n\n        void main() {\n            const float scale = 5.0;\n            \n            vColor = customColor;\n            \n            float w = sin(time * 2.0) * wave * scale * wave_strength;\n            vec3 p =  position + vec3(w * wave_direction.x, 0, w * wave_direction.z);\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);\n        }\n    ',
	    fragmentShader: '\n        varying vec3 vColor;\n        \n        void main() {\n            gl_FragColor = vec4(vColor, 1.0);\n        }\n    ',
	    transparent: true,
	    side: THREE.DoubleSide
	};

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fillData = exports.createGeometry = undefined;

	var _three = __webpack_require__(3);

	var _three2 = _interopRequireDefault(_three);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createGeometry = exports.createGeometry = function createGeometry(index, topSize, bottomSize, y, height, sides, position) {
	    for (var i = 0; i < sides; ++i) {
	        var start = Math.PI * 2.0 / sides * i;
	        var end = Math.PI * 2.0 / sides * (i + 1);

	        new _three2.default.Vector3(Math.cos(end) * topSize, y + height, Math.sin(end) * topSize).toArray(position.array, index);
	        index += 3;

	        new _three2.default.Vector3(Math.cos(start) * topSize, y + height, Math.sin(start) * topSize).toArray(position.array, index);
	        index += 3;

	        new _three2.default.Vector3(Math.cos(start) * bottomSize, y, Math.sin(start) * bottomSize).toArray(position.array, index);
	        index += 3;

	        new _three2.default.Vector3(Math.cos(start) * bottomSize, y, Math.sin(start) * bottomSize).toArray(position.array, index);
	        index += 3;

	        new _three2.default.Vector3(Math.cos(end) * bottomSize, y, Math.sin(end) * bottomSize).toArray(position.array, index);
	        index += 3;

	        new _three2.default.Vector3(Math.cos(end) * topSize, y + height, Math.sin(end) * topSize).toArray(position.array, index);
	        index += 3;
	    }
	    return index;
	};

	var simpleCopy = function simpleCopy(element, array, index) {
	    return array[index] = element;
	};

	var vectorCopy = function vectorCopy(element, array, index) {
	    return element.toArray(array, index);
	};

	var fillData = exports.fillData = function fillData(index, sides, topColor, bottomColor, customColor) {
	    var elementSize = customColor.itemSize;
	    var copy = elementSize === 1 ? simpleCopy : vectorCopy;

	    for (var i = 0; i < sides; ++i) {
	        copy(bottomColor, customColor.array, index);
	        index += elementSize;

	        copy(bottomColor, customColor.array, index);
	        index += elementSize;

	        copy(topColor, customColor.array, index);
	        index += elementSize;

	        copy(topColor, customColor.array, index);
	        index += elementSize;

	        copy(topColor, customColor.array, index);
	        index += elementSize;

	        copy(bottomColor, customColor.array, index);
	        index += elementSize;
	    }
	    return index;
	};

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @author qiao / https://github.com/qiao
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @author mrdoob / http://mrdoob.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @author alteredq / http://alteredqualia.com/
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @author WestLangley / http://github.com/WestLangley
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @author erich666 / http://erichaines.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

	// This set of controls performs orbiting, dollying (zooming), and panning.
	// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
	//
	//    Orbit - left mouse / touch: one finger move
	//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
	//    Pan - right mouse, or arrow keys / touch: three finter swipe


	var _three = __webpack_require__(3);

	var _three2 = _interopRequireDefault(_three);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_three2.default.OrbitControls = function (object, domElement) {

	    this.object = object;

	    this.domElement = domElement !== undefined ? domElement : document;

	    // Set to false to disable this control
	    this.enabled = true;

	    // "target" sets the location of focus, where the object orbits around
	    this.target = new _three2.default.Vector3();

	    // How far you can dolly in and out ( PerspectiveCamera only )
	    this.minDistance = 0;
	    this.maxDistance = Infinity;

	    // How far you can zoom in and out ( OrthographicCamera only )
	    this.minZoom = 0;
	    this.maxZoom = Infinity;

	    // How far you can orbit vertically, upper and lower limits.
	    // Range is 0 to Math.PI radians.
	    this.minPolarAngle = 0; // radians
	    this.maxPolarAngle = Math.PI; // radians

	    // How far you can orbit horizontally, upper and lower limits.
	    // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
	    this.minAzimuthAngle = -Infinity; // radians
	    this.maxAzimuthAngle = Infinity; // radians

	    // Set to true to enable damping (inertia)
	    // If damping is enabled, you must call controls.update() in your animation loop
	    this.enableDamping = false;
	    this.dampingFactor = 0.25;

	    // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
	    // Set to false to disable zooming
	    this.enableZoom = true;
	    this.zoomSpeed = 1.0;

	    // Set to false to disable rotating
	    this.enableRotate = true;
	    this.rotateSpeed = 1.0;

	    // Set to false to disable panning
	    this.enablePan = true;
	    this.keyPanSpeed = 7.0; // pixels moved per arrow key push

	    // Set to true to automatically rotate around the target
	    // If auto-rotate is enabled, you must call controls.update() in your animation loop
	    this.autoRotate = false;
	    this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	    // Make touch rotation less sensitive
	    this.touchRotateScale = 0.15;

	    // Make touch zoom less sensitive
	    this.touchDollyScale = 0.15;

	    // Set to false to disable use of the keys
	    this.enableKeys = true;

	    // The four arrow keys
	    this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	    // Mouse buttons
	    this.mouseButtons = { ORBIT: _three2.default.MOUSE.RIGHT, ZOOM: null, PAN: _three2.default.MOUSE.MIDDLE };

	    // for reset
	    this.target0 = this.target.clone();
	    this.position0 = this.object.position.clone();
	    this.zoom0 = this.object.zoom;

	    //
	    // public methods
	    //

	    this.getPolarAngle = function () {

	        return phi;
	    };

	    this.getAzimuthalAngle = function () {

	        return theta;
	    };

	    this.reset = function () {

	        scope.target.copy(scope.target0);
	        scope.object.position.copy(scope.position0);
	        scope.object.zoom = scope.zoom0;

	        scope.object.updateProjectionMatrix();
	        scope.dispatchEvent(changeEvent);

	        scope.update();

	        state = STATE.NONE;
	    };

	    // this method is exposed, but perhaps it would be better if we can make it private...
	    this.update = function () {

	        var offset = new _three2.default.Vector3();

	        // so camera.up is the orbit axis
	        var quat = new _three2.default.Quaternion().setFromUnitVectors(object.up, new _three2.default.Vector3(0, 1, 0));
	        var quatInverse = quat.clone().inverse();

	        var lastPosition = new _three2.default.Vector3();
	        var lastQuaternion = new _three2.default.Quaternion();

	        return function () {

	            var position = scope.object.position;

	            offset.copy(position).sub(scope.target);

	            // rotate offset to "y-axis-is-up" space
	            offset.applyQuaternion(quat);

	            // angle from z-axis around y-axis
	            spherical.setFromVector3(offset);

	            if (scope.autoRotate && state === STATE.NONE) {

	                rotateLeft(getAutoRotationAngle());
	            }

	            spherical.theta += sphericalDelta.theta;
	            spherical.phi += sphericalDelta.phi;

	            // restrict theta to be between desired limits
	            spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));

	            // restrict phi to be between desired limits
	            spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));

	            spherical.makeSafe();

	            spherical.radius *= scale;

	            // restrict radius to be between desired limits
	            spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));

	            // move target to panned location
	            scope.target.add(panOffset);

	            offset.setFromSpherical(spherical);

	            // rotate offset back to "camera-up-vector-is-up" space
	            offset.applyQuaternion(quatInverse);

	            position.copy(scope.target).add(offset);

	            scope.object.lookAt(scope.target);

	            if (scope.enableDamping === true) {

	                sphericalDelta.theta *= 1 - scope.dampingFactor;
	                sphericalDelta.phi *= 1 - scope.dampingFactor;
	            } else {

	                sphericalDelta.set(0, 0, 0);
	            }

	            scale = 1;
	            panOffset.set(0, 0, 0);

	            // update condition is:
	            // min(camera displacement, camera rotation in radians)^2 > EPS
	            // using small-angle approximation cos(x/2) = 1 - x^2 / 8

	            if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {

	                scope.dispatchEvent(changeEvent);

	                lastPosition.copy(scope.object.position);
	                lastQuaternion.copy(scope.object.quaternion);
	                zoomChanged = false;

	                return true;
	            }

	            return false;
	        };
	    }();

	    this.dispose = function () {

	        scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
	        scope.domElement.removeEventListener('mousedown', onMouseDown, false);
	        scope.domElement.removeEventListener('mousewheel', onMouseWheel, false);
	        scope.domElement.removeEventListener('MozMousePixelScroll', onMouseWheel, false); // firefox

	        scope.domElement.removeEventListener('touchstart', onTouchStart, false);
	        scope.domElement.removeEventListener('touchend', onTouchEnd, false);
	        scope.domElement.removeEventListener('touchmove', onTouchMove, false);

	        document.removeEventListener('mousemove', onMouseMove, false);
	        document.removeEventListener('mouseup', onMouseUp, false);
	        document.removeEventListener('mouseout', onMouseUp, false);

	        window.removeEventListener('keydown', onKeyDown, false);

	        //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
	    };

	    //
	    // internals
	    //

	    var scope = this;

	    var changeEvent = { type: 'change' };
	    var startEvent = { type: 'start' };
	    var endEvent = { type: 'end' };

	    var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

	    var state = STATE.NONE;

	    var EPS = 0.000001;

	    // current position in spherical coordinates
	    var spherical = new _three2.default.Spherical();
	    var sphericalDelta = new _three2.default.Spherical();

	    var scale = 1;
	    var panOffset = new _three2.default.Vector3();
	    var zoomChanged = false;

	    var rotateStart = new _three2.default.Vector2();
	    var rotateEnd = new _three2.default.Vector2();
	    var rotateDelta = new _three2.default.Vector2();

	    var panStart = new _three2.default.Vector2();
	    var panEnd = new _three2.default.Vector2();
	    var panDelta = new _three2.default.Vector2();

	    var dollyStart = new _three2.default.Vector2();
	    var dollyEnd = new _three2.default.Vector2();
	    var dollyDelta = new _three2.default.Vector2();

	    function getAutoRotationAngle() {

	        return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
	    }

	    function getZoomScale() {

	        return Math.pow(0.95, scope.zoomSpeed);
	    }

	    function rotateLeft(angle) {

	        sphericalDelta.theta -= angle;
	    }

	    function rotateUp(angle) {

	        sphericalDelta.phi -= angle;
	    }

	    var panLeft = function () {

	        var v = new _three2.default.Vector3();

	        return function panLeft(distance, objectMatrix) {

	            v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
	            v.multiplyScalar(-distance);

	            panOffset.add(v);
	        };
	    }();

	    var panUp = function () {

	        var v = new _three2.default.Vector3();

	        return function panUp(distance, objectMatrix) {

	            v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
	            v.multiplyScalar(distance);

	            panOffset.add(v);
	        };
	    }();

	    // deltaX and deltaY are in pixels; right and down are positive
	    var pan = function () {

	        var offset = new _three2.default.Vector3();

	        return function (deltaX, deltaY) {

	            var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

	            if (scope.object instanceof _three2.default.PerspectiveCamera) {

	                // perspective
	                var position = scope.object.position;
	                offset.copy(position).sub(scope.target);
	                var targetDistance = offset.length();

	                // half of the fov is center to top of screen
	                targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);

	                // we actually don't use screenWidth, since perspective camera is fixed to screen height
	                panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
	                panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
	            } else if (scope.object instanceof _three2.default.OrthographicCamera) {

	                // orthographic
	                panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
	                panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
	            } else {

	                // camera neither orthographic nor perspective
	                console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
	                scope.enablePan = false;
	            }
	        };
	    }();

	    function dollyIn(dollyScale) {

	        if (scope.object instanceof _three2.default.PerspectiveCamera) {

	            scale /= dollyScale;
	        } else if (scope.object instanceof _three2.default.OrthographicCamera) {

	            scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
	            scope.object.updateProjectionMatrix();
	            zoomChanged = true;
	        } else {

	            console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
	            scope.enableZoom = false;
	        }
	    }

	    function dollyOut(dollyScale) {

	        if (scope.object instanceof _three2.default.PerspectiveCamera) {

	            scale *= dollyScale;
	        } else if (scope.object instanceof _three2.default.OrthographicCamera) {

	            scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
	            scope.object.updateProjectionMatrix();
	            zoomChanged = true;
	        } else {

	            console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
	            scope.enableZoom = false;
	        }
	    }

	    //
	    // event callbacks - update the object state
	    //

	    function handleMouseDownRotate(event) {

	        //console.log( 'handleMouseDownRotate' );

	        rotateStart.set(event.clientX, event.clientY);
	    }

	    function handleMouseDownDolly(event) {

	        //console.log( 'handleMouseDownDolly' );

	        dollyStart.set(event.clientX, event.clientY);
	    }

	    function handleMouseDownPan(event) {

	        //console.log( 'handleMouseDownPan' );

	        panStart.set(event.clientX, event.clientY);
	    }

	    function handleMouseMoveRotate(event) {

	        //console.log( 'handleMouseMoveRotate' );

	        rotateEnd.set(event.clientX, event.clientY);
	        rotateDelta.subVectors(rotateEnd, rotateStart);

	        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

	        // rotating across whole screen goes 360 degrees around
	        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

	        // rotating up and down along whole screen attempts to go 360, but limited to 180
	        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

	        rotateStart.copy(rotateEnd);

	        scope.update();
	    }

	    function handleMouseMoveDolly(event) {

	        //console.log( 'handleMouseMoveDolly' );

	        dollyEnd.set(event.clientX, event.clientY);

	        dollyDelta.subVectors(dollyEnd, dollyStart);

	        if (dollyDelta.y > 0) {

	            dollyIn(getZoomScale());
	        } else if (dollyDelta.y < 0) {

	            dollyOut(getZoomScale());
	        }

	        dollyStart.copy(dollyEnd);

	        scope.update();
	    }

	    function handleMouseMovePan(event) {

	        //console.log( 'handleMouseMovePan' );

	        panEnd.set(event.clientX, event.clientY);

	        panDelta.subVectors(panEnd, panStart);

	        pan(panDelta.x, panDelta.y);

	        panStart.copy(panEnd);

	        scope.update();
	    }

	    function handleMouseUp(event) {

	        //console.log( 'handleMouseUp' );

	    }

	    function handleMouseWheel(event) {

	        //console.log( 'handleMouseWheel' );

	        var delta = 0;

	        if (event.wheelDelta !== undefined) {

	            // WebKit / Opera / Explorer 9

	            delta = event.wheelDelta;
	        } else if (event.detail !== undefined) {

	            // Firefox

	            delta = -event.detail;
	        }

	        if (delta > 0) {

	            dollyOut(getZoomScale());
	        } else if (delta < 0) {

	            dollyIn(getZoomScale());
	        }

	        scope.update();
	    }

	    function handleKeyDown(event) {

	        //console.log( 'handleKeyDown' );

	        switch (event.keyCode) {

	            case scope.keys.UP:
	                pan(0, scope.keyPanSpeed);
	                scope.update();
	                break;

	            case scope.keys.BOTTOM:
	                pan(0, -scope.keyPanSpeed);
	                scope.update();
	                break;

	            case scope.keys.LEFT:
	                pan(scope.keyPanSpeed, 0);
	                scope.update();
	                break;

	            case scope.keys.RIGHT:
	                pan(-scope.keyPanSpeed, 0);
	                scope.update();
	                break;

	        }
	    }

	    var avgTouches = function avgTouches(event) {
	        var avgX = 0;
	        var avgY = 0;

	        [].forEach.call(event.touches, function (touch) {
	            avgX += touch.pageX;
	            avgY += touch.pageY;
	        });
	        avgX /= event.touches.length;
	        avgY /= event.touches.length;
	        return [avgX, avgY];
	    };

	    function handleTouchStartRotate(event) {
	        var _avgTouches = avgTouches(event);

	        var _avgTouches2 = _slicedToArray(_avgTouches, 2);

	        var avgX = _avgTouches2[0];
	        var avgY = _avgTouches2[1];

	        rotateStart.set(avgX, avgY);
	    }

	    function handleTouchStartDolly(event) {

	        //console.log( 'handleTouchStartDolly' );

	        var dx = event.touches[0].pageX - event.touches[1].pageX;
	        var dy = event.touches[0].pageY - event.touches[1].pageY;

	        var distance = Math.sqrt(dx * dx + dy * dy);

	        dollyStart.set(0, distance);
	    }

	    function handleTouchStartPan(event) {

	        //console.log( 'handleTouchStartPan' );

	        panStart.set(event.touches[0].pageX, event.touches[0].pageY);
	    }

	    function handleTouchMoveRotate(scaling, event) {
	        var _avgTouches3 = avgTouches(event);

	        var _avgTouches4 = _slicedToArray(_avgTouches3, 2);

	        var avgX = _avgTouches4[0];
	        var avgY = _avgTouches4[1];


	        rotateEnd.set(avgX, avgY);
	        rotateDelta.subVectors(rotateEnd, rotateStart);
	        rotateDelta.multiplyScalar(scaling);

	        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

	        // rotating across whole screen goes 360 degrees around
	        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

	        // rotating up and down along whole screen attempts to go 360, but limited to 180
	        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

	        rotateStart.copy(rotateEnd);

	        scope.update();
	    }

	    function handleTouchMoveDolly(scaling, event) {

	        //console.log( 'handleTouchMoveDolly' );

	        var dx = event.touches[0].pageX - event.touches[1].pageX;
	        var dy = event.touches[0].pageY - event.touches[1].pageY;

	        var distance = Math.sqrt(dx * dx + dy * dy);

	        dollyEnd.set(0, distance);

	        dollyDelta.subVectors(dollyEnd, dollyStart);
	        dollyDelta.multiplyScalar(scaling);

	        if (dollyDelta.y > 0) {

	            dollyOut(getZoomScale());
	        } else if (dollyDelta.y < 0) {

	            dollyIn(getZoomScale());
	        }

	        dollyStart.copy(dollyEnd);

	        scope.update();
	    }

	    function handleTouchMovePan(event) {

	        //console.log( 'handleTouchMovePan' );

	        panEnd.set(event.touches[0].pageX, event.touches[0].pageY);

	        panDelta.subVectors(panEnd, panStart);

	        pan(panDelta.x, panDelta.y);

	        panStart.copy(panEnd);

	        scope.update();
	    }

	    function handleTouchEnd(event) {}

	    //console.log( 'handleTouchEnd' );

	    //
	    // event handlers - FSM: listen for events and reset state
	    //

	    function onMouseDown(event) {

	        if (scope.enabled === false) return;

	        //event.preventDefault();

	        if (event.button === scope.mouseButtons.ORBIT) {

	            if (scope.enableRotate === false) return;

	            handleMouseDownRotate(event);

	            state = STATE.ROTATE;
	        } else if (event.button === scope.mouseButtons.ZOOM) {

	            if (scope.enableZoom === false) return;

	            handleMouseDownDolly(event);

	            state = STATE.DOLLY;
	        } else if (event.button === scope.mouseButtons.PAN) {

	            if (scope.enablePan === false) return;

	            handleMouseDownPan(event);

	            state = STATE.PAN;
	        }

	        if (state !== STATE.NONE) {

	            document.addEventListener('mousemove', onMouseMove, false);
	            document.addEventListener('mouseup', onMouseUp, false);
	            document.addEventListener('mouseout', onMouseUp, false);

	            scope.dispatchEvent(startEvent);
	        }
	    }

	    function onMouseMove(event) {

	        if (scope.enabled === false) return;

	        event.preventDefault();

	        if (state === STATE.ROTATE) {

	            if (scope.enableRotate === false) return;

	            handleMouseMoveRotate(event);
	        } else if (state === STATE.DOLLY) {

	            if (scope.enableZoom === false) return;

	            handleMouseMoveDolly(event);
	        } else if (state === STATE.PAN) {

	            if (scope.enablePan === false) return;

	            handleMouseMovePan(event);
	        }
	    }

	    function onMouseUp(event) {

	        if (scope.enabled === false) return;

	        handleMouseUp(event);

	        document.removeEventListener('mousemove', onMouseMove, false);
	        document.removeEventListener('mouseup', onMouseUp, false);
	        document.removeEventListener('mouseout', onMouseUp, false);

	        scope.dispatchEvent(endEvent);

	        state = STATE.NONE;
	    }

	    function onMouseWheel(event) {

	        if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE) return;

	        event.preventDefault();
	        event.stopPropagation();

	        handleMouseWheel(event);

	        scope.dispatchEvent(startEvent); // not sure why these are here...
	        scope.dispatchEvent(endEvent);
	    }

	    function onKeyDown(event) {

	        if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;

	        handleKeyDown(event);
	    }

	    function onTouchStart(event) {

	        if (scope.enabled === false) return;

	        switch (event.touches.length) {
	            case 2:
	                // two-fingered touch: dolly + rotate
	                if (scope.enableZoom) handleTouchStartDolly(event);

	                if (scope.enableRotate) handleTouchStartRotate(event);

	                state = STATE.TOUCH_DOLLY;

	                break;

	            case 3:
	                // three-fingered touch: pan

	                if (scope.enablePan === false) return;

	                handleTouchStartPan(event);

	                state = STATE.TOUCH_PAN;

	                break;

	            default:

	                state = STATE.NONE;

	        }

	        if (state !== STATE.NONE) {

	            scope.dispatchEvent(startEvent);
	        }
	    }

	    function onTouchMove(event) {
	        if (scope.enabled === false) return;

	        switch (event.touches.length) {
	            case 2:
	                // two-fingered touch: dolly + rotate
	                event.preventDefault();
	                event.stopPropagation();
	                if (scope.enableZoom) handleTouchMoveDolly(scope.touchDollyScale, event);

	                if (scope.enableRotate) handleTouchMoveRotate(scope.touchRotateScale, event);

	                break;

	            case 3:
	                // three-fingered touch: pan
	                event.preventDefault();
	                event.stopPropagation();

	                if (scope.enablePan === false) return;
	                if (state !== STATE.TOUCH_PAN) return; // is this needed?...

	                handleTouchMovePan(event);

	                break;

	            default:

	                state = STATE.NONE;

	        }
	    }

	    function onTouchEnd(event) {

	        if (scope.enabled === false) return;

	        handleTouchEnd(event);

	        scope.dispatchEvent(endEvent);

	        state = STATE.NONE;
	    }

	    function onContextMenu(event) {

	        event.preventDefault();
	    }

	    //

	    scope.domElement.addEventListener('contextmenu', onContextMenu, false);

	    scope.domElement.addEventListener('mousedown', onMouseDown, false);
	    scope.domElement.addEventListener('mousewheel', onMouseWheel, false);
	    scope.domElement.addEventListener('MozMousePixelScroll', onMouseWheel, false); // firefox

	    scope.domElement.addEventListener('touchstart', onTouchStart, false);
	    scope.domElement.addEventListener('touchend', onTouchEnd, false);
	    scope.domElement.addEventListener('touchmove', onTouchMove, false);

	    window.addEventListener('keydown', onKeyDown, false);

	    // force an update at start

	    this.update();
	};

	_three2.default.OrbitControls.prototype = Object.create(_three2.default.EventDispatcher.prototype);
	_three2.default.OrbitControls.prototype.constructor = _three2.default.OrbitControls;

	Object.defineProperties(_three2.default.OrbitControls.prototype, {

	    center: {

	        get: function get() {

	            console.warn('THREE.OrbitControls: .center has been renamed to .target');
	            return this.target;
	        }

	    },

	    // backward compatibility

	    noZoom: {

	        get: function get() {

	            console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
	            return !this.enableZoom;
	        },

	        set: function set(value) {

	            console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
	            this.enableZoom = !value;
	        }

	    },

	    noRotate: {

	        get: function get() {

	            console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
	            return !this.enableRotate;
	        },

	        set: function set(value) {

	            console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
	            this.enableRotate = !value;
	        }

	    },

	    noPan: {

	        get: function get() {

	            console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
	            return !this.enablePan;
	        },

	        set: function set(value) {

	            console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
	            this.enablePan = !value;
	        }

	    },

	    noKeys: {

	        get: function get() {

	            console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
	            return !this.enableKeys;
	        },

	        set: function set(value) {

	            console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
	            this.enableKeys = !value;
	        }

	    },

	    staticMoving: {

	        get: function get() {

	            console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
	            return !this.constraint.enableDamping;
	        },

	        set: function set(value) {

	            console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
	            this.constraint.enableDamping = !value;
	        }

	    },

	    dynamicDampingFactor: {

	        get: function get() {

	            console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
	            return this.constraint.dampingFactor;
	        },

	        set: function set(value) {

	            console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
	            this.constraint.dampingFactor = value;
	        }

	    }

	});

	exports.default = _three2.default.OrbitControls;

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var instance = void 0;

	var normalizeWeaponName = function normalizeWeaponName(name) {
	    return name.replace(/\s/g, '-').toLowerCase();
	};

	/**
	 * Map of weapon ids to weapon metadata.
	 */

	var WeaponsTable = function () {
	    function WeaponsTable() {
	        _classCallCheck(this, WeaponsTable);

	        var weaponsData = __webpack_require__(18);

	        this._data = weaponsData.reduce(function (map, data) {
	            map.set(+data.id, Object.assign({}, data, {
	                name: normalizeWeaponName(data.name),
	                displayName: data.name
	            }));
	            return map;
	        }, new Map());
	    }

	    _createClass(WeaponsTable, [{
	        key: 'get',
	        value: function get(id) {
	            return this._data.get(+id);
	        }
	    }]);

	    return WeaponsTable;
	}();

	/**
	 * Get an instance of the weapons table that maps weapon id to weapon data.
	 */


	var getWeaponsTable = exports.getWeaponsTable = function getWeaponsTable() {
	    instance = instance || new WeaponsTable();
	    return instance;
	};

/***/ },

/***/ 18:
/***/ function(module, exports) {

	module.exports = [
		{
			"name": "Flagnum",
			"description": null,
			"type": "Standard",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/flagnum-282503fb5260409a844e29eeae45bbca.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fflagnum-282503fb5260409a844e29eeae45bbca.png&width=332&hash=376WQLPQ8ra7Xbij6jhSp6avT3QG3ccjBS%2fKVFs4Efw%3d",
			"isUsableByPlayer": true,
			"id": "2244200496",
			"contentId": "cc556937-465f-4286-a989-e4ac28e6988b"
		},
		{
			"name": "Spartan",
			"description": null,
			"type": "Unknown",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/spartan-7d33bbefeee740f8a43e3e081a5b7aea.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fspartan-7d33bbefeee740f8a43e3e081a5b7aea.png&width=332&hash=dwLka%2fmOgqyoZhE4czunU6Awgo3XClrV1M%2bWFof83rE%3d",
			"isUsableByPlayer": false,
			"id": "3168248199",
			"contentId": "447b227e-18eb-4060-904a-1cf709638958"
		},
		{
			"name": "SHADE AA TURRET",
			"description": "Shade AA Turret deployable for campaign and warzone",
			"type": "Turret",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/shade-plasma-turret-type2-43a3e7bd5506473d8b21db5529132500.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fshade-plasma-turret-type2-43a3e7bd5506473d8b21db5529132500.png&width=332&hash=DMp8f6sqvTQQdtdrMktKI8osrwk9VUAwO21qfUV7dtc%3d",
			"isUsableByPlayer": true,
			"id": "2989142719",
			"contentId": "0a98a07c-51df-44b8-9359-982458bff2ae"
		},
		{
			"name": "SHADE PLASMA TURRET",
			"description": "Shade Plasma Turret deployable for campaign and warzone",
			"type": "Turret",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/shade-plasma-turret-a46b99d2048c46f18511568c722ad301.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fshade-plasma-turret-a46b99d2048c46f18511568c722ad301.png&width=332&hash=yReKqrjSq2RAGw6N3L4r27Ch0MXbKCaAfgZ5c%2bQTg0w%3d",
			"isUsableByPlayer": true,
			"id": "698769165",
			"contentId": "8d6b0d58-f536-4685-b19c-0bbe6bd7fc96"
		},
		{
			"name": "Environmental Explosives",
			"description": null,
			"type": "Unknown",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/explosives/explosives-040c30c3a5f3402abfb616e7d18c2395.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fexplosives%2fexplosives-040c30c3a5f3402abfb616e7d18c2395.png&width=332&hash=tv3HlwTBv5ChH2KebQAHYTNmOo7ADIksqKIhIu6W13M%3d",
			"isUsableByPlayer": true,
			"id": "47178948",
			"contentId": "fd412929-4a3f-49c0-b392-5521012f33fc"
		},
		{
			"name": "Gauss Turret",
			"description": "Precision anti-tank coilgun.",
			"type": "Turret",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/gauss-turret-5f9a751679634bce91a77bf95c7e2d67.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fgauss-turret-5f9a751679634bce91a77bf95c7e2d67.png&width=332&hash=ty4y%2f1sEuT8eMQwX6cVXuZ3KL9bAHaf1A0LPabuLpzE%3d",
			"isUsableByPlayer": true,
			"id": "4233134183",
			"contentId": "cfa92e74-82be-4b25-a0cd-4f7a97f2bf8c"
		},
		{
			"name": "ROCKET POD TURRET",
			"description": "Multirole missile launcher.",
			"type": "Turret",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/missile-rocket-turret-12e04f30fdbf4dc2b9a1f37a907f5234.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fmissile-rocket-turret-12e04f30fdbf4dc2b9a1f37a907f5234.png&width=332&hash=EuZSiblHWcj3CRx3LzuVo1Fw2jq9HnCS6NOTBPNYkgQ%3d",
			"isUsableByPlayer": true,
			"id": "2907783784",
			"contentId": "ec137dd1-82d1-4ef4-809a-f838420416c1"
		},
		{
			"name": "Chaingun Turret",
			"description": "Rotary autocannon.",
			"type": "Turret",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/chaingun-turret-0cbad9f5d3a74313adba3d6faf43592e.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fchaingun-turret-0cbad9f5d3a74313adba3d6faf43592e.png&width=332&hash=P70p8qnHLXmbuf7tPzofDzeiIXYThkFjMB74JqyD0vk%3d",
			"isUsableByPlayer": true,
			"id": "2988661926",
			"contentId": "fc78a02f-5f48-4134-a5a8-a92e34d9142d"
		},
		{
			"name": "Incineration Cannon",
			"description": "Heavy cannon that fires a powerful energy charge. Main charge spawns submunitions on impact.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/incineration-cannon-2caa0e0e074543c79c9ff8d0fe289752.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fincineration-cannon-2caa0e0e074543c79c9ff8d0fe289752.png&width=332&hash=8T1ASpOwRZxeUIlLWGn39KDYwvUNVEYdvHRpe1w%2blVw%3d",
			"isUsableByPlayer": true,
			"id": "4086418184",
			"contentId": "f26f8097-a383-4038-ba31-70de7b994c73"
		},
		{
			"name": "Splinter Turret",
			"description": "Fires hardlight projectiles that break apart and detonate after impact.",
			"type": "Turret",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/splinter-turret-6a1cad04de8a49ea9370d6bf285f9b29.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fsplinter-turret-6a1cad04de8a49ea9370d6bf285f9b29.png&width=332&hash=OR%2baWnYY76UZOtWm4BVXMYAPJQquCBFJDlRx47RxoEQ%3d",
			"isUsableByPlayer": true,
			"id": "1749823285",
			"contentId": "890bf973-addf-45a1-80c9-71fecc38f77f"
		},
		{
			"name": "UNSC AUTO TURRET",
			"description": "UNSC Auto Turret deployable for campaign and warzone",
			"type": "Turret",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/default-images/default-turret-332x132-c3db09f21ee242589b5277004462d27e.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2fdefault-images%2fdefault-turret-332x132-c3db09f21ee242589b5277004462d27e.png&width=332&hash=M89098C3LTFFiK9wiIUdjWSNxlXvoKTGlmRoBEmd6RU%3d",
			"isUsableByPlayer": false,
			"id": "2031824349",
			"contentId": "65289c8a-cc54-4503-b1aa-29938b20d436"
		},
		{
			"name": "SCORPION ANTI INFANTRY TURRET",
			"description": "Scorpion Infantry Turret deployable for campaign and warzone",
			"type": "Turret",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/scorpion-turret-3acbd9d1a40d4f71ba4721b1ac1c230e.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fscorpion-turret-3acbd9d1a40d4f71ba4721b1ac1c230e.png&width=332&hash=Vv2qdYARoN%2bkGscXEQz1ntxVZ071UbMVmuVjK3b3xoI%3d",
			"isUsableByPlayer": true,
			"id": "244872079",
			"contentId": "b504ed6b-8335-477a-9834-42c90b4a2d88"
		},
		{
			"name": "WRAITH ANTI INFANTRY TURRET",
			"description": "Wraith Infantry Turret deployable for campaign and warzone",
			"type": "Turret",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/wraith-turret-8c7f77f080f34ab9b5d97509485f9daf.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fwraith-turret-8c7f77f080f34ab9b5d97509485f9daf.png&width=332&hash=9F05IIx2%2ffu2ZBYgnsjpLkDp9HToePCOiCtdmwvYhMs%3d",
			"isUsableByPlayer": true,
			"id": "1701501807",
			"contentId": "c293d75e-4528-44fc-8be2-b3b101bff2bd"
		},
		{
			"name": "Plasma Caster",
			"description": "Fires plasma bolts that can be bounced off terrain to reach targets behind cover. Bolts stick and will chain-detonate when fired using Smart-Link.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/plasma-caster-8373c86c00cb4cffb36f29381d2f1025.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fplasma-caster-8373c86c00cb4cffb36f29381d2f1025.png&width=332&hash=FeGzpg78yr5g8uuwCPkC7ZkN2Wie%2f0la8NMDEbBl2VM%3d",
			"isUsableByPlayer": true,
			"id": "4054937266",
			"contentId": "006861b7-ca17-4032-a998-99ae1cb1fc4f"
		},
		{
			"name": "FORERUNNER BEAM TURRET",
			"description": "Forerunner Beam Turret deployable for campaign and warzone",
			"type": "Turret",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/default-images/default-turret-332x132-c3db09f21ee242589b5277004462d27e.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2fdefault-images%2fdefault-turret-332x132-c3db09f21ee242589b5277004462d27e.png&width=332&hash=M89098C3LTFFiK9wiIUdjWSNxlXvoKTGlmRoBEmd6RU%3d",
			"isUsableByPlayer": false,
			"id": "514985629",
			"contentId": "f3c11ff9-d960-481b-b733-e7994c001f0f"
		},
		{
			"name": "SPIRIT CHIN GUN",
			"description": "Spirit Chin Gun deployable for campaign and warzone",
			"type": "Turret",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/spirit-chain-gun-1884effb163d43bb82b198fdd43dbe11.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fspirit-chain-gun-1884effb163d43bb82b198fdd43dbe11.png&width=332&hash=y%2bwojiZdKkre25hosAHW30JWNa87lzts9NruwwzEybs%3d",
			"isUsableByPlayer": false,
			"id": "1797509873",
			"contentId": "55ae77f4-3111-4d34-a1ae-ee82ef69f6cb"
		},
		{
			"name": "Carbine",
			"description": "Carbine with Holoscope. Versatile semi-automatic rifle renowned for its accuracy and long range. New production models use a streamlined manufacturing process and reactive materials in place of radioisotopes for coating projectiles.",
			"type": "Standard",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/covenant-carbine-30811039456f475f805eaa52762820b0.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fcovenant-carbine-30811039456f475f805eaa52762820b0.png&width=332&hash=Zin20muBr8qdP73e6MEp23Qwug0dAaImKkcxtX%2b1xgA%3d",
			"isUsableByPlayer": true,
			"id": "4108759423",
			"contentId": "a32d5b79-aa24-4897-8850-55ffc7450d6e"
		},
		{
			"name": "PHANTOM CHIN GUN",
			"description": "Phantom Chin Gun deployable for campaign and warzone",
			"type": "Turret",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/phantom-chin-gun-a446b325e7494d29a8cabe7e693548da.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fphantom-chin-gun-a446b325e7494d29a8cabe7e693548da.png&width=332&hash=GszX%2ffGgOqVHYsp40W8g1IdLn6sxFh%2bbHtqrtcNs0aQ%3d",
			"isUsableByPlayer": false,
			"id": "3717288512",
			"contentId": "1b15c7be-a807-460a-987a-60037c346b9b"
		},
		{
			"name": "LightRifle",
			"description": "Accurate and powerful, LightRifles were the standard-issue weapon of ancient Promethean warriors.",
			"type": "Standard",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/light-rifle-0c9fc99241fc414a85d6e210fed36d04.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2flight-rifle-0c9fc99241fc414a85d6e210fed36d04.png&width=332&hash=tIJEZDRfA5lPq2QmM6Ql66UCCyNFECIxJXWqlSFDJLE%3d",
			"isUsableByPlayer": true,
			"id": "2511447508",
			"contentId": "59026c44-1498-4580-99ef-c45fad75bc12"
		},
		{
			"name": "Storm Rifle",
			"description": "Rapid-fire plasma rifle effective out to medium range when Smart-Link is engaged. Sustained fire can temporarily overheat the weapon.",
			"type": "Standard",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/covenant-storm-rifle-a440460289a54237832d39becaaf0046.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fcovenant-storm-rifle-a440460289a54237832d39becaaf0046.png&width=332&hash=BdfDk%2fhQyjjfC3cPrWYvadmKNtKU5fLlKyuj1QhlSRA%3d",
			"isUsableByPlayer": true,
			"id": "2133511419",
			"contentId": "611e61ad-5b14-4631-8eef-f8bb6a14b1f0"
		},
		{
			"name": "Binary Rifle",
			"description": "Semi-automatic sniper energy rifle with variable-zoom 4x/9x optics. Use Smart-Link when engaging targets at long range.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/binary-rifle-79e0c4a1283641bda007e0d861ded31b.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fbinary-rifle-79e0c4a1283641bda007e0d861ded31b.png&width=332&hash=s0YVJm3ACjKC2uS31lvIGShLBOn9BXeLOxeskO0xeLA%3d",
			"isUsableByPlayer": true,
			"id": "2140505068",
			"contentId": "5130eeaa-d67e-4001-a548-20408dffe0d8"
		},
		{
			"name": "Plasma Pistol",
			"description": "Semi-automatic energy pistol that fires packets of superheated plasma. Holding down the trigger, then releasing, will fire a tracking overcharge shot with an EMP effect that will disable vehicles and knock out shields.",
			"type": "Standard",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/plasma-pistol-1a65716f9b894b8496b501c69b4c05d9.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fplasma-pistol-1a65716f9b894b8496b501c69b4c05d9.png&width=332&hash=EXTEQAQlvspdmk0AJWHxJfJKVBhejMoyiZPWQjzN0Ro%3d",
			"isUsableByPlayer": true,
			"id": "524558978",
			"contentId": "c8dd731b-0766-4315-8ec0-8922f40cc101"
		},
		{
			"name": "Scorpion",
			"description": "Main battle tank armed with a heavy cannon and pintle-mounted heavy machine gun. This new iteration of the storied Scorpion is half the mass of the old M808 yet has nearly identical firepower and armor protection.",
			"type": "Vehicle",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/scorpion-6c7fb074aa1c42549a765a294e78c3c7.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2fscorpion-6c7fb074aa1c42549a765a294e78c3c7.png&width=332&hash=%2fCkx7J14PgzU9QjJ5ndSwhhMk0%2bTZa6nlpEndWfyTHc%3d",
			"isUsableByPlayer": true,
			"id": "1730553442",
			"contentId": "c7e2f6aa-b86c-4131-b5d7-71bb35fcd0c4"
		},
		{
			"name": "Suppressor",
			"description": "Fully-automatic energy rifle effective at short range. Accuracy significantly improves when using Smart-Link.",
			"type": "Standard",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/suppressor-5ee536381da34f48abb542a29a51a898.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fsuppressor-5ee536381da34f48abb542a29a51a898.png&width=332&hash=wJMTrh6lL7uesgj0OU9W3Cene%2fInCVHLAd5ZUUMK5Lg%3d",
			"isUsableByPlayer": true,
			"id": "2681172411",
			"contentId": "fc839d35-d0e3-4234-b9ff-70c428d8cca7"
		},
		{
			"name": "Phaeton",
			"description": null,
			"type": "Vehicle",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/vtol-5c02f48bfdf246c0aab7f738687b5744.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2fvtol-5c02f48bfdf246c0aab7f738687b5744.png&width=332&hash=p%2b56GNOiSUDlhjfn%2ffB2d457Le7Vdw752wer9fGX0Ts%3d",
			"isUsableByPlayer": true,
			"id": "3394982816",
			"contentId": "011cd325-c192-477c-8767-23b99546031d"
		},
		{
			"name": "Boltshot",
			"description": "Burst-fire energy pistol. Bolts home-in on close range targets. This new functionality appears to be related to other adaptations the Prometheans have displayed since the disappearance of the Didact.",
			"type": "Standard",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/boltshot-c9cdbdb343524915b1d80bc8b3047286.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fboltshot-c9cdbdb343524915b1d80bc8b3047286.png&width=332&hash=ufVTmfMPj5xIOpOyGMEn%2fV6Pa5Qb5%2b%2fb%2b520Px3XAX0%3d",
			"isUsableByPlayer": true,
			"id": "4153405209",
			"contentId": "4ead2f3c-c9ba-41d0-bf69-a3ac1d4b4e32"
		},
		{
			"name": "Mantis",
			"description": "Combat walker armed with heavy machine gun and missile launcher. Missiles can lock-on to aerial targets. Melee unleashes a devastating stomp attack. Extended use of the heavy machine gun will cause it to overheat.",
			"type": "Vehicle",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/mantis-88bcd6e59a3d469aa380620309a5e8a5.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2fmantis-88bcd6e59a3d469aa380620309a5e8a5.png&width=332&hash=bQ58hOrEtc%2b3XuXpGvrmzK31OhA5Ctt8mUlqXZ%2bMmRU%3d",
			"isUsableByPlayer": true,
			"id": "3227919741",
			"contentId": "71347094-6fdb-437a-862c-59db1b936aa6"
		},
		{
			"name": "Banshee",
			"description": "Agile ground attack aircraft. Armed with rapid-fire plasma cannons and secondary fuel rod cannon. Can perform acrobatic rolls and loops or high-speed boosts.",
			"type": "Vehicle",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/banshee-9626ac8f343644f3a592a0b7d49faac6.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2fbanshee-9626ac8f343644f3a592a0b7d49faac6.png&width=332&hash=%2bwTKTSuyqU6fPV%2f0JYmjU2YOh4SvpWEcKMVyHF7gL3U%3d",
			"isUsableByPlayer": true,
			"id": "419783896",
			"contentId": "91fafc39-ee57-4ae7-ad93-b36e6ac34561"
		},
		{
			"name": "Wraith",
			"description": "Assault tank armed with a heavy plasma mortar and pintle-mounted plasma cannon. Can boost for quick sprints. The latest Wraith revisits an ancient Sangheili design that is easier to manufacture and less costly to lose.",
			"type": "Vehicle",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/wraith-bd8975a1a57348a2b8a2588e9a5040f1.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2fwraith-bd8975a1a57348a2b8a2588e9a5040f1.png&width=332&hash=vr34Tpz64SEzQReJpo2bu0kn5bBSbyOGwpDwCXhzF0M%3d",
			"isUsableByPlayer": true,
			"id": "1206711506",
			"contentId": "c12685a5-956c-483b-8254-70765a23d863"
		},
		{
			"name": "Warthog",
			"description": "Warthog armed reconnaissance configuration fitted with a rotary autocannon on a full-rotation turret mount. ",
			"type": "Vehicle",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/warthog-951f2406dea44d229662df881d89272e.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2fwarthog-951f2406dea44d229662df881d89272e.png&width=332&hash=fgVOMTjIBBWxAMSe5%2bGu6VRwzTrdizeFN7F6YDNtbMw%3d",
			"isUsableByPlayer": true,
			"id": "4028516791",
			"contentId": "4dcc7ed4-6d15-4170-bad2-fdf28705fbae"
		},
		{
			"name": "Assault Rifle",
			"description": "Assault Rifle with Projection Sight. Standard-issue fully-automatic rifle effective at short to medium range.",
			"type": "Standard",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/assault-rifle-72bb6004e7804715935013ca745cadb9.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fassault-rifle-72bb6004e7804715935013ca745cadb9.png&width=332&hash=5aSvHLqf3tm3VL4EyZXk9WkfZAD%2fwaVy2T22GduWhqw%3d",
			"isUsableByPlayer": true,
			"id": "313138863",
			"contentId": "9f00429a-687a-4e0e-8690-cde5ba010bcf"
		},
		{
			"name": "SMG",
			"description": "SMG with CQB Sight. Rapid fire submachine gun best suited for close-quarters combat while leveraging Smart-Link.",
			"type": "Standard",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/smg-74d80a6bc14c4c64aa08db838e775db7.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fsmg-74d80a6bc14c4c64aa08db838e775db7.png&width=332&hash=6Ikf%2fFGrIZ8eeJfpuA6Ti%2bn5cdzoFu66S4ctCjr3RZo%3d",
			"isUsableByPlayer": true,
			"id": "723388907",
			"contentId": "5d4f4df8-9684-40d8-9d25-a15481a1047f"
		},
		{
			"name": "Scattershot",
			"description": "Short-range semi-automatic energy shotgun. Energy projectiles ricochet off hard surfaces and exhibit homing behavior.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/scattershot-7453d1d0f9a149dfb2649675322780cd.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fscattershot-7453d1d0f9a149dfb2649675322780cd.png&width=332&hash=cAtlmS3kBkUWiC8goxDP4DPNo%2f%2ffLsK2ojbQhNKQL6Y%3d",
			"isUsableByPlayer": true,
			"id": "3808094875",
			"contentId": "6e033e34-9ebe-4120-9abb-59c5d55159e0"
		},
		{
			"name": "Ghost",
			"description": "Fast attack bike fitted with dual rapid-fire plasma cannons. Can boost for extra speed, at the expense of maneuverability.",
			"type": "Vehicle",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/ghost-3d8125d531f14b5499eb203bb6689c19.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2fghost-3d8125d531f14b5499eb203bb6689c19.png&width=332&hash=8iIZszbCW4BymoY%2ftsU02sVjy9k1RPVcIR9WPhE%2bNLA%3d",
			"isUsableByPlayer": true,
			"id": "3010146366",
			"contentId": "d760ed2e-8b55-44c0-9b47-fc5c8d44910d"
		},
		{
			"name": "Railgun",
			"description": "Powerful single-shot coilgun that requires a short charge cycle before firing. Will automatically fire if the charge is held for too long.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/railgun-ce34452629a74a0899a091f0f2e52f89.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2frailgun-ce34452629a74a0899a091f0f2e52f89.png&width=332&hash=eh%2b4lDppbLwobJ7CtqVzSGgfvCv7qVABYIqP%2fq3QMCs%3d",
			"isUsableByPlayer": true,
			"id": "3682788176",
			"contentId": "c5fe5ab1-6583-443f-abc6-4c513847fdd1"
		},
		{
			"name": "Mongoose",
			"description": "Heavy-duty all-terrain quad bike. A passenger can be accommodated on the rear-facing seat. ",
			"type": "Vehicle",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/wargoose-6bfb5d0d8ff34c67ac7537dbecea9f59.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2fwargoose-6bfb5d0d8ff34c67ac7537dbecea9f59.png&width=332&hash=Alksbp7GujgkvJ5tsRpgWqCOoUqpeIvuRAY9Y9dFWRk%3d",
			"isUsableByPlayer": true,
			"id": "1063919886",
			"contentId": "f9b11bd7-7959-4639-94de-a9df329579a5"
		},
		{
			"name": "Hydra Launcher",
			"description": "Portable mini-missile launcher. Use Smart-Link to lock-on to targets before firing.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/hydra-ae5ed76d25b048dd98ca20efd8818935.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fhydra-ae5ed76d25b048dd98ca20efd8818935.png&width=332&hash=Igp%2bCCVwYELH%2biLOj8nQjtUFtI0%2fb7WO7XQ96mvNiZk%3d",
			"isUsableByPlayer": true,
			"id": "1579758889",
			"contentId": "0dd40ad7-9120-4fdf-881a-ecda58fedff3"
		},
		{
			"name": "Spartan Laser",
			"description": "Anti-vehicle laser. Requires a short warmup time before firing.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/spartan-laser-1dce3448ef73469ab8f9e2d38c9d531c.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fspartan-laser-1dce3448ef73469ab8f9e2d38c9d531c.png&width=332&hash=dmKMiRo6bmqIWsY%2btMFku6K4YsmlBhWyd2wQMGe8hsA%3d",
			"isUsableByPlayer": true,
			"id": "3885603197",
			"contentId": "7f28cc32-55a6-4bce-ae30-8703ac50f2e3"
		},
		{
			"name": "Needler",
			"description": "Exotic weapon which fires shards that home in on short-range targets. If multiple shards strike a target they will detonate - creating a \"supercombine\" explosion. Will bounce off heavy armor, such as that used by vehicles and Hunters.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/needler-5690d414b19a4b2d83be15baaffa2fe9.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fneedler-5690d414b19a4b2d83be15baaffa2fe9.png&width=332&hash=N00LDPlPB5dg3BgRm%2fDef2bQs8MR0c4DJsEeAtIR5ck%3d",
			"isUsableByPlayer": true,
			"id": "2050745863",
			"contentId": "f6c599f2-2c86-447d-944d-fa604b17136a"
		},
		{
			"name": "Shotgun",
			"description": "Short-ranged semi-automatic shotgun. Get up-close and personal to maximize damage.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/shotgun-35bca45ecb8440479bfbab9e075f4302.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fshotgun-35bca45ecb8440479bfbab9e075f4302.png&width=332&hash=aRRxaPLRsA9%2bxwd5%2fA43ghuA0p7jr3L9mX0TtUI8bIo%3d",
			"isUsableByPlayer": true,
			"id": "3484334713",
			"contentId": "39c25783-6a10-4b13-a586-546eae1c99bc"
		},
		{
			"name": "SAW",
			"description": "Rapid-fire light machine gun with a large ammo capacity.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/saw-0f3ee44a215d4a57b6e578cd760a3fb0.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fsaw-0f3ee44a215d4a57b6e578cd760a3fb0.png&width=332&hash=pfWvwfHvmhEmIgcc2SJ2hfon7EHNIAwJwECLlAayPps%3d",
			"isUsableByPlayer": true,
			"id": "2278207101",
			"contentId": "93970223-4c24-4c73-9ce0-af44299e529d"
		},
		{
			"name": "Fuel Rod Cannon",
			"description": "Magazine-fed, shoulder-fired heavy weapon that fires explosive fuel rods. Modern fuel rod cannons are significantly more accurate than those used by the old Covenant; a refinement sourced from the multi-species workshops on Venezia.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/fuel-rod-cannon-041deffe5b6e4ca283e10b2d3cc734df.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2ffuel-rod-cannon-041deffe5b6e4ca283e10b2d3cc734df.png&width=332&hash=2V1VcxW79vt%2f8BddOjOIN3V2JKaXX%2bmHelsB%2bdEfO7k%3d",
			"isUsableByPlayer": true,
			"id": "2670072722",
			"contentId": "1e4a8790-77cd-4106-9047-5ba66053e4fc"
		},
		{
			"name": "FRAG GRENADE",
			"description": "Frag grenade deployable for campaign",
			"type": "Grenade",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/frag-grenade-475ae914b9154a0fad1097e1bd93705c.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2ffrag-grenade-475ae914b9154a0fad1097e1bd93705c.png&width=332&hash=NoUz5nJ9pJWI4daAx%2b%2fGpb%2f1bxmeSqBBrZ0Q3Ue1rcE%3d",
			"isUsableByPlayer": true,
			"id": "4106030681",
			"contentId": "2355c403-e88b-4897-9698-e731cfdaf8d7"
		},
		{
			"name": "Energy Sword",
			"description": "Deadly plasma-based melee weapon. Successful strikes deplete the sword's limited energy charge.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/energy-sword-2c1b6748e5bc4354b832d9369fe814bc.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fenergy-sword-2c1b6748e5bc4354b832d9369fe814bc.png&width=332&hash=91cKKp6Ay7GfyEHB4r8nRvzZplD7nl1mCLFx21HjJro%3d",
			"isUsableByPlayer": true,
			"id": "2650887244",
			"contentId": "d83e562a-5cef-4e86-8231-b1f5ee4e710b"
		},
		{
			"name": "Beam Rifle",
			"description": "Long-range semi-automatic energy rifle with variable-zoom 4x/10x optics. Use Smart-Link to line up headshots for one-shot kills.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/beam-rifle-3a4d95cd93a94895a23b217d812f8c7d.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fbeam-rifle-3a4d95cd93a94895a23b217d812f8c7d.png&width=332&hash=oh4MRfkENVebE%2bbbqj2jIWI%2bnz1D0fPyGzkcXUf2%2b7k%3d",
			"isUsableByPlayer": true,
			"id": "2862629816",
			"contentId": "8d299779-5e9b-4273-aecf-b5727c62fcd7"
		},
		{
			"name": "SPLINTER GRENADE",
			"description": "Splinter grenade deployable for campaign",
			"type": "Grenade",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/splinter-grenade-a3734115247e4709af0ab1f53a9c6a55.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fsplinter-grenade-a3734115247e4709af0ab1f53a9c6a55.png&width=332&hash=h03UgF2mSwcB3o56FpX5%2bj3Q1N5dfjsCh17Ur%2bSOtw0%3d",
			"isUsableByPlayer": true,
			"id": "3190813201",
			"contentId": "4eb8f0d1-4c77-438b-9719-c450b3b875db"
		},
		{
			"name": "DMR",
			"description": "DMR with Longshot Sight. Powerful and accurate semi-automatic rifle best used at mid to long-range.",
			"type": "Standard",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/dmr-13a45fa2ad074b5cb70a0ef81f36f0e1.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fdmr-13a45fa2ad074b5cb70a0ef81f36f0e1.png&width=332&hash=WDK4RgJy%2blGjzyU1%2fCeHy5MjHgisKjGLvk0%2fZxFoj%2fE%3d",
			"isUsableByPlayer": true,
			"id": "523953283",
			"contentId": "71a5cf7d-c8f1-4ab5-8771-1854338bbb85"
		},
		{
			"name": "PLASMA GRENADE",
			"description": "Plasma grenade deployable for campaign",
			"type": "Grenade",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/plasma-grenade-e63ed2a67258459882ea3d73ca173237.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fplasma-grenade-e63ed2a67258459882ea3d73ca173237.png&width=332&hash=zhaeCiBVuRlstZfXhYcfmtur5N8W7r3HXnpMBMECvhA%3d",
			"isUsableByPlayer": true,
			"id": "2460880172",
			"contentId": "a1ede5b9-3819-42d3-a3b3-a276571547a2"
		},
		{
			"name": "Sniper Rifle",
			"description": "Semi-automatic multi-role heavy rifle with variable-zoom 4x/9x optics. Best used at long range in conjunction with Smart-Link.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/sniper-rifle-b6d462a6c57d4297953d12e93e468053.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fsniper-rifle-b6d462a6c57d4297953d12e93e468053.png&width=332&hash=BiMAWO4c0GfjEiyp%2fYMyGApujlhorPHFr8tEr49q02Y%3d",
			"isUsableByPlayer": true,
			"id": "669296699",
			"contentId": "22cad0dc-8af0-44d2-8654-f80a0c231955"
		},
		{
			"name": "Rocket Launcher",
			"description": "Shoulder-fired heavy weapon widely issued to UNSC Army, Marine Corps, and Spartan infantry to counter enemy vehicles and Promethean Knights. Can fire two missiles per magazine. Lock-on to air targets using Smart-Link before firing.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/rocket-launcher-fc1d373704564123ae76cf41de665d18.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2frocket-launcher-fc1d373704564123ae76cf41de665d18.png&width=332&hash=87HtwFUlzN7GoQu%2bEeySijltY9fM79i7XpN1B%2bPvvaw%3d",
			"isUsableByPlayer": true,
			"id": "723523180",
			"contentId": "f4aa9fab-fc38-4cbe-a777-0d6eab03bcc4"
		},
		{
			"name": "Magnum",
			"description": "Magnum with Projection Sight. Standard-issue semi-automatic heavy pistol. Use Smart-Link and call your shots.",
			"type": "Standard",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/magnum-d98e366992d4489bbb34e75e1ad7c2f6.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fmagnum-d98e366992d4489bbb34e75e1ad7c2f6.png&width=332&hash=T2cr3zTZxUhcD7EWVZMgThYlYG%2brBbbZd2z8rp2dMz0%3d",
			"isUsableByPlayer": true,
			"id": "4096745987",
			"contentId": "9cf1c3ce-bf33-4c20-b9ae-56de0f6f0652"
		},
		{
			"name": "Battle Rifle",
			"description": "Battle Rifle with Recon Sight. Standard-issue burst-fire rifle that can excel at any engagement range.",
			"type": "Standard",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/br-07be901f5fac4a68aeea3dac36decc06.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fbr-07be901f5fac4a68aeea3dac36decc06.png&width=332&hash=375YR8hAEtNlO6Vq7RPB6V56bdbd4ermo6n6UrrK2ss%3d",
			"isUsableByPlayer": true,
			"id": "424645655",
			"contentId": "9b2089b8-5652-465a-ad78-78a36761fcac"
		},
		{
			"name": "SPNKr Rocket Launcher",
			"description": "Make some noise! Twin-tube shoulder-fired rocket launcher with Smart-Link sights. Rockets can lock-on to air targets.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/spnkr-25d0ddbcefd14a859bceef38875b28a3.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fspnkr-25d0ddbcefd14a859bceef38875b28a3.png&width=332&hash=YZndAuIi%2bqCqGGCvgHjNQSI1FEB5ZcW5946sExuvqSA%3d",
			"isUsableByPlayer": true,
			"id": "2902827823",
			"contentId": "e7d65a17-2517-458c-ac3f-1dd48405718e"
		},
		{
			"name": "Halo 2 Battle Rifle",
			"description": "BR with Classic Sight. Reliable firepower never goes out of style. Battle Rifle with full-screen zoom.",
			"type": "Standard",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/halo-2-battle-rifle-967c07de6b78414eafa429be2eb7ab48.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fhalo-2-battle-rifle-967c07de6b78414eafa429be2eb7ab48.png&width=332&hash=B67pwYaY0I3WpJu5t2D11AD%2bpfb4Vqn3x41DZtJU3JY%3d",
			"isUsableByPlayer": true,
			"id": "4222743534",
			"contentId": "798a60dd-410a-4493-ba48-22e9dfd8ddff"
		},
		{
			"name": "Ball",
			"description": null,
			"type": "Unknown",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/assault-ball-weapon-e1cffc1788c849d8938bf104fe55e07a.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fassault-ball-weapon-e1cffc1788c849d8938bf104fe55e07a.png&width=332&hash=XinxuuCPidF6%2fISNfNygk%2bm8Hp9%2b%2b9xAg8ZPCu9Pr1k%3d",
			"isUsableByPlayer": true,
			"id": "393532233",
			"contentId": "1e2acd11-6bbb-4f62-855b-21a8b84f5a7d"
		},
		{
			"name": "Gravity Hammer",
			"description": "Brutally effective melee weapon that combines a hammer with repurposed gravitic impellers on the striking face. Each smash unleashes a damaging area-of-effect pulse with knockback. Regular melee attacks are weaker, but do not consume energy.",
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/gravity-hammer-07ce6812c81c4c67a6dd68dbb7456355.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fgravity-hammer-07ce6812c81c4c67a6dd68dbb7456355.png&width=332&hash=AflzYP165PLTA%2fVLKmehUKYhO7vCycNsO2GNox7ZM24%3d",
			"isUsableByPlayer": true,
			"id": "2899979324",
			"contentId": "91cefab6-7af6-4fec-8543-f8efd4908c21"
		},
		{
			"name": "Halo One Pistol",
			"description": null,
			"type": "Power",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/magnum-h1-42d7453086fa48ba897bd99f8f7cab8f.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fmagnum-h1-42d7453086fa48ba897bd99f8f7cab8f.png&width=332&hash=GJ5%2fNOKvONYcodHWSK510eVm5lmK7CW92O2Nrvg0ZZE%3d",
			"isUsableByPlayer": true,
			"id": "2758094302",
			"contentId": "459e3484-e687-4867-88dc-01331973e0aa"
		},
		{
			"name": "PHANTOM",
			"description": "Phantom deployable for campaign and warzone",
			"type": "Vehicle",
			"largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/default-images/default-weapon-332x132-5e66c8cb2a2045ee8c0b15c0cb1f7944.png",
			"smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2fdefault-images%2fdefault-weapon-332x132-5e66c8cb2a2045ee8c0b15c0cb1f7944.png&width=332&hash=B%2fQedDpaFRR6mNigEL1GT9CrU5j8lKSIYZsoepqa2gk%3d",
			"isUsableByPlayer": false,
			"id": "1977724336",
			"contentId": "54d2716c-b420-4a40-9e93-6636b221177b"
		}
	];

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(20);
	var ReactDOM = __webpack_require__(177);

	var ViewControlButton = function (_React$Component) {
	    _inherits(ViewControlButton, _React$Component);

	    function ViewControlButton() {
	        _classCallCheck(this, ViewControlButton);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ViewControlButton).apply(this, arguments));
	    }

	    _createClass(ViewControlButton, [{
	        key: '_onClick',
	        value: function _onClick(e, callback) {
	            e.preventDefault();
	            e.stopPropagation();
	            this.props.onClick && this.props.onClick();
	        }
	    }, {
	        key: '_onMouseDown',
	        value: function _onMouseDown(e) {
	            e.stopPropagation();
	            e.nativeEvent.stopImmediatePropagation();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'button',
	                {
	                    onMouseDown: this._onMouseDown.bind(this),
	                    onClick: this._onClick.bind(this) },
	                this.props.label
	            );
	        }
	    }]);

	    return ViewControlButton;
	}(React.Component);

	/**
	 * Controls for the match display.
	 */


	var ViewControls = function (_React$Component2) {
	    _inherits(ViewControls, _React$Component2);

	    function ViewControls() {
	        _classCallCheck(this, ViewControls);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ViewControls).apply(this, arguments));
	    }

	    _createClass(ViewControls, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { id: 'view-controls', className: 'button-group' },
	                React.createElement(ViewControlButton, { label: 'Top', onClick: this.props.onTopViewSelected }),
	                React.createElement(ViewControlButton, { label: 'Front', onClick: this.props.onFrontViewSelected }),
	                React.createElement(ViewControlButton, { label: 'Side', onClick: this.props.onSideViewSelected })
	            );
	        }
	    }]);

	    return ViewControls;
	}(React.Component);

	exports.default = ViewControls;
	;

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _moment = __webpack_require__(179);

	var _moment2 = _interopRequireDefault(_moment);

	var _weapons = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(20);
	var ReactDOM = __webpack_require__(177);

	/**
	 * 
	 */

	var Weapon = function (_React$Component) {
	    _inherits(Weapon, _React$Component);

	    function Weapon() {
	        _classCallCheck(this, Weapon);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Weapon).apply(this, arguments));
	    }

	    _createClass(Weapon, [{
	        key: 'render',
	        value: function render() {
	            var event = this.props.event;
	            var weapon = (0, _weapons.getWeaponsTable)().get(event.KillerWeaponStockId);
	            var displayName = '';
	            if (event.IsMelee) {
	                displayName = weapon ? weapon.displayName : '';
	            } else if (weapon && weapon.Type === 'Gernade') {
	                displayName = weapon ? weapon.displayName : '';
	            } else {
	                var distance = event.KillVector.length().toFixed(2);
	                displayName = weapon ? weapon.displayName + ' (' + distance + ')' : '';
	            }
	            return React.createElement(
	                'span',
	                { className: 'weaponName' },
	                displayName
	            );
	        }
	    }]);

	    return Weapon;
	}(React.Component);

	/**
	 * Event in the event list
	 */


	var Event = function (_React$Component2) {
	    _inherits(Event, _React$Component2);

	    function Event(props) {
	        _classCallCheck(this, Event);

	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Event).call(this, props));

	        _this2.state = {
	            timeString: (0, _moment2.default)(props.event.TimeSinceStart._data).format('mm:ss.SS')
	        };
	        return _this2;
	    }

	    _createClass(Event, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this3 = this;

	            var element = ReactDOM.findDOMNode(this);
	            element.addEventListener('animationend', function () {
	                return _this3.props.onFadeOut(_this3.props.index, _this3.props.event);
	            }, false);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var event = this.props.event;
	            return React.createElement(
	                'li',
	                { className: 'event' },
	                React.createElement(
	                    'span',
	                    { className: 'time' },
	                    this.state.timeString
	                ),
	                ' -',
	                React.createElement(
	                    'span',
	                    { className: 'player killer' },
	                    event.Killer && event.Killer.Gamertag
	                ),
	                ' | ',
	                React.createElement(Weapon, { event: event }),
	                '  | ',
	                React.createElement(
	                    'span',
	                    { className: 'player victim' },
	                    event.Victim && event.Victim.Gamertag
	                )
	            );
	        }
	    }]);

	    return Event;
	}(React.Component);

	/**
	 * Displays a list of events.
	 */


	var EventList = function (_React$Component3) {
	    _inherits(EventList, _React$Component3);

	    function EventList(props) {
	        _classCallCheck(this, EventList);

	        var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(EventList).call(this, props));

	        _this4.state = { events: new Map() };
	        _this4._i = 0;
	        return _this4;
	    }

	    _createClass(EventList, [{
	        key: 'onEvent',
	        value: function onEvent(event) {
	            var i = this._i++;
	            this.state.events.set(i, { data: event, i: i });
	            this.forceUpdate();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this5 = this;

	            this.props.registerOnEvent(function (e) {
	                _this5.onEvent(e);
	            });
	        }
	    }, {
	        key: 'onFadeOut',
	        value: function onFadeOut(key, event) {
	            this.state.events.delete(key);
	            this.forceUpdate();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var onFadeOut = this.onFadeOut.bind(this);

	            var events = [];
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = this.state.events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var _step$value = _slicedToArray(_step.value, 2);

	                    var _ = _step$value[0];
	                    var _step$value$ = _step$value[1];
	                    var data = _step$value$.data;
	                    var i = _step$value$.i;

	                    events.push(React.createElement(Event, { key: i, event: data, index: i, onFadeOut: onFadeOut }));
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            return React.createElement(
	                'ul',
	                { className: 'event-list' },
	                events
	            );
	        }
	    }]);

	    return EventList;
	}(React.Component);

	exports.default = EventList;

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _audio_context = __webpack_require__(280);

	var _audio_context2 = _interopRequireDefault(_audio_context);

	var _audioLoader = __webpack_require__(297);

	var _audioLoader2 = _interopRequireDefault(_audioLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ambientVolume = 0.2;
	var ambientFadeIn = 8;

	var reverbNode = _audio_context2.default.then(function (ctx) {
	    return new Promise(function (resolve) {
	        var node = ctx.createReverbFromUrl("./sounds/reverb/TerrysFactoryWarehouse.m4a", function () {
	            node.connect(ctx.destination);
	            resolve(node);
	        });
	    });
	});

	/**
	 * Manages playing sounds
	 */

	var SoundManager = function () {
	    function SoundManager(generators) {
	        _classCallCheck(this, SoundManager);

	        this._playing = new Set();
	        this._longPlaying = new Set();
	        this._generators = generators || [];
	    }

	    _createClass(SoundManager, [{
	        key: '_getRootCtx',
	        value: function _getRootCtx(f) {
	            _audio_context2.default.then(function (audioCtx) {
	                return reverbNode.then(function (reverbNode) {
	                    return f(audioCtx, reverbNode);
	                });
	            });
	        }

	        /**
	         * Play a sound for a given event.
	         */

	    }, {
	        key: 'play',
	        value: function play(event, data) {
	            var _this = this;

	            this._getRootCtx(function (audioCtx, reverbNode) {
	                var audio = {
	                    ctx: audioCtx,
	                    destination: reverbNode
	                };

	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = _this._generators[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var generator = _step.value;

	                        var _generator = generator(audio, event, data);

	                        var sound = _generator.sound;
	                        var duration = _generator.duration;

	                        _this._playSound(sound, duration);
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            });
	        }

	        /**
	         * Play a looping ambient sound.
	         */

	    }, {
	        key: 'playAmbient',
	        value: function playAmbient(file) {
	            var _this2 = this;

	            this._getRootCtx(function (audioCtx, reverbNode) {
	                var ambientGain = audioCtx.createGain();
	                ambientGain.gain.value = 0;

	                (0, _audioLoader2.default)(audioCtx)(file).then(function (buffer) {
	                    var source = audioCtx.createBufferSource();
	                    source.buffer = buffer;
	                    source.loop = true;
	                    source.connect(ambientGain);
	                    ambientGain.connect(reverbNode);
	                    source.start(0);

	                    ambientGain.gain.setValueAtTime(0, audioCtx.currentTime);
	                    ambientGain.gain.linearRampToValueAtTime(ambientVolume, audioCtx.currentTime + ambientFadeIn);

	                    _this2._longPlaying.add(source);
	                });
	            });
	        }

	        /**
	         * Stop all playing audio.
	         */

	    }, {
	        key: 'stopAll',
	        value: function stopAll() {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = this._playing[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var x = _step2.value;

	                    x.stop();
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }

	            this._playing = new Set();
	        }

	        /**
	         * Play a sound
	         */

	    }, {
	        key: '_playSound',
	        value: function _playSound(sound, duration) {
	            var _this3 = this;

	            this._playing.add(sound);
	            sound.play();
	            if (duration) {
	                setTimeout(function () {
	                    sound.stop();
	                    _this3._playing.delete(sound);
	                }, duration + 1000);
	            }
	        }
	    }]);

	    return SoundManager;
	}();

	exports.default = SoundManager;

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.init = undefined;

	var _reverb = __webpack_require__(281);

	var _reverb2 = _interopRequireDefault(_reverb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var r = void 0;
	var ctx = void 0;

	exports.default = new Promise(function (resolve, reject) {
	    r = resolve;
	});
	var init = exports.init = function init() {
	    if (ctx) return ctx;

	    ctx = new (window.AudioContext || window.webkitAudioContext)();
	    _reverb2.default.extend(ctx);

	    var oscillator = ctx.createOscillator();
	    oscillator.frequency.value = 1;
	    oscillator.connect(ctx.destination);
	    oscillator.start(0);
	    oscillator.stop(0);
	    r(ctx);
	    return ctx;
	};

/***/ },

/***/ 281:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*global ArrayBuffer, Uint8Array, window, XMLHttpRequest*/
	// from https://github.com/burnson/Reverb.js
	exports.default = {
	  extend: function extend(audioContext) {
	    function decodeBase64ToArrayBuffer(input) {
	      function encodedValue(input, index) {
	        var encodedCharacter,
	            x = input.charCodeAt(index);
	        if (index < input.length) {
	          if (x >= 65 && x <= 90) {
	            encodedCharacter = x - 65;
	          } else if (x >= 97 && x <= 122) {
	            encodedCharacter = x - 71;
	          } else if (x >= 48 && x <= 57) {
	            encodedCharacter = x + 4;
	          } else if (x === 43) {
	            encodedCharacter = 62;
	          } else if (x === 47) {
	            encodedCharacter = 63;
	          } else if (x !== 61) {
	            console.log('base64 encountered unexpected character code: ' + x);
	          }
	        }
	        return encodedCharacter;
	      }

	      if (input.length === 0 || input.length % 4 > 0) {
	        console.log('base64 encountered unexpected length: ' + input.length);
	        return;
	      }

	      var padding = input.match(/[=]*$/)[0].length,
	          decodedLength = input.length * 3 / 4 - padding,
	          buffer = new ArrayBuffer(decodedLength),
	          bufferView = new Uint8Array(buffer),
	          encoded = [],
	          d = 0,
	          e = 0,
	          i;

	      while (d < decodedLength) {
	        for (i = 0; i < 4; i += 1) {
	          encoded[i] = encodedValue(input, e);
	          e += 1;
	        }
	        bufferView[d] = encoded[0] * 4 + Math.floor(encoded[1] / 16);
	        d += 1;
	        if (d < decodedLength) {
	          bufferView[d] = encoded[1] % 16 * 16 + Math.floor(encoded[2] / 4);
	          d += 1;
	        }
	        if (d < decodedLength) {
	          bufferView[d] = encoded[2] % 4 * 64 + encoded[3];
	          d += 1;
	        }
	      }
	      return buffer;
	    }

	    function decodeAndSetupBuffer(node, arrayBuffer, callback) {
	      audioContext.decodeAudioData(arrayBuffer, function (audioBuffer) {
	        console.log('Finished decoding audio data.');
	        node.buffer = audioBuffer;
	        if (typeof callback === "function" && audioBuffer !== null) {
	          callback(node);
	        }
	      }, function (e) {
	        console.log('Could not decode audio data: ' + e);
	      });
	    }

	    audioContext.createReverbFromBase64 = function (audioBase64, callback) {
	      var reverbNode = audioContext.createConvolver();
	      decodeAndSetupBuffer(reverbNode, decodeBase64ToArrayBuffer(audioBase64), callback);
	      return reverbNode;
	    };

	    audioContext.createSourceFromBase64 = function (audioBase64, callback) {
	      var sourceNode = audioContext.createBufferSource();
	      decodeAndSetupBuffer(sourceNode, decodeBase64ToArrayBuffer(audioBase64), callback);
	      return sourceNode;
	    };

	    audioContext.createReverbFromUrl = function (audioUrl, callback) {
	      console.log('Downloading impulse response from ' + audioUrl);
	      var reverbNode = audioContext.createConvolver(),
	          request = new XMLHttpRequest();
	      request.open('GET', audioUrl, true);
	      request.onreadystatechange = function () {
	        if (request.readyState === 4 && request.status === 200) {
	          console.log('Downloaded impulse response');
	          decodeAndSetupBuffer(reverbNode, request.response, callback);
	        }
	      };
	      request.onerror = function (e) {
	        console.log('There was an error receiving the response: ' + e);
	        reverbjs.networkError = e;
	      };
	      request.responseType = 'arraybuffer';
	      request.send();
	      return reverbNode;
	    };

	    audioContext.createSourceFromUrl = function (audioUrl, callback) {
	      console.log('Downloading sound from ' + audioUrl);
	      var sourceNode = audioContext.createBufferSource(),
	          request = new XMLHttpRequest();
	      request.open('GET', audioUrl, true);
	      request.onreadystatechange = function () {
	        if (request.readyState === 4 && request.status === 200) {
	          console.log('Downloaded sound');
	          decodeAndSetupBuffer(sourceNode, request.response, callback);
	        }
	      };
	      request.onerror = function (e) {
	        console.log('There was an error receiving the response: ' + e);
	        reverbjs.networkError = e;
	      };
	      request.responseType = 'arraybuffer';
	      request.send();
	      return sourceNode;
	    };

	    audioContext.createReverbFromBase64Url = function (audioUrl, callback) {
	      console.log('Downloading base64 impulse response from ' + audioUrl);
	      var reverbNode = audioContext.createConvolver(),
	          request = new XMLHttpRequest();
	      request.open('GET', audioUrl, true);
	      request.onreadystatechange = function () {
	        if (request.readyState === 4 && request.status === 200) {
	          console.log('Downloaded impulse response');
	          decodeAndSetupBuffer(reverbNode, decodeBase64ToArrayBuffer(request.response), callback);
	        }
	      };
	      request.onerror = function (e) {
	        console.log('There was an error receiving the response: ' + e);
	        reverbjs.networkError = e;
	      };
	      request.send();
	      return reverbNode;
	    };

	    audioContext.createSourceFromBase64Url = function (audioUrl, callback) {
	      console.log('Downloading base64 sound from ' + audioUrl);
	      var sourceNode = audioContext.createBufferSource(),
	          request = new XMLHttpRequest();
	      request.open('GET', audioUrl, true);
	      request.onreadystatechange = function () {
	        if (request.readyState === 4 && request.status === 200) {
	          console.log('Downloaded sound');
	          decodeAndSetupBuffer(sourceNode, decodeBase64ToArrayBuffer(request.response), callback);
	        }
	      };
	      request.onerror = function (e) {
	        console.log('There was an error receiving the response: ' + e);
	        reverbjs.networkError = e;
	      };
	      request.send();
	      return sourceNode;
	    };
	  }
	};

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _weapon = __webpack_require__(284);

	var _weapon2 = _interopRequireDefault(_weapon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var min = 100;
	var max = 1000;

	var maxGain = 0.2;

	var duration = 2;

	/**
	 * Calculate the frequency for an event.
	 */
	var computeFrequency = function computeFrequency(event, data) {
	    if (data.stream) {
	        return max - (max - min) * (event.KillVectorLength - data.stream.minLength) / (data.stream.maxLength - data.stream.minLength);
	    } else {
	        var progress = 400 + (5.0 - event.KillVectorLength) * 150;
	        return Math.min(max, Math.max(min, progress));
	    }
	};

	/**
	 * Calculate the volume for an event.
	 */
	var computeGain = function computeGain(event, data, frequency) {
	    var computedGain = 1;

	    // Play high pitched sounds softer
	    computedGain *= Math.max(0.2, 1.0 - (frequency - min) / (max - min));

	    if (!isNaN(data.velocity)) computedGain *= data.velocity / 0.5;

	    return Math.min(maxGain, maxGain * computedGain);
	};

	/**
	 * Simple sine wave sound generator.
	 * 
	 * Changes pitch based on kill vector length.
	 */
	exports.default = (0, _weapon2.default)(function (weapon, audio, event, data) {
	    var length = event.KillVectorLength;
	    if (weapon.type === 'Grenade' || event.IsMelee) length = 0;

	    var frequency = computeFrequency(event, data);
	    var gain = computeGain(event, data, frequency);

	    var xOscillator = audio.ctx.createOscillator();
	    xOscillator.type = 'sine';
	    xOscillator.frequency.value = frequency;

	    var gainNode = audio.ctx.createGain();
	    gainNode.gain.value = 0;

	    xOscillator.connect(gainNode);
	    gainNode.connect(audio.destination);

	    var done = false;
	    return {
	        sound: {
	            play: function play() {
	                gainNode.gain.setValueAtTime(0, audio.ctx.currentTime);
	                gainNode.gain.linearRampToValueAtTime(gain, audio.ctx.currentTime + duration * 0.2);
	                gainNode.gain.setValueAtTime(gain, audio.ctx.currentTime + duration * 0.5);
	                gainNode.gain.linearRampToValueAtTime(0, audio.ctx.currentTime + duration * 1);

	                xOscillator.onended = function () {
	                    done = true;
	                };
	                xOscillator.start(0);

	                xOscillator.stop(audio.ctx.currentTime + duration);
	            },
	            stop: function stop() {
	                if (!done) xOscillator.stop();
	            }
	        },
	        duration: duration * 1000
	    };
	});

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _weapons = __webpack_require__(17);

	/**
	 * Helper that adds weapon info to generator.
	 */

	exports.default = function (mapper) {
	    return function (audioCtx, event, data) {
	        var weapon = (0, _weapons.getWeaponsTable)().get(event.KillerWeaponStockId);
	        return mapper(weapon, audioCtx, event, data);
	    };
	};

/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.loadForMatch = exports.createFromJson = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _weapons = __webpack_require__(17);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var THREE = __webpack_require__(3);
	var createTree = __webpack_require__(286);
	var moment = __webpack_require__(179);


	var example = __webpack_require__(287);

	var createTreeFromEvents = function createTreeFromEvents(events) {
	    return events.reduce(function (tree, event) {
	        return tree.insert(event.TimeSinceStart.asMilliseconds(), event);
	    }, createTree());
	};

	var createMapFromEvents = function createMapFromEvents(events) {
	    return events.reduce(function (map, event) {
	        map.set(event.Id, event);
	        return map;
	    }, new Map());
	};

	/**
	 * Stream of death events.
	 */

	var DeathStream = function () {
	    function DeathStream(eventsData) {
	        _classCallCheck(this, DeathStream);

	        var weapons = (0, _weapons.getWeaponsTable)();

	        var duration = eventsData.length ? eventsData[eventsData.length - 1].TimeSinceStart.asMilliseconds() : 0;

	        var maxX = 0,
	            maxY = 0,
	            maxZ = 0;
	        var minLength = Infinity,
	            maxLength = 0;

	        var events = eventsData.map(function (eventData, i) {
	            var isMelee = eventData.IsGroundPound || eventData.IsMelee || eventData.IsShoulderBash;

	            var KillerWorldLocation = new THREE.Vector3().copy(eventData.KillerWorldLocation);
	            var VictimWorldLocation = new THREE.Vector3().copy(eventData.VictimWorldLocation);

	            var KillVector = new THREE.Vector3().subVectors(KillerWorldLocation, VictimWorldLocation);

	            maxX = Math.max(maxX, Math.abs(KillerWorldLocation.x), Math.abs(VictimWorldLocation.x));
	            maxY = Math.max(maxY, Math.abs(KillerWorldLocation.y), Math.abs(VictimWorldLocation.y));
	            maxZ = Math.max(maxZ, Math.abs(KillerWorldLocation.z), Math.abs(VictimWorldLocation.z));

	            var weapon = weapons.get(eventData.KillerWeaponStockId);
	            if (!isMelee && weapon && weapon.Type !== 'Grenade') {
	                minLength = Math.min(minLength, KillVector.length());
	                maxLength = Math.max(maxLength, KillVector.length());
	            }

	            return Object.assign({}, eventData, {
	                Id: '' + i,
	                MatchProgress: (eventData.TimeSinceStart.asMilliseconds() + 1.0) / duration,
	                KillVector: KillVector,
	                ShotLine: new THREE.Line3(KillerWorldLocation, VictimWorldLocation),
	                KillerWorldLocation: KillerWorldLocation,
	                VictimWorldLocation: VictimWorldLocation,
	                KillVectorLength: KillVector.length(),
	                IsMelee: isMelee
	            });
	        });

	        this.duration = duration;
	        this.times = createTreeFromEvents(events);
	        this._map = createMapFromEvents(events);

	        this.bounds = { x: maxX, y: maxY, z: maxZ };

	        this.minLength = minLength;
	        this.maxLength = maxLength;
	    }

	    _createClass(DeathStream, [{
	        key: "forEach",
	        value: function forEach(f) {
	            this.times.forEach(function (_, x) {
	                f(x);return false;
	            });
	        }
	    }]);

	    return DeathStream;
	}();

	/**
	 * Create a `DeathStream` from json.
	 */


	var createFromJson = exports.createFromJson = function createFromJson(events) {
	    var deaths = events.filter(function (x) {
	        return x && x.EventName === "Death";
	    });

	    return new DeathStream(deaths.map(function (eventData) {
	        return Object.assign({}, eventData, {
	            TimeSinceStart: moment.duration(eventData.TimeSinceStart)
	        });
	    }));
	};

	/**
	 * Load a `DeathStream` for a match.
	 */
	var loadForMatch = exports.loadForMatch = function loadForMatch(matchId) {
	    return Promise.resolve({
	        events: example.GameEvents,
	        stream: createFromJson(example.GameEvents)
	    });
	};

/***/ },

/***/ 287:
/***/ function(module, exports) {

	module.exports = {
		"Links": {
			"StatsMatchDetails": {
				"AuthorityId": "spartanstats",
				"Path": "h5/arena/matches/ac560ffc-4de4-43c1-a0be-17853466350a",
				"QueryString": null,
				"RetryPolicyId": "exponentialretry",
				"TopicName": "",
				"AcknowledgementTypeId": 0,
				"AuthenticationLifetimeExtensionSupported": false
			},
			"UgcFilmManifest": {
				"AuthorityId": "ugc",
				"Path": "/h5/films/ac560ffc-4de4-43c1-a0be-17853466350a",
				"QueryString": "?view=film-manifest",
				"RetryPolicyId": "exponentialretry",
				"TopicName": "",
				"AcknowledgementTypeId": 0,
				"AuthenticationLifetimeExtensionSupported": false
			}
		},
		"GameEvents": [
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": true,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [],
				"KillerWeaponStockId": 3168248199,
				"KillerWorldLocation": {
					"x": 8.773812,
					"y": 10.5993395,
					"z": 2.77330565
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 7.449304,
					"y": 11.5217876,
					"z": 2.40207648
				},
				"EventName": "Death",
				"TimeSinceStart": "PT23.6780258S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": 0.476041734,
					"y": -14.2113037,
					"z": 2.793554
				},
				"Victim": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -0.235386372,
					"y": -14.6573486,
					"z": 2.81892276
				},
				"EventName": "Death",
				"TimeSinceStart": "PT25.2980017S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "fumb1e fingers",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": 6.810507,
					"y": 11.6690855,
					"z": 2.43618
				},
				"Victim": {
					"Gamertag": "Atlas GV",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 3.40353823,
					"y": 11.9906225,
					"z": 3.66351867
				},
				"EventName": "Death",
				"TimeSinceStart": "PT28.2170307S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "fumb1e fingers",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [],
				"KillerWeaponStockId": 3190813201,
				"KillerWorldLocation": {
					"x": 11.7309217,
					"y": 10.917016,
					"z": 2.79180431
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 8.48594952,
					"y": 10.5274591,
					"z": 2.61292577
				},
				"EventName": "Death",
				"TimeSinceStart": "PT39.2410042S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Chopsticks",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": true,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": 8.570098,
					"y": 13.2867975,
					"z": 2.56591034
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 8.207122,
					"y": 13.1015577,
					"z": 2.44880486
				},
				"EventName": "Death",
				"TimeSinceStart": "PT45.6170018S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "fumb1e fingers",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": 4.88019371,
					"y": 12.157073,
					"z": 3.05428863
				},
				"Victim": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 9.295679,
					"y": 12.3932447,
					"z": 2.45104051
				},
				"EventName": "Death",
				"TimeSinceStart": "PT46.2850027S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": true,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "Atlas GV",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": -6.02260876,
					"y": -11.98582,
					"z": 2.47630429
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -5.60890055,
					"y": -11.9273853,
					"z": 2.4726007
				},
				"EventName": "Death",
				"TimeSinceStart": "PT54.0630012S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": true,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": -5.60890055,
					"y": -11.9273853,
					"z": 2.6976006
				},
				"Victim": {
					"Gamertag": "Atlas GV",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -6.02260876,
					"y": -11.98582,
					"z": 2.47630429
				},
				"EventName": "Death",
				"TimeSinceStart": "PT54.0720217S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -10.943676,
					"y": 1.93538773,
					"z": 3.66489816
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -12.1939459,
					"y": -3.315099,
					"z": 3.67080331
				},
				"EventName": "Death",
				"TimeSinceStart": "PT1M4.1020245S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [],
				"KillerWeaponStockId": 4106030681,
				"KillerWorldLocation": {
					"x": 8.093134,
					"y": 12.6733456,
					"z": 2.43445826
				},
				"Victim": {
					"Gamertag": "Atlas GV",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 2.65075326,
					"y": 16.0855122,
					"z": 2.48449
				},
				"EventName": "Death",
				"TimeSinceStart": "PT1M7.0130019S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": 8.535124,
					"y": 12.2638426,
					"z": 2.428881
				},
				"Victim": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 4.81788445,
					"y": 11.9297228,
					"z": 3.166339
				},
				"EventName": "Death",
				"TimeSinceStart": "PT1M10.6340219S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": -10.1390181,
					"y": 3.01058578,
					"z": 3.6617682
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -4.93985844,
					"y": 0.4941341,
					"z": 4.41875172
				},
				"EventName": "Death",
				"TimeSinceStart": "PT1M13.2680018S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": true,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 3808094875,
				"KillerWorldLocation": {
					"x": -12.6949015,
					"y": 3.09288716,
					"z": 3.897913
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -12.9811277,
					"y": 3.24746776,
					"z": 3.61904645
				},
				"EventName": "Death",
				"TimeSinceStart": "PT1M21.1510021S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": true,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -1.82934117,
					"y": -0.459428132,
					"z": 3.74958324
				},
				"Victim": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -2.17462587,
					"y": -0.305812359,
					"z": 3.64142585
				},
				"EventName": "Death",
				"TimeSinceStart": "PT1M25.3500017S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 2511447508,
				"KillerWorldLocation": {
					"x": -0.7411629,
					"y": 16.32378,
					"z": 3.1923275
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -4.350825,
					"y": 15.4256773,
					"z": 3.25244021
				},
				"EventName": "Death",
				"TimeSinceStart": "PT1M27.228002S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": true,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "Atlas GV",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [],
				"KillerWeaponStockId": 3168248199,
				"KillerWorldLocation": {
					"x": -0.550941348,
					"y": -6.22917938,
					"z": 2.5534668
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -0.5628153,
					"y": -6.78619,
					"z": 2.84921265
				},
				"EventName": "Death",
				"TimeSinceStart": "PT1M30.2980014S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": 9.767904,
					"y": -11.9403915,
					"z": 2.33191943
				},
				"Victim": {
					"Gamertag": "Atlas GV",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 1.52079272,
					"y": -11.9981794,
					"z": 2.32692027
				},
				"EventName": "Death",
				"TimeSinceStart": "PT1M36.1000255S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 3808094875,
				"KillerWorldLocation": {
					"x": 7.924988,
					"y": 1.77927375,
					"z": 4.296417
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 10.9065857,
					"y": 2.704011,
					"z": 3.64165616
				},
				"EventName": "Death",
				"TimeSinceStart": "PT1M45.8730031S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -1.59408724,
					"y": -7.83502865,
					"z": 3.00424385
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -1.94956315,
					"y": -4.782507,
					"z": 1.26905775
				},
				"EventName": "Death",
				"TimeSinceStart": "PT1M46.8830016S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -2.279443,
					"y": 14.10333,
					"z": 2.86754322
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -6.007624,
					"y": 12.7375984,
					"z": 3.90484643
				},
				"EventName": "Death",
				"TimeSinceStart": "PT2M0.2800012S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "halogan45",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 3808094875,
				"KillerWorldLocation": {
					"x": -8.027976,
					"y": -10.5931711,
					"z": 2.41358757
				},
				"Victim": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -9.466434,
					"y": -9.763489,
					"z": 2.36657238
				},
				"EventName": "Death",
				"TimeSinceStart": "PT2M2.1370267S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "halogan45",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Atlas GV",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": -13.7577763,
					"y": -4.57585669,
					"z": 4.02283669
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -11.36764,
					"y": -9.388254,
					"z": 2.70328641
				},
				"EventName": "Death",
				"TimeSinceStart": "PT2M6.9430018S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "halogan45",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -17.2064781,
					"y": -0.0362081081,
					"z": 1.55579925
				},
				"Victim": {
					"Gamertag": "Atlas GV",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -12.4173546,
					"y": -6.044989,
					"z": 1.168142
				},
				"EventName": "Death",
				"TimeSinceStart": "PT2M15.7320021S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Chopsticks",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": true,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -15.7183456,
					"y": -1.71070862,
					"z": 1.70873153
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -15.4115505,
					"y": -1.91421843,
					"z": 1.97995067
				},
				"EventName": "Death",
				"TimeSinceStart": "PT2M21.2790019S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Yiws",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": true,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -13.54069,
					"y": -5.466481,
					"z": 1.44210052
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -13.9137535,
					"y": -5.602371,
					"z": 1.21169257
				},
				"EventName": "Death",
				"TimeSinceStart": "PT2M26.3260024S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Chopsticks",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": -18.2915745,
					"y": 1.95770526,
					"z": 3.23181558
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -13.485673,
					"y": -5.200341,
					"z": 1.07476914
				},
				"EventName": "Death",
				"TimeSinceStart": "PT2M26.8430167S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": -16.9506435,
					"y": -5.523824,
					"z": 2.15527225
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -10.5131779,
					"y": -10.1444874,
					"z": 3.22603774
				},
				"EventName": "Death",
				"TimeSinceStart": "PT2M33.864002S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Atlas GV",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": 12.0340242,
					"y": 8.780151,
					"z": 2.00913787
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 12.4391432,
					"y": 9.111991,
					"z": -1.90037274
				},
				"EventName": "Death",
				"TimeSinceStart": "PT2M38.0410009S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": 12.7015524,
					"y": 9.066056,
					"z": -5.81399536
				},
				"Victim": {
					"Gamertag": "Atlas GV",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 11.8287411,
					"y": 9.308138,
					"z": -1.911559
				},
				"EventName": "Death",
				"TimeSinceStart": "PT2M39.0100021S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Chopsticks",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": true,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -12.5269308,
					"y": -0.921781659,
					"z": 3.68942
				},
				"Victim": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -12.0420237,
					"y": 1.23978627,
					"z": 3.741213
				},
				"EventName": "Death",
				"TimeSinceStart": "PT2M45.075002S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": true,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -12.25609,
					"y": 0.192149431,
					"z": 3.6299243
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -12.4460335,
					"y": -0.09813842,
					"z": 3.79300213
				},
				"EventName": "Death",
				"TimeSinceStart": "PT2M48.125002S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": 2.81366372,
					"y": 14.1128416,
					"z": 2.42559743
				},
				"Victim": {
					"Gamertag": "Atlas GV",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -3.91910958,
					"y": 15.52982,
					"z": 2.45394874
				},
				"EventName": "Death",
				"TimeSinceStart": "PT2M53.6440009S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Atlas GV",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -0.681576669,
					"y": 6.55036,
					"z": 4.0834
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 0.115376085,
					"y": 9.58414,
					"z": 2.304178
				},
				"EventName": "Death",
				"TimeSinceStart": "PT2M57.108001S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": 4.182133,
					"y": -12.7681322,
					"z": 3.164843
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -4.16095352,
					"y": -12.59685,
					"z": 3.167432
				},
				"EventName": "Death",
				"TimeSinceStart": "PT3M0.0130016S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": -10.0800591,
					"y": -10.4665718,
					"z": 2.60150313
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -3.79948926,
					"y": -13.4466648,
					"z": 3.28647923
				},
				"EventName": "Death",
				"TimeSinceStart": "PT3M13.0770214S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "halogan45",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 669296699,
				"KillerWorldLocation": {
					"x": -12.1200476,
					"y": -5.365135,
					"z": 3.66397524
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -10.8015575,
					"y": -7.84879,
					"z": 3.25140238
				},
				"EventName": "Death",
				"TimeSinceStart": "PT3M15.3570017S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": -12.6754017,
					"y": -2.35524344,
					"z": 4.5802145
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -12.38573,
					"y": -7.87115955,
					"z": 3.88902974
				},
				"EventName": "Death",
				"TimeSinceStart": "PT3M25.4620242S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": -12.5926523,
					"y": -7.868803,
					"z": 3.976133
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -12.675478,
					"y": -2.50875378,
					"z": 4.59906769
				},
				"EventName": "Death",
				"TimeSinceStart": "PT3M25.5620461S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "halogan45",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 2511447508,
				"KillerWorldLocation": {
					"x": -13.3751316,
					"y": -3.82751346,
					"z": 1.07588184
				},
				"Victim": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -11.3104677,
					"y": -8.796932,
					"z": 1.76947069
				},
				"EventName": "Death",
				"TimeSinceStart": "PT3M37.081001S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Yiws",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": 7.171266,
					"y": -12.5804081,
					"z": 2.32517838
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -4.826324,
					"y": -11.50173,
					"z": 2.4513
				},
				"EventName": "Death",
				"TimeSinceStart": "PT3M40.0060013S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Brxndn",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": -14.0476875,
					"y": -3.5873754,
					"z": 1.21228433
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -12.3930264,
					"y": -9.274175,
					"z": 1.82095242
				},
				"EventName": "Death",
				"TimeSinceStart": "PT3M48.8270007S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [],
				"KillerWeaponStockId": 3190813201,
				"KillerWorldLocation": {
					"x": -12.0854635,
					"y": -4.31008768,
					"z": 3.6724112
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -12.0828323,
					"y": -10.2149706,
					"z": 2.116475
				},
				"EventName": "Death",
				"TimeSinceStart": "PT3M52.4740039S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Brxndn",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": -13.57114,
					"y": -7.9343667,
					"z": 1.58349633
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -11.5621281,
					"y": -10.1046972,
					"z": 2.01092935
				},
				"EventName": "Death",
				"TimeSinceStart": "PT4M4.5110018S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Yiws",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": true,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": -12.6742105,
					"y": -0.0227327086,
					"z": 3.72358561
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -11.6833954,
					"y": -1.86394429,
					"z": 4.32431841
				},
				"EventName": "Death",
				"TimeSinceStart": "PT4M10.0340279S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": -17.3213787,
					"y": -1.16287291,
					"z": 1.028062
				},
				"Victim": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -10.252284,
					"y": 10.1553783,
					"z": 2.76494718
				},
				"EventName": "Death",
				"TimeSinceStart": "PT4M21.7260017S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Brxndn",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -12.1840649,
					"y": -1.74445152,
					"z": 3.71407
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -11.8057194,
					"y": -3.91448188,
					"z": 3.679586
				},
				"EventName": "Death",
				"TimeSinceStart": "PT4M25.6940297S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [],
				"KillerWeaponStockId": 4106030681,
				"KillerWorldLocation": {
					"x": -11.6633425,
					"y": -5.981335,
					"z": 3.56199574
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -11.6830435,
					"y": -2.22435427,
					"z": 4.31917572
				},
				"EventName": "Death",
				"TimeSinceStart": "PT4M28.3870019S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -11.419014,
					"y": 2.001802,
					"z": 3.67768621
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -11.6846189,
					"y": -2.85827327,
					"z": 3.99999142
				},
				"EventName": "Death",
				"TimeSinceStart": "PT4M39.7770021S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Brxndn",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": -11.5958014,
					"y": -7.3810463,
					"z": 3.23568225
				},
				"Victim": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -12.077673,
					"y": -2.254678,
					"z": 3.68577
				},
				"EventName": "Death",
				"TimeSinceStart": "PT4M43.4540018S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Chopsticks",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [],
				"KillerWeaponStockId": 3190813201,
				"KillerWorldLocation": {
					"x": -12.375576,
					"y": 0.139915988,
					"z": 3.71280861
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -8.790192,
					"y": 3.0781374,
					"z": 3.66550279
				},
				"EventName": "Death",
				"TimeSinceStart": "PT4M51.2220018S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "fumb1e fingers",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -0.164607123,
					"y": -1.51672983,
					"z": 3.64783645
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -6.30773926,
					"y": 1.93973219,
					"z": 4.246372
				},
				"EventName": "Death",
				"TimeSinceStart": "PT4M54.8580032S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Yiws",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -15.1007481,
					"y": -4.73077,
					"z": 1.05114651
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -12.1010361,
					"y": -3.34502435,
					"z": 1.79775381
				},
				"EventName": "Death",
				"TimeSinceStart": "PT5M7.4060115S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Yiws",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": -11.0832109,
					"y": -11.0005369,
					"z": 2.2457056
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -15.58835,
					"y": -3.65249014,
					"z": 1.06913877
				},
				"EventName": "Death",
				"TimeSinceStart": "PT5M8.6730016S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 3808094875,
				"KillerWorldLocation": {
					"x": -12.810957,
					"y": -3.573423,
					"z": 1.03997648
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -14.1153154,
					"y": -4.103719,
					"z": 1.08892179
				},
				"EventName": "Death",
				"TimeSinceStart": "PT5M22.2080232S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": 3.2449708,
					"y": 1.22085857,
					"z": 3.64151025
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 7.606731,
					"y": 2.22795367,
					"z": 4.21579552
				},
				"EventName": "Death",
				"TimeSinceStart": "PT5M29.8080028S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Chopsticks",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 3808094875,
				"KillerWorldLocation": {
					"x": 6.813448,
					"y": 0.7295478,
					"z": 3.745022
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 3.58055282,
					"y": 1.46999216,
					"z": 3.641564
				},
				"EventName": "Death",
				"TimeSinceStart": "PT5M33.554002S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 3808094875,
				"KillerWorldLocation": {
					"x": 12.1457787,
					"y": -3.19986963,
					"z": 4.72230244
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 13.9638834,
					"y": -4.13932657,
					"z": 3.42365241
				},
				"EventName": "Death",
				"TimeSinceStart": "PT5M40.3650248S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "halogan45",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": 9.605903,
					"y": -12.416811,
					"z": 2.32719445
				},
				"Victim": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 14.9794836,
					"y": -3.46858764,
					"z": 1.846741
				},
				"EventName": "Death",
				"TimeSinceStart": "PT5M43.446001S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Chopsticks",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": 1.32888639,
					"y": 1.7634716,
					"z": 3.64568758
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 2.936266,
					"y": -0.173949942,
					"z": 4.509706
				},
				"EventName": "Death",
				"TimeSinceStart": "PT5M54.0740349S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Yiws",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": 3.946416,
					"y": 0.454829752,
					"z": 3.64167333
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -7.92654133,
					"y": 1.20917809,
					"z": 3.663936
				},
				"EventName": "Death",
				"TimeSinceStart": "PT5M59.9330027S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 2,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": -4.54819965,
					"y": 1.07487857,
					"z": 3.6707
				},
				"Victim": null,
				"VictimAgent": 0,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 0,
					"y": 0.6947605,
					"z": 3.67441964
				},
				"EventName": "Death",
				"TimeSinceStart": "PT6M13.1160007S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": 2.643604,
					"y": -0.655777037,
					"z": 4.45559931
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -5.027116,
					"y": 0.5235469,
					"z": 3.72537112
				},
				"EventName": "Death",
				"TimeSinceStart": "PT6M13.916027S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Yiws",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": -9.603565,
					"y": 0.706613064,
					"z": 3.69022942
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -8.134394,
					"y": 0.8056462,
					"z": 4.35769033
				},
				"EventName": "Death",
				"TimeSinceStart": "PT6M20.0330019S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -7.998283,
					"y": 2.851763,
					"z": 3.87584782
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -10.4423122,
					"y": 2.51486683,
					"z": 4.561657
				},
				"EventName": "Death",
				"TimeSinceStart": "PT6M22.7000019S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Chopsticks",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": -12.2359686,
					"y": -7.820436,
					"z": 4.11446476
				},
				"Victim": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -13.474041,
					"y": -4.306193,
					"z": 1.77807927
				},
				"EventName": "Death",
				"TimeSinceStart": "PT6M30.4490013S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 669296699,
				"KillerWorldLocation": {
					"x": 1.484093,
					"y": -11.5602579,
					"z": 2.32401419
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 1.85534716,
					"y": -8.83809948,
					"z": 2.5084753
				},
				"EventName": "Death",
				"TimeSinceStart": "PT6M45.0650031S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -12.3342628,
					"y": -3.36883783,
					"z": 1.034603
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -14.0677643,
					"y": 1.04169714,
					"z": 0.9792602
				},
				"EventName": "Death",
				"TimeSinceStart": "PT6M48.9000358S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": 11.6724987,
					"y": -4.827766,
					"z": 1.0609169
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 5.549034,
					"y": 2.047388,
					"z": 1.0240767
				},
				"EventName": "Death",
				"TimeSinceStart": "PT6M51.4360021S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": 1.59397054,
					"y": 4.173645,
					"z": -0.7165607
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -2.21816254,
					"y": 4.01624632,
					"z": -0.7043257
				},
				"EventName": "Death",
				"TimeSinceStart": "PT6M58.482001S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 3808094875,
				"KillerWorldLocation": {
					"x": -9.328188,
					"y": 0.6926252,
					"z": 0.9821073
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -7.580877,
					"y": 1.24873459,
					"z": 1.01695108
				},
				"EventName": "Death",
				"TimeSinceStart": "PT7M6.3660012S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 3808094875,
				"KillerWorldLocation": {
					"x": -12.3222036,
					"y": -1.12509036,
					"z": 4.69161367
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -10.23791,
					"y": 1.52887392,
					"z": 3.671683
				},
				"EventName": "Death",
				"TimeSinceStart": "PT7M19.9000028S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": 1.09320056,
					"y": -1.81186259,
					"z": 3.64761925
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -3.10546255,
					"y": -0.369807452,
					"z": 3.64681983
				},
				"EventName": "Death",
				"TimeSinceStart": "PT7M24.2650034S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Chopsticks",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": -12.0599051,
					"y": -0.6987135,
					"z": 4.06733227
				},
				"Victim": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -9.396493,
					"y": 10.16297,
					"z": 2.78401875
				},
				"EventName": "Death",
				"TimeSinceStart": "PT7M25.6300016S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": true,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4153405209,
				"KillerWorldLocation": {
					"x": -12.0716724,
					"y": 1.23585749,
					"z": 3.73593235
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -12.4625244,
					"y": 0.9770086,
					"z": 3.78651857
				},
				"EventName": "Death",
				"TimeSinceStart": "PT7M41.8330017S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "fumb1e fingers",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 669296699,
				"KillerWorldLocation": {
					"x": -9.874373,
					"y": 10.6615391,
					"z": 3.57721186
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -11.8807383,
					"y": -0.7347809,
					"z": 3.7118206
				},
				"EventName": "Death",
				"TimeSinceStart": "PT7M42.8470012S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 3808094875,
				"KillerWorldLocation": {
					"x": 4.72264528,
					"y": 12.172143,
					"z": 3.137415
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 2.74456,
					"y": 10.8708,
					"z": 4.185916
				},
				"EventName": "Death",
				"TimeSinceStart": "PT7M54.2960018S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": -14.3925381,
					"y": -4.55647326,
					"z": 1.67130566
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -10.9559221,
					"y": -10.4790325,
					"z": 3.43785524
				},
				"EventName": "Death",
				"TimeSinceStart": "PT8M0.798002S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": 3.28535843,
					"y": 5.938441,
					"z": 3.68528128
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -1.18572032,
					"y": 10.2437382,
					"z": 4.28786659
				},
				"EventName": "Death",
				"TimeSinceStart": "PT8M16.6150008S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 3808094875,
				"KillerWorldLocation": {
					"x": 2.71057558,
					"y": 12.8534861,
					"z": 3.65327477
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 4.33572674,
					"y": 12.8873119,
					"z": 3.53164077
				},
				"EventName": "Death",
				"TimeSinceStart": "PT8M22.6960026S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Brxndn",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": 4.257218,
					"y": 12.8026667,
					"z": 3.500727
				},
				"Victim": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 2.7498138,
					"y": 12.8567553,
					"z": 3.65544677
				},
				"EventName": "Death",
				"TimeSinceStart": "PT8M22.7280018S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -1.76234353,
					"y": 5.62959051,
					"z": 3.65431762
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 0.7598316,
					"y": 4.760767,
					"z": 3.65245414
				},
				"EventName": "Death",
				"TimeSinceStart": "PT8M29.7160013S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Brxndn",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": 1.9368,
					"y": -7.3250885,
					"z": 2.30050445
				},
				"Victim": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 4.364265,
					"y": 1.58161628,
					"z": 1.06337345
				},
				"EventName": "Death",
				"TimeSinceStart": "PT8M49.5940027S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 2,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [],
				"KillerWeaponStockId": 4106030681,
				"KillerWorldLocation": {
					"x": 0.578287542,
					"y": 9.556906,
					"z": 2.86230683
				},
				"Victim": null,
				"VictimAgent": 0,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 0,
					"y": 0.6947605,
					"z": 3.67441964
				},
				"EventName": "Death",
				"TimeSinceStart": "PT8M57.1150045S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "fumb1e fingers",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [],
				"KillerWeaponStockId": 47178948,
				"KillerWorldLocation": {
					"x": 0.578287542,
					"y": 9.556906,
					"z": 2.86230683
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 0.8461318,
					"y": -0.6206762,
					"z": 3.64702678
				},
				"EventName": "Death",
				"TimeSinceStart": "PT8M57.1160283S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -5.092407,
					"y": 1.52143049,
					"z": 3.707977
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -8.002542,
					"y": 2.33159614,
					"z": 4.51544
				},
				"EventName": "Death",
				"TimeSinceStart": "PT9M1.7010017S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": -4.027441,
					"y": -13.8214512,
					"z": 2.48015261
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 3.36995053,
					"y": -12.4180937,
					"z": 3.213545
				},
				"EventName": "Death",
				"TimeSinceStart": "PT9M2.3790009S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": 3.26269913,
					"y": -12.4761829,
					"z": 3.302554
				},
				"Victim": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -3.98825073,
					"y": -13.888669,
					"z": 2.45963049
				},
				"EventName": "Death",
				"TimeSinceStart": "PT9M2.4100019S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": true,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -9.725787,
					"y": 2.07978,
					"z": 3.659636
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -10.0273266,
					"y": 2.26352119,
					"z": 3.66269779
				},
				"EventName": "Death",
				"TimeSinceStart": "PT9M15.9650345S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": -1.90352535,
					"y": -1.92001128,
					"z": 3.88373733
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 2.59017873,
					"y": -0.9071937,
					"z": 3.6426177
				},
				"EventName": "Death",
				"TimeSinceStart": "PT9M19.9590017S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "fumb1e fingers",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": -2.06780052,
					"y": 0.9574941,
					"z": 4.02347469
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 0.77403903,
					"y": -0.7224862,
					"z": 3.646898
				},
				"EventName": "Death",
				"TimeSinceStart": "PT9M22.9320019S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 669296699,
				"KillerWorldLocation": {
					"x": 11.4687166,
					"y": -7.671323,
					"z": 3.16188455
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 8.548393,
					"y": -11.3469391,
					"z": 2.332401
				},
				"EventName": "Death",
				"TimeSinceStart": "PT9M44.1250029S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Chopsticks",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -1.32922435,
					"y": -5.22392464,
					"z": 1.36950982
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -1.68045115,
					"y": -2.244451,
					"z": 1.34461462
				},
				"EventName": "Death",
				"TimeSinceStart": "PT9M46.4280014S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "fumb1e fingers",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": -1.74906528,
					"y": -6.65894747,
					"z": 1.99926949
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -1.964113,
					"y": -3.22373343,
					"z": 1.01596487
				},
				"EventName": "Death",
				"TimeSinceStart": "PT9M48.1370024S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Yiws",
						"Xuid": null
					},
					{
						"Gamertag": "halogan45",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": 7.315398,
					"y": -14.6050138,
					"z": 2.32649183
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 4.322195,
					"y": -15.5795059,
					"z": 2.72708035
				},
				"EventName": "Death",
				"TimeSinceStart": "PT10M1.0260028S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Yiws",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": 9.187825,
					"y": -12.1342688,
					"z": 2.32797074
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -1.746442,
					"y": -13.7793217,
					"z": 3.26866937
				},
				"EventName": "Death",
				"TimeSinceStart": "PT10M3.6790016S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Brxndn",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [],
				"KillerWeaponStockId": 2460880172,
				"KillerWorldLocation": {
					"x": -1.72767282,
					"y": -13.9663324,
					"z": 3.267806
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 9.036444,
					"y": -10.5361252,
					"z": 3.216616
				},
				"EventName": "Death",
				"TimeSinceStart": "PT10M4.2900021S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "fumb1e fingers",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": true,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": 2.00487328,
					"y": -11.6268539,
					"z": 2.86766839
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 1.803816,
					"y": -11.7418194,
					"z": 2.92495346
				},
				"EventName": "Death",
				"TimeSinceStart": "PT10M20.6280021S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "Brxndn",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": 8.978563,
					"y": -11.2635765,
					"z": 2.337727
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 1.90464723,
					"y": -13.28179,
					"z": 2.32729077
				},
				"EventName": "Death",
				"TimeSinceStart": "PT10M22.5770006S"
			},
			{
				"Assistants": [
					{
						"Gamertag": "halogan45",
						"Xuid": null
					}
				],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 3808094875,
				"KillerWorldLocation": {
					"x": 13.2576008,
					"y": -5.911268,
					"z": 1.0433805
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 11.4326267,
					"y": -9.613926,
					"z": 2.47950077
				},
				"EventName": "Death",
				"TimeSinceStart": "PT10M28.0100016S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": -1.96903861,
					"y": -14.8428907,
					"z": 2.77919841
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 6.631111,
					"y": -15.0549278,
					"z": 2.32677484
				},
				"EventName": "Death",
				"TimeSinceStart": "PT10M37.675026S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 3808094875,
				"KillerWorldLocation": {
					"x": -7.04701,
					"y": -12.378294,
					"z": 3.44084668
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -8.687909,
					"y": -9.928979,
					"z": 3.15665078
				},
				"EventName": "Death",
				"TimeSinceStart": "PT10M46.2390018S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": true,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": 12.3632278,
					"y": -5.863775,
					"z": 1.05793309
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 12.7021465,
					"y": -5.98120928,
					"z": 1.06852341
				},
				"EventName": "Death",
				"TimeSinceStart": "PT10M47.5720012S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 2511447508,
				"KillerWorldLocation": {
					"x": -5.002497,
					"y": 14.5770292,
					"z": 2.7927382
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -10.0977592,
					"y": 11.5830956,
					"z": 2.5465
				},
				"EventName": "Death",
				"TimeSinceStart": "PT11M1.7400012S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 669296699,
				"KillerWorldLocation": {
					"x": 15.01336,
					"y": -4.17028332,
					"z": 1.29209709
				},
				"Victim": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 15.7967024,
					"y": -1.6643244,
					"z": 1.75721574
				},
				"EventName": "Death",
				"TimeSinceStart": "PT11M3.3940061S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": 0.03099436,
					"y": 4.194796,
					"z": 3.66012955
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -13.5265045,
					"y": 5.33353,
					"z": -2.996565
				},
				"EventName": "Death",
				"TimeSinceStart": "PT11M10.8230137S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1095363701
				],
				"KillerWeaponStockId": 313138863,
				"KillerWorldLocation": {
					"x": 2.288557,
					"y": -0.9106298,
					"z": 3.64300942
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 3.2402246,
					"y": 1.81617689,
					"z": 3.85340118
				},
				"EventName": "Death",
				"TimeSinceStart": "PT11M15.1590015S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					2758383128
				],
				"KillerWeaponStockId": 4096745987,
				"KillerWorldLocation": {
					"x": 3.33921528,
					"y": 1.77612317,
					"z": 3.8339467
				},
				"Victim": {
					"Gamertag": "Brxndn",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 2.353623,
					"y": -0.8604093,
					"z": 3.64275241
				},
				"EventName": "Death",
				"TimeSinceStart": "PT11M15.2080017S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 0,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": false,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": false,
				"Killer": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [],
				"KillerWeaponStockId": 2457457776,
				"KillerWorldLocation": {
					"x": -13.806201,
					"y": 5.01037,
					"z": -2.03304052
				},
				"Victim": {
					"Gamertag": "halogan45",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": -13.806201,
					"y": 5.01037,
					"z": -2.03304052
				},
				"EventName": "Death",
				"TimeSinceStart": "PT11M20.3870014S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": 11.6914692,
					"y": -4.38360548,
					"z": 1.09407687
				},
				"Victim": {
					"Gamertag": "fumb1e fingers",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 6.48627949,
					"y": 0.282572716,
					"z": 1.02425194
				},
				"EventName": "Death",
				"TimeSinceStart": "PT11M28.9870009S"
			},
			{
				"Assistants": [],
				"DeathDisposition": 1,
				"IsAssassination": false,
				"IsGroundPound": false,
				"IsHeadshot": true,
				"IsMelee": false,
				"IsShoulderBash": false,
				"IsWeapon": true,
				"Killer": {
					"Gamertag": "Yiws",
					"Xuid": null
				},
				"KillerAgent": 1,
				"KillerWeaponAttachmentIds": [
					1327094800
				],
				"KillerWeaponStockId": 424645655,
				"KillerWorldLocation": {
					"x": 12.300375,
					"y": -10.34493,
					"z": 3.17240477
				},
				"Victim": {
					"Gamertag": "Chopsticks",
					"Xuid": null
				},
				"VictimAgent": 1,
				"VictimAttachmentIds": [],
				"VictimStockId": 0,
				"VictimWorldLocation": {
					"x": 14.2168627,
					"y": -4.706072,
					"z": 4.3707056
				},
				"EventName": "Death",
				"TimeSinceStart": "PT11M35.4380015S"
			}
		],
		"IsCompleteSetOfEvents": true
	};

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* global XMLHttpRequest */
	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var b64decode = __webpack_require__(298);
	var PREFIXED = /^(@[\w-]+)\/(.*)$/;
	var AUDIO = /\.(mp3|wav|ogg)/;

	function merge(dest, src) {
	  Object.keys(src).forEach(function (k) {
	    dest[k] = src[k];
	  });
	  return dest;
	}

	/**
	 * Create a sample loader
	 *
	 * @param {AudioContext} ac - the audio context
	 * @param {HashMap} options - (Optional) options. The options can include:
	 * @return {Function} a load function
	 */
	function loader(ac, options) {
	  var opts = options || {};
	  var fetch = opts.fetch || httpRequest;
	  var prefixes = merge({}, PREFIXES);
	  if (opts.sources) merge(prefixes, opts.sources);

	  return function load(value) {
	    if (value instanceof Promise) return value.then(function (v) {
	      return load(v);
	    });

	    if (value instanceof ArrayBuffer) return loadArrayBuffer(ac, value);else if (Array.isArray(value)) return loadArrayData(value, load);else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') return loadObjectData(value, load);else if (typeof value === 'string') {
	      if (/^data:audio/.test(value)) return decodeBase64(value, load);else if (/\.json$/.test(value)) return loadJsonFile(value, load, fetch);else if (PREFIXED.test(value)) return loadPrefix(prefixes, value, load, fetch);else if (AUDIO.test(value)) return loadAudioFile(value, load, fetch);else return Promise.resolve(value);
	    } else return Promise.resolve(value);
	  };
	}

	function loadArrayBuffer(ac, data) {
	  if (!(data instanceof ArrayBuffer)) return null;
	  return new Promise(function (done, reject) {
	    ac.decodeAudioData(data, function (buffer) {
	      done(buffer);
	    }, function () {
	      reject("Can't decode audio data (" + data.slice(0, 30) + '...)');
	    });
	  });
	}

	function loadArrayData(array, load) {
	  return Promise.all(array.map(load));
	}

	function loadObjectData(source, load) {
	  var dest = {};
	  var promises = Object.keys(source).map(function (key) {
	    return load(source[key]).then(function (result) {
	      dest[key] = result;
	    });
	  });
	  return Promise.all(promises).then(function () {
	    return dest;
	  });
	}

	function decodeBase64(data, load) {
	  var payload = data.split(',')[1];
	  return load(b64decode(payload).buffer);
	}

	function loadAudioFile(url, load, fetch) {
	  return load(fetch(url, 'arraybuffer'));
	}

	function loadJsonFile(url, load, fetch) {
	  return load(fetch(url, 'json'));
	}

	function loadPrefix(prefixes, value, load, fetch) {
	  var m = PREFIXED.exec(value);
	  var prefix = m[1];
	  var path = m[2];
	  var fn = prefixes[prefix];
	  if (!fn) return Promise.reject('Unknown prefix: ' + prefix);else if (typeof fn === 'function') return fn(path, load, fetch);else return load(fn + '/' + path);
	}

	var PREFIXES = {
	  '@midijs': function midijs(url, load, fetch) {
	    return fetch(url, 'text').then(function (data) {
	      var begin = data.indexOf('MIDI.Soundfont.');
	      if (begin < 0) throw Error('Invalid MIDI.js Soundfont format');
	      begin = data.indexOf('=', begin) + 2;
	      var end = data.lastIndexOf(',');
	      return JSON.parse(data.slice(begin, end) + '}');
	    }).then(load);
	  },
	  '@soundfont': function soundfont(name, load) {
	    var url = 'https://cdn.rawgit.com/gleitz/midi-js-Soundfonts/master/FluidR3_GM/' + name + '-ogg.js';
	    return load('@midijs/' + url);
	  },
	  '@drum-machines': function drumMachines(name, load) {
	    var path = name + '/' + name + '.json';
	    var url = 'https://cdn.rawgit.com/danigb/smplr/master/packages/drum-machines/' + path;
	    return load(url);
	  }
	};

	/**
	 * Wrap a GET request into a promise
	 *
	 * @private
	 */
	function httpRequest(url, type) {
	  return new Promise(function (done, reject) {
	    var req = new XMLHttpRequest();
	    if (type) req.responseType = type;
	    req.open('GET', url);

	    req.onload = function () {
	      if (req.status === 200) {
	        done(req.response);
	      } else {
	        reject(Error(req.statusText));
	      }
	    };
	    req.onerror = function () {
	      reject(Error('Network Error'));
	    };
	    req.send();
	  });
	}

	if (( false ? 'undefined' : _typeof(module)) === 'object' && module.exports) module.exports = loader;
	if (typeof window !== 'undefined') window.loader = loader;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(180)(module)))

/***/ },

/***/ 298:
/***/ function(module, exports) {

	'use strict';

	function b64ToUint6(nChr) {
	  return nChr > 64 && nChr < 91 ? nChr - 65 : nChr > 96 && nChr < 123 ? nChr - 71 : nChr > 47 && nChr < 58 ? nChr + 4 : nChr === 43 ? 62 : nChr === 47 ? 63 : 0;
	}

	// Decode Base64 to Uint8Array
	// ---------------------------
	function base64DecodeToArray(sBase64, nBlocksSize) {
	  var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, "");
	  var nInLen = sB64Enc.length;
	  var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
	  var taBytes = new Uint8Array(nOutLen);

	  for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
	    nMod4 = nInIdx & 3;
	    nUint24 |= b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
	    if (nMod4 === 3 || nInLen - nInIdx === 1) {
	      for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
	        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
	      }
	      nUint24 = 0;
	    }
	  }
	  return taBytes;
	}

	module.exports = base64DecodeToArray;

/***/ }

});