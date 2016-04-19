webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _controls = __webpack_require__(295);

	var _controls2 = _interopRequireDefault(_controls);

	var _match_view = __webpack_require__(1);

	var _match_view2 = _interopRequireDefault(_match_view);

	var _event_list = __webpack_require__(178);

	var _event_list2 = _interopRequireDefault(_event_list);

	var _sound_manager = __webpack_require__(279);

	var _sound_manager2 = _interopRequireDefault(_sound_manager);

	var _sine = __webpack_require__(283);

	var _sine2 = _interopRequireDefault(_sine);

	var _weird_male_screams = __webpack_require__(288);

	var _weird_male_screams2 = _interopRequireDefault(_weird_male_screams);

	var _theremin = __webpack_require__(291);

	var _theremin2 = _interopRequireDefault(_theremin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(20);
	var ReactDOM = __webpack_require__(177);

	var DeathStream = __webpack_require__(285);

	var matchId = "5b27a620-cebf-40a3-b09c-a37f15fd135f";

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

	                _this2.setState({ stream: stream });
	            }).catch(function (x) {
	                return console.error(x);
	            });

	            this._soundManager.playAmbient('../sounds/spaceambient.mp3');
	        }
	    }, {
	        key: 'onEventFocus',
	        value: function onEventFocus(event) {
	            // this.viewer.highlightEvent(event);
	        }
	    }, {
	        key: 'onEventActivate',
	        value: function onEventActivate(event, data) {
	            this._soundManager.play(event, Object.assign({}, data, { stream: this.state.stream }));
	            this._eventCallback(event);
	        }
	    }, {
	        key: 'onTimelineEvent',
	        value: function onTimelineEvent(event) {
	            this.setState({ shownEvents: new Set(this.state.shownEvents).add(event) });
	            this._soundManager.play(event);
	        }
	    }, {
	        key: 'onPositionChange',
	        value: function onPositionChange(before, after) {
	            this.setState({ shownEvents: new Set(before) });
	            this._soundManager.stopAll();
	        }
	    }, {
	        key: 'onPlay',
	        value: function onPlay() {}
	    }, {
	        key: 'onPause',
	        value: function onPause() {
	            this._soundManager.stopAll();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            return React.createElement(
	                'div',
	                { className: 'container' },
	                React.createElement(_event_list2.default, { registerOnEvent: function registerOnEvent(f) {
	                        _this3._eventCallback = f;
	                    } }),
	                React.createElement(_match_view2.default, {
	                    stream: this.state.stream,
	                    shownEvents: this.state.shownEvents,
	                    onEventActivate: this.onEventActivate.bind(this) }),
	                React.createElement(_controls2.default, { stream: this.state.stream,
	                    onEventFocus: this.onEventFocus.bind(this),
	                    onTimelineEvent: this.onTimelineEvent.bind(this),
	                    onPositionChange: this.onPositionChange.bind(this),
	                    onPlay: this.onPlay.bind(this),
	                    onPause: this.onPause.bind(this) }),
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
	                this.setState({ shownEvents: new Set(nextProps.shownEvents || []) });
	                nextProps.stream.forEach(function (event) {
	                    return _this2._3dview.addEvent(event, true);
	                });
	                this._3dview.setBounds(nextProps.stream.bounds);
	                return;
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

	            this._3dview.render();
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

	var killerColor = new _three2.default.Color(0xff00ff);
	var victimColor = new _three2.default.Color(0x00ffff);

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
	        }

	        /**
	         * Setup the initial camera.
	         */

	    }, {
	        key: 'initCamera',
	        value: function initCamera() {
	            var _getViewportSize = this.getViewportSize();

	            var _getViewportSize2 = _slicedToArray(_getViewportSize, 2);

	            var viewWidth = _getViewportSize2[0];
	            var viewHeight = _getViewportSize2[1];

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
	                var effectHorizBlur = new _three2.default.ShaderPass(_three2.default.HorizontalBlurShader);
	                var effectVertiBlur = new _three2.default.ShaderPass(_three2.default.VerticalBlurShader);

	                var _getViewportSize3 = this.getViewportSize();

	                var _getViewportSize4 = _slicedToArray(_getViewportSize3, 2);

	                var viewWidth = _getViewportSize4[0];
	                var viewHeight = _getViewportSize4[1];

	                effectHorizBlur.uniforms["h"].value = 2 / viewWidth;
	                effectVertiBlur.uniforms["v"].value = 2 / viewHeight;
	                this._composer.addPass(effectHorizBlur);
	                this._composer.addPass(effectVertiBlur);
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
	        key: 'getViewportSize',
	        value: function getViewportSize() {
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
	    }, {
	        key: '_getObjectForEvent',
	        value: function _getObjectForEvent(event) {
	            return this._scene.getObjectByName(event.Id);
	        }
	    }, {
	        key: 'showEvent',
	        value: function showEvent(event) {
	            var obj = this._getObjectForEvent(event);
	            if (obj) {
	                obj.visible = true;
	            }
	        }
	    }, {
	        key: 'hideEvent',
	        value: function hideEvent(event) {
	            var obj = this._getObjectForEvent(event);
	            if (obj) {
	                obj.visible = false;
	            }
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
	    }, {
	        key: 'showEvent',
	        value: function showEvent(event) {
	            var target = this._scene.getObjectByName(event.Id);
	            if (!target) return;
	            target.visible = true;
	        }

	        /**
	         * Handle window resize events.
	         */

	    }, {
	        key: 'onWindowResize',
	        value: function onWindowResize() {
	            var _getViewportSize5 = this.getViewportSize();

	            var _getViewportSize6 = _slicedToArray(_getViewportSize5, 2);

	            var width = _getViewportSize6[0];
	            var height = _getViewportSize6[1];

	            this._camera.aspect = width / height;
	            this._camera.updateProjectionMatrix();
	            this._renderer.setSize(width, height);
	            this._composer.setSize(width, height);
	            this._composer2.setSize(width, height);
	        }

	        /**
	         * Handle mouse down events.
	         */

	    }, {
	        key: 'onMouseDown',
	        value: function onMouseDown(event) {
	            if (event.button === _three2.default.MOUSE.LEFT) {
	                this.isMouseDown = true;
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
	         * Handle mouse move events.
	         */

	    }, {
	        key: 'onMouseMove',
	        value: function onMouseMove(event) {
	            var _getViewportSize7 = this.getViewportSize();

	            var _getViewportSize8 = _slicedToArray(_getViewportSize7, 2);

	            var width = _getViewportSize8[0];
	            var height = _getViewportSize8[1];


	            var previousMouse = this.mouse;
	            this.mouse = new _three2.default.Vector2(event.clientX / width * 2 - 1, -(event.clientY / height) * 2 + 1);

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

	    function handleTouchStartRotate(event) {

	        //console.log( 'handleTouchStartRotate' );

	        rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
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

	    function handleTouchMoveRotate(event) {

	        //console.log( 'handleTouchMoveRotate' );

	        rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
	        rotateDelta.subVectors(rotateEnd, rotateStart);

	        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

	        // rotating across whole screen goes 360 degrees around
	        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

	        // rotating up and down along whole screen attempts to go 360, but limited to 180
	        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

	        rotateStart.copy(rotateEnd);

	        scope.update();
	    }

	    function handleTouchMoveDolly(event) {

	        //console.log( 'handleTouchMoveDolly' );

	        var dx = event.touches[0].pageX - event.touches[1].pageX;
	        var dy = event.touches[0].pageY - event.touches[1].pageY;

	        var distance = Math.sqrt(dx * dx + dy * dy);

	        dollyEnd.set(0, distance);

	        dollyDelta.subVectors(dollyEnd, dollyStart);

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

	            case 1:
	                // one-fingered touch: rotate

	                if (scope.enableRotate === false) return;

	                handleTouchStartRotate(event);

	                state = STATE.TOUCH_ROTATE;

	                break;

	            case 2:
	                // two-fingered touch: dolly

	                if (scope.enableZoom === false) return;

	                handleTouchStartDolly(event);

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

	        event.preventDefault();
	        event.stopPropagation();

	        switch (event.touches.length) {

	            case 1:
	                // one-fingered touch: rotate

	                if (scope.enableRotate === false) return;
	                if (state !== STATE.TOUCH_ROTATE) return; // is this needed?...

	                handleTouchMoveRotate(event);

	                break;

	            case 2:
	                // two-fingered touch: dolly

	                if (scope.enableZoom === false) return;
	                if (state !== STATE.TOUCH_DOLLY) return; // is this needed?...

	                handleTouchMoveDolly(event);

	                break;

	            case 3:
	                // three-fingered touch: pan

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
	}; /**
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

	var _buffer_loader = __webpack_require__(282);

	var _buffer_loader2 = _interopRequireDefault(_buffer_loader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var reverbNode = _audio_context2.default.createReverbFromUrl("../sounds/reverb/TerrysFactoryWarehouse.m4a", function () {
	    reverbNode.connect(_audio_context2.default.destination);
	    ambientGain.connect(reverbNode);
	});

	var ambientGain = _audio_context2.default.createGain();
	ambientGain.gain.value = 0.4;

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

	    /**
	     * Play a sound for a given event.
	     */


	    _createClass(SoundManager, [{
	        key: 'play',
	        value: function play(event, data) {
	            var _this = this;

	            var audio = {
	                ctx: _audio_context2.default,
	                destination: reverbNode
	            };
	            this._generators.forEach(function (generator) {
	                var _generator = generator(audio, event, data);

	                var sound = _generator.sound;
	                var duration = _generator.duration;

	                _this._playSound(sound, duration);
	            });
	        }

	        /**
	         * Play a looping ambient sound.
	         */

	    }, {
	        key: 'playAmbient',
	        value: function playAmbient(file) {
	            var _this2 = this;

	            var bufferLoader = new _buffer_loader2.default(_audio_context2.default, [file], function (buffers) {
	                var source = _audio_context2.default.createBufferSource();
	                source.buffer = buffers[0];
	                source.loop = true;
	                source.connect(ambientGain);
	                source.start();
	                _this2._longPlaying.add(source);
	            });
	            bufferLoader.load();
	        }

	        /**
	         * Stop all playing audio.
	         */

	    }, {
	        key: 'stopAll',
	        value: function stopAll() {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = this._playing[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var x = _step.value;

	                    x.stop();
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

	var _reverb = __webpack_require__(281);

	var _reverb2 = _interopRequireDefault(_reverb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ctx = new (window.AudioContext || window.webkitAudioContext)();
	_reverb2.default.extend(ctx);
	exports.default = ctx;

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

/***/ 282:
/***/ function(module, exports) {

	"use strict";
	//http://www.html5rocks.com/en/tutorials/webaudio/intro/#toc-abstract

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = BufferLoader;
	function BufferLoader(context, urlList, callback) {
	    this.context = context;
	    this.urlList = urlList;
	    this.onload = callback;
	    this.bufferList = new Array();
	    this.loadCount = 0;
	}

	BufferLoader.prototype.loadBuffer = function (url, index) {
	    // Load buffer asynchronously
	    var request = new XMLHttpRequest();
	    request.open("GET", url, true);
	    request.responseType = "arraybuffer";

	    var loader = this;

	    request.onload = function () {
	        // Asynchronously decode the audio file data in request.response
	        loader.context.decodeAudioData(request.response, function (buffer) {
	            if (!buffer) {
	                alert('error decoding file data: ' + url);
	                return;
	            }
	            loader.bufferList[index] = buffer;
	            if (++loader.loadCount == loader.urlList.length) loader.onload(loader.bufferList);
	        }, function (error) {
	            console.error('decodeAudioData error', error);
	        });
	    };

	    request.onerror = function () {
	        alert('BufferLoader: XHR error');
	    };

	    request.send();
	};

	BufferLoader.prototype.load = function () {
	    for (var i = 0; i < this.urlList.length; ++i) {
	        this.loadBuffer(this.urlList[i], i);
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

	    return {
	        sound: {
	            play: function play() {
	                gainNode.gain.setValueAtTime(0, audio.ctx.currentTime);
	                gainNode.gain.linearRampToValueAtTime(gain, audio.ctx.currentTime + duration * 0.2);
	                gainNode.gain.setValueAtTime(gain, audio.ctx.currentTime + duration * 0.5);
	                gainNode.gain.linearRampToValueAtTime(0, audio.ctx.currentTime + duration * 1);

	                xOscillator.start();

	                xOscillator.stop(audio.ctx.currentTime + duration);
	            },
	            stop: function stop() {
	                xOscillator.stop();
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
	        return tree.insert(event.TimeSinceStart, event);
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
	                return f(x);
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

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _file = __webpack_require__(289);

	var _file2 = _interopRequireDefault(_file);

	var _weapon = __webpack_require__(284);

	var _weapon2 = _interopRequireDefault(_weapon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sounds = ["65__plagasul__cjipie.wav", "66__plagasul__indios.wav", "67__plagasul__indios2.wav", "68__plagasul__indios3.wav", "69__plagasul__ohm-loko.wav", "70__plagasul__eh.wav", "71__plagasul__hruuhb.wav", "72__plagasul__houb.wav", "73__plagasul__houu.wav", "74__plagasul__jah.wav", "75__plagasul__jhuee.wav", "76__plagasul__joooaah.wav", "77__plagasul__juob.wav", "78__plagasul__jueb.wav", "79__plagasul__long-scream.wav", "80__plagasul__oaaaahmmm.wav", "81__plagasul__uehea.wav", "82__plagasul__uhraa.wav", "83__plagasul__uoh.wav", "84__plagasul__uueh.wav", "85__plagasul__jeeh.wav"];

	exports.default = (0, _file2.default)('/sounds/weird-male-screams/', (0, _weapon2.default)(function (weapon) {
	    return sounds[Math.floor(Math.random() * sounds.length)];

	    switch (weapon && weapon.name) {
	        case 'spartan':
	            return '79__plagasul__long-scream.wav';
	        case 'magnum':
	            return '70__plagasul__eh.wav';
	        case 'weapon-splinter-grenade':
	            return '69__plagasul__ohm-loko.wav';

	        case "assault-rifle":
	        case "ball":
	        case "banshee":
	        case "battle-rifle":
	        case "beam-rifle":
	        case "binary-rifle":
	        case "boltshot":
	        case "carbine":
	        case "chaingun-turret":
	        case "dmr":
	        case "energy-sword":
	        case "environmental-explosives":
	        case "flagnum":
	        case "forerunner-beam-turret":
	        case "frag-grenade":
	        case "fuel-rod-cannon":
	        case "gauss-turret":
	        case "ghost":
	        case "gravity-hammer":
	        case "halo-2-battle-rifle":
	        case "halo-one-pistol":
	        case "hydra-launcher":
	        case "incineration-cannon":
	        case "lightrifle":
	        case "magnum":
	        case "mantis":
	        case "mongoose":
	        case "needler":
	        case "phaeton":
	        case "phantom-chin-gun":
	        case "phantom":
	        case "plasma-caster":
	        case "plasma-grenade":
	        case "plasma-pistol":
	        case "railgun":
	        case "rocket-launcher":
	        case "rocket-pod-turret":
	        case "saw":
	        case "scattershot":
	        case "scorpion-anti-infantry-turret":
	        case "scorpion":
	        case "shade-aa-turret":
	        case "shade-plasma-turret":
	        case "shotgun":
	        case "smg":
	        case "sniper-rifle":
	        case "spartan-laser":
	        case "spartan":
	        case "spirit-chin-gun":
	        case "splinter-grenade":
	        case "splinter-turret":
	        case "spnkr-rocket-launcher":
	        case "storm-rifle":
	        case "suppressor":
	        case "unsc-auto-turret":
	        case "warthog":
	        case "wraith-anti-infantry-turret":
	        case "wraith":

	        default:
	            return '85__plagasul__jeeh.wav';
	    }
	}));

/***/ },

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Wad = __webpack_require__(290);

	/**
	 * Helper that adds weapon info to generator.
	 */

	exports.default = function (root, mapper) {
	    return function (audioCtx, event, data) {
	        var fileName = mapper(audioCtx, event, data);
	        return {
	            sound: new Wad({ source: root + fileName })
	        };
	    };
	};

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/
	(function() {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};(function(root,factory){if(true){ // AMD. Register as an anonymous module unless amdModuleId is set
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else if((typeof exports==='undefined'?'undefined':_typeof(exports))==='object'){ // Node. Does not work with strict CommonJS, but
	// only CommonJS-like environments that support module.exports,
	// like Node.
	module.exports=factory();}else {root['Wad']=factory();}})(undefined,function(){(function(window){var WORKER_PATH='recorderWorker.js';var Recorder=function Recorder(source,cfg){var config=cfg||{};var bufferLen=config.bufferLen||4096;var numChannels=config.numChannels||2;this.context=source.context;this.node=(this.context.createScriptProcessor||this.context.createJavaScriptNode).call(this.context,bufferLen,numChannels,numChannels);var worker=new Worker(config.workerPath||WORKER_PATH);worker.postMessage({command:'init',config:{sampleRate:this.context.sampleRate,numChannels:numChannels}});var recording=false,currCallback;this.node.onaudioprocess=function(e){if(!recording)return;var buffer=[];for(var channel=0;channel<numChannels;channel++){buffer.push(e.inputBuffer.getChannelData(channel));}worker.postMessage({command:'record',buffer:buffer});};this.configure=function(cfg){for(var prop in cfg){if(cfg.hasOwnProperty(prop)){config[prop]=cfg[prop];}}};this.record=function(){recording=true;};this.stop=function(){recording=false;};this.clear=function(){worker.postMessage({command:'clear'});};this.getBuffer=function(cb){currCallback=cb||config.callback;worker.postMessage({command:'getBuffer'});};this.exportWAV=function(cb,type){currCallback=cb||config.callback;type=type||config.type||'audio/wav';if(!currCallback)throw new Error('Callback not set');worker.postMessage({command:'exportWAV',type:type});};worker.onmessage=function(e){var blob=e.data;currCallback(blob);};source.connect(this.node);this.node.connect(this.context.destination); //this should not be necessary
	};Recorder.forceDownload=function(blob,filename){var url=(window.URL||window.webkitURL).createObjectURL(blob);var link=window.document.createElement('a');link.href=url;link.download=filename||'output.wav';var click=document.createEvent("Event");click.initEvent("click",true,true);link.dispatchEvent(click);};window.Recorder=Recorder;})(window);; /*
	    Copyright (c) 2012 DinahMoe AB & Oskar Eriksson

	    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
	    files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
	    modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
	    is furnished to do so, subject to the following conditions:

	    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
	    OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	*/(function(window){var userContext,userInstance,pipe=function pipe(param,val){param.value=val;},Super=Object.create(null,{activate:{writable:true,value:function value(doActivate){if(doActivate){this.input.disconnect();this.input.connect(this.activateNode);if(this.activateCallback){this.activateCallback(doActivate);}}else {this.input.disconnect();this.input.connect(this.output);}}},bypass:{get:function get(){return this._bypass;},set:function set(value){if(this._lastBypassValue===value){return;}this._bypass=value;this.activate(!value);this._lastBypassValue=value;}},connect:{value:function value(target){this.output.connect(target);}},disconnect:{value:function value(target){this.output.disconnect(target);}},connectInOrder:{value:function value(nodeArray){var i=nodeArray.length-1;while(i--){if(!nodeArray[i].connect){return console.error("AudioNode.connectInOrder: TypeError: Not an AudioNode.",nodeArray[i]);}if(nodeArray[i+1].input){nodeArray[i].connect(nodeArray[i+1].input);}else {nodeArray[i].connect(nodeArray[i+1]);}}}},getDefaults:{value:function value(){var result={};for(var key in this.defaults){result[key]=this.defaults[key].value;}return result;}},automate:{value:function value(property,_value,duration,startTime){var start=startTime?~ ~(startTime/1000):userContext.currentTime,dur=duration?~ ~(duration/1000):0,_is=this.defaults[property],param=this[property],method;if(param){if(_is.automatable){if(!duration){method="setValueAtTime";}else {method="linearRampToValueAtTime";param.cancelScheduledValues(start);param.setValueAtTime(param.value,start);}param[method](_value,dur+start);}else {param=_value;}}else {console.error("Invalid Property for "+this.name);}}}}),FLOAT="float",BOOLEAN="boolean",STRING="string",INT="int";if(typeof module!=="undefined"&&module.exports){module.exports=Tuna;}else if(true){window.define("Tuna",definition);}else {window.Tuna=Tuna;}function definition(){return Tuna;}function Tuna(context){if(!(this instanceof Tuna)){return new Tuna(context);}if(!window.AudioContext){window.AudioContext=window.webkitAudioContext;}if(!context){console.log("tuna.js: Missing audio context! Creating a new context for you.");context=window.AudioContext&&new window.AudioContext();}if(!context){throw new Error("Tuna cannot initialize because this environment does not support web audio.");}connectify(context);userContext=context;userInstance=this;}function connectify(context){if(context.__connectified__===true)return;var gain=context.createGain(),proto=Object.getPrototypeOf(Object.getPrototypeOf(gain)),oconnect=proto.connect;proto.connect=shimConnect;context.__connectified__=true; // Prevent overriding connect more than once
	function shimConnect(){var args=Array.prototype.slice.call(arguments);var node=args.shift();node=Super.isPrototypeOf?Super.isPrototypeOf(node)?node.input:node:node.input||node;args.unshift(node);oconnect.apply(this,args);return node;}}function dbToWAVolume(db){return Math.max(0,Math.round(100*Math.pow(2,db/6))/100);}function fmod(x,y){ // http://kevin.vanzonneveld.net
	// *     example 1: fmod(5.7, 1.3);
	// *     returns 1: 0.5
	var tmp,tmp2,p=0,pY=0,l=0.0,l2=0.0;tmp=x.toExponential().match(/^.\.?(.*)e(.+)$/);p=parseInt(tmp[2],10)-(tmp[1]+"").length;tmp=y.toExponential().match(/^.\.?(.*)e(.+)$/);pY=parseInt(tmp[2],10)-(tmp[1]+"").length;if(pY>p){p=pY;}tmp2=x%y;if(p<-100||p>20){ // toFixed will give an out of bound error so we fix it like this:
	l=Math.round(Math.log(tmp2)/Math.log(10));l2=Math.pow(10,l);return (tmp2/l2).toFixed(l-p)*l2;}else {return parseFloat(tmp2.toFixed(-p));}}function sign(x){if(x===0){return 1;}else {return Math.abs(x)/x;}}function tanh(n){return (Math.exp(n)-Math.exp(-n))/(Math.exp(n)+Math.exp(-n));}function initValue(userVal,defaultVal){return userVal===undefined?defaultVal:userVal;}Tuna.prototype.Bitcrusher=function(properties){if(!properties){properties=this.getDefaults();}this.bufferSize=properties.bufferSize||this.defaults.bufferSize.value;this.input=userContext.createGain();this.activateNode=userContext.createGain();this.processor=userContext.createScriptProcessor(this.bufferSize,1,1);this.output=userContext.createGain();this.activateNode.connect(this.processor);this.processor.connect(this.output);var phaser=0,last=0,input,output,step,i,length;this.processor.onaudioprocess=function(e){input=e.inputBuffer.getChannelData(0),output=e.outputBuffer.getChannelData(0),step=Math.pow(1/2,this.bits);length=input.length;for(i=0;i<length;i++){phaser+=this.normfreq;if(phaser>=1.0){phaser-=1.0;last=step*Math.floor(input[i]/step+0.5);}output[i]=last;}};this.bits=properties.bits||this.defaults.bits.value;this.normfreq=initValue(properties.normfreq,this.defaults.normfreq.value);this.bypass=properties.bypass||false;};Tuna.prototype.Bitcrusher.prototype=Object.create(Super,{name:{value:"Bitcrusher"},defaults:{writable:true,value:{bits:{value:4,min:1,max:16,automatable:false,type:INT},bufferSize:{value:4096,min:256,max:16384,automatable:false,type:INT},bypass:{value:false,automatable:false,type:BOOLEAN},normfreq:{value:0.1,min:0.0001,max:1.0,automatable:false,type:FLOAT}}},bits:{enumerable:true,get:function get(){return this.processor.bits;},set:function set(value){this.processor.bits=value;}},normfreq:{enumerable:true,get:function get(){return this.processor.normfreq;},set:function set(value){this.processor.normfreq=value;}}});Tuna.prototype.Cabinet=function(properties){if(!properties){properties=this.getDefaults();}this.input=userContext.createGain();this.activateNode=userContext.createGain();this.convolver=this.newConvolver(properties.impulsePath||"../impulses/impulse_guitar.wav");this.makeupNode=userContext.createGain();this.output=userContext.createGain();this.activateNode.connect(this.convolver.input);this.convolver.output.connect(this.makeupNode);this.makeupNode.connect(this.output);this.makeupGain=initValue(properties.makeupGain,this.defaults.makeupGain);this.bypass=properties.bypass||false;};Tuna.prototype.Cabinet.prototype=Object.create(Super,{name:{value:"Cabinet"},defaults:{writable:true,value:{makeupGain:{value:1,min:0,max:20,automatable:true,type:FLOAT},bypass:{value:false,automatable:false,type:BOOLEAN}}},makeupGain:{enumerable:true,get:function get(){return this.makeupNode.gain;},set:function set(value){this.makeupNode.gain.value=value;}},newConvolver:{value:function value(impulsePath){return new userInstance.Convolver({impulse:impulsePath,dryLevel:0,wetLevel:1});}}});Tuna.prototype.Chorus=function(properties){if(!properties){properties=this.getDefaults();}this.input=userContext.createGain();this.attenuator=this.activateNode=userContext.createGain();this.splitter=userContext.createChannelSplitter(2);this.delayL=userContext.createDelay();this.delayR=userContext.createDelay();this.feedbackGainNodeLR=userContext.createGain();this.feedbackGainNodeRL=userContext.createGain();this.merger=userContext.createChannelMerger(2);this.output=userContext.createGain();this.lfoL=new userInstance.LFO({target:this.delayL.delayTime,callback:pipe});this.lfoR=new userInstance.LFO({target:this.delayR.delayTime,callback:pipe});this.input.connect(this.attenuator);this.attenuator.connect(this.output);this.attenuator.connect(this.splitter);this.splitter.connect(this.delayL,0);this.splitter.connect(this.delayR,1);this.delayL.connect(this.feedbackGainNodeLR);this.delayR.connect(this.feedbackGainNodeRL);this.feedbackGainNodeLR.connect(this.delayR);this.feedbackGainNodeRL.connect(this.delayL);this.delayL.connect(this.merger,0,0);this.delayR.connect(this.merger,0,1);this.merger.connect(this.output);this.feedback=initValue(properties.feedback,this.defaults.feedback.value);this.rate=initValue(properties.rate,this.defaults.rate.value);this.delay=initValue(properties.delay,this.defaults.delay.value);this.depth=initValue(properties.depth,this.defaults.depth.value);this.lfoR.phase=Math.PI/2;this.attenuator.gain.value=0.6934; // 1 / (10 ^ (((20 * log10(3)) / 3) / 20))
	this.lfoL.activate(true);this.lfoR.activate(true);this.bypass=properties.bypass||false;};Tuna.prototype.Chorus.prototype=Object.create(Super,{name:{value:"Chorus"},defaults:{writable:true,value:{feedback:{value:0.4,min:0,max:0.95,automatable:false,type:FLOAT},delay:{value:0.0045,min:0,max:1,automatable:false,type:FLOAT},depth:{value:0.7,min:0,max:1,automatable:false,type:FLOAT},rate:{value:1.5,min:0,max:8,automatable:false,type:FLOAT},bypass:{value:false,automatable:false,type:BOOLEAN}}},delay:{enumerable:true,get:function get(){return this._delay;},set:function set(value){this._delay=0.0002*(Math.pow(10,value)*2);this.lfoL.offset=this._delay;this.lfoR.offset=this._delay;this._depth=this._depth;}},depth:{enumerable:true,get:function get(){return this._depth;},set:function set(value){this._depth=value;this.lfoL.oscillation=this._depth*this._delay;this.lfoR.oscillation=this._depth*this._delay;}},feedback:{enumerable:true,get:function get(){return this._feedback;},set:function set(value){this._feedback=value;this.feedbackGainNodeLR.gain.value=this._feedback;this.feedbackGainNodeRL.gain.value=this._feedback;}},rate:{enumerable:true,get:function get(){return this._rate;},set:function set(value){this._rate=value;this.lfoL.frequency=this._rate;this.lfoR.frequency=this._rate;}}});Tuna.prototype.Compressor=function(properties){if(!properties){properties=this.getDefaults();}this.input=userContext.createGain();this.compNode=this.activateNode=userContext.createDynamicsCompressor();this.makeupNode=userContext.createGain();this.output=userContext.createGain();this.compNode.connect(this.makeupNode);this.makeupNode.connect(this.output);this.automakeup=initValue(properties.automakeup,this.defaults.automakeup.value);this.makeupGain=properties.makeupGain||this.defaults.makeupGain.value;this.threshold=initValue(properties.threshold,this.defaults.threshold.value);this.release=properties.release||this.defaults.release.value;this.attack=initValue(properties.attack,this.defaults.attack.value);this.ratio=properties.ratio||this.defaults.ratio.value;this.knee=initValue(properties.knee,this.defaults.knee.value);this.bypass=properties.bypass||false;};Tuna.prototype.Compressor.prototype=Object.create(Super,{name:{value:"Compressor"},defaults:{writable:true,value:{threshold:{value:-20,min:-60,max:0,automatable:true,type:FLOAT},release:{value:250,min:10,max:2000,automatable:true,type:FLOAT},makeupGain:{value:1,min:1,max:100,automatable:true,type:FLOAT},attack:{value:1,min:0,max:1000,automatable:true,type:FLOAT},ratio:{value:4,min:1,max:50,automatable:true,type:FLOAT},knee:{value:5,min:0,max:40,automatable:true,type:FLOAT},automakeup:{value:false,automatable:false,type:BOOLEAN},bypass:{value:false,automatable:false,type:BOOLEAN}}},computeMakeup:{value:function value(){var magicCoefficient=4, // raise me if the output is too hot
	c=this.compNode;return -(c.threshold.value-c.threshold.value/c.ratio.value)/magicCoefficient;}},automakeup:{enumerable:true,get:function get(){return this._automakeup;},set:function set(value){this._automakeup=value;if(this._automakeup)this.makeupGain=this.computeMakeup();}},threshold:{enumerable:true,get:function get(){return this.compNode.threshold;},set:function set(value){this.compNode.threshold.value=value;if(this._automakeup)this.makeupGain=this.computeMakeup();}},ratio:{enumerable:true,get:function get(){return this.compNode.ratio;},set:function set(value){this.compNode.ratio.value=value;if(this._automakeup)this.makeupGain=this.computeMakeup();}},knee:{enumerable:true,get:function get(){return this.compNode.knee;},set:function set(value){this.compNode.knee.value=value;if(this._automakeup)this.makeupGain=this.computeMakeup();}},attack:{enumerable:true,get:function get(){return this.compNode.attack;},set:function set(value){this.compNode.attack.value=value/1000;}},release:{enumerable:true,get:function get(){return this.compNode.release;},set:function set(value){this.compNode.release=value/1000;}},makeupGain:{enumerable:true,get:function get(){return this.makeupNode.gain;},set:function set(value){this.makeupNode.gain.value=dbToWAVolume(value);}}});Tuna.prototype.Convolver=function(properties){if(!properties){properties=this.getDefaults();}this.input=userContext.createGain();this.activateNode=userContext.createGain();this.convolver=userContext.createConvolver();this.dry=userContext.createGain();this.filterLow=userContext.createBiquadFilter();this.filterHigh=userContext.createBiquadFilter();this.wet=userContext.createGain();this.output=userContext.createGain();this.activateNode.connect(this.filterLow);this.activateNode.connect(this.dry);this.filterLow.connect(this.filterHigh);this.filterHigh.connect(this.convolver);this.convolver.connect(this.wet);this.wet.connect(this.output);this.dry.connect(this.output);this.dryLevel=initValue(properties.dryLevel,this.defaults.dryLevel.value);this.wetLevel=initValue(properties.wetLevel,this.defaults.wetLevel.value);this.highCut=properties.highCut||this.defaults.highCut.value;this.buffer=properties.impulse||"../impulses/ir_rev_short.wav";this.lowCut=properties.lowCut||this.defaults.lowCut.value;this.level=initValue(properties.level,this.defaults.level.value);this.filterHigh.type="lowpass";this.filterLow.type="highpass";this.bypass=properties.bypass||false;};Tuna.prototype.Convolver.prototype=Object.create(Super,{name:{value:"Convolver"},defaults:{writable:true,value:{highCut:{value:22050,min:20,max:22050,automatable:true,type:FLOAT},lowCut:{value:20,min:20,max:22050,automatable:true,type:FLOAT},dryLevel:{value:1,min:0,max:1,automatable:true,type:FLOAT},wetLevel:{value:1,min:0,max:1,automatable:true,type:FLOAT},level:{value:1,min:0,max:1,automatable:true,type:FLOAT}}},lowCut:{get:function get(){return this.filterLow.frequency;},set:function set(value){this.filterLow.frequency.value=value;}},highCut:{get:function get(){return this.filterHigh.frequency;},set:function set(value){this.filterHigh.frequency.value=value;}},level:{get:function get(){return this.output.gain;},set:function set(value){this.output.gain.value=value;}},dryLevel:{get:function get(){return this.dry.gain;},set:function set(value){this.dry.gain.value=value;}},wetLevel:{get:function get(){return this.wet.gain;},set:function set(value){this.wet.gain.value=value;}},buffer:{enumerable:false,get:function get(){return this.convolver.buffer;},set:function set(impulse){var convolver=this.convolver,xhr=new XMLHttpRequest();if(!impulse){console.log("Tuna.Convolver.setBuffer: Missing impulse path!");return;}xhr.open("GET",impulse,true);xhr.responseType="arraybuffer";xhr.onreadystatechange=function(){if(xhr.readyState===4){if(xhr.status<300&&xhr.status>199||xhr.status===302){userContext.decodeAudioData(xhr.response,function(buffer){convolver.buffer=buffer;},function(e){if(e)console.log("Tuna.Convolver.setBuffer: Error decoding data"+e);});}}};xhr.send(null);}}});Tuna.prototype.Delay=function(properties){if(!properties){properties=this.getDefaults();}this.input=userContext.createGain();this.activateNode=userContext.createGain();this.dry=userContext.createGain();this.wet=userContext.createGain();this.filter=userContext.createBiquadFilter();this.delay=userContext.createDelay();this.feedbackNode=userContext.createGain();this.output=userContext.createGain();this.activateNode.connect(this.delay);this.activateNode.connect(this.dry);this.delay.connect(this.filter);this.filter.connect(this.feedbackNode);this.feedbackNode.connect(this.delay);this.feedbackNode.connect(this.wet);this.wet.connect(this.output);this.dry.connect(this.output);this.delayTime=properties.delayTime||this.defaults.delayTime.value;this.feedback=initValue(properties.feedback,this.defaults.feedback.value);this.wetLevel=initValue(properties.wetLevel,this.defaults.wetLevel.value);this.dryLevel=initValue(properties.dryLevel,this.defaults.dryLevel.value);this.cutoff=properties.cutoff||this.defaults.cutoff.value;this.filter.type="lowpass";this.bypass=properties.bypass||false;};Tuna.prototype.Delay.prototype=Object.create(Super,{name:{value:"Delay"},defaults:{writable:true,value:{delayTime:{value:100,min:20,max:1000,automatable:false,type:FLOAT},feedback:{value:0.45,min:0,max:0.9,automatable:true,type:FLOAT},cutoff:{value:20000,min:20,max:20000,automatable:true,type:FLOAT},wetLevel:{value:0.5,min:0,max:1,automatable:true,type:FLOAT},dryLevel:{value:1,min:0,max:1,automatable:true,type:FLOAT}}},delayTime:{enumerable:true,get:function get(){return this.delay.delayTime;},set:function set(value){this.delay.delayTime.value=value/1000;}},wetLevel:{enumerable:true,get:function get(){return this.wet.gain;},set:function set(value){this.wet.gain.value=value;}},dryLevel:{enumerable:true,get:function get(){return this.dry.gain;},set:function set(value){this.dry.gain.value=value;}},feedback:{enumerable:true,get:function get(){return this.feedbackNode.gain;},set:function set(value){this.feedbackNode.gain.value=value;}},cutoff:{enumerable:true,get:function get(){return this.filter.frequency;},set:function set(value){this.filter.frequency.value=value;}}});Tuna.prototype.Filter=function(properties){if(!properties){properties=this.getDefaults();}this.input=userContext.createGain();this.activateNode=userContext.createGain();this.filter=userContext.createBiquadFilter();this.output=userContext.createGain();this.activateNode.connect(this.filter);this.filter.connect(this.output);this.frequency=properties.frequency||this.defaults.frequency.value;this.Q=properties.resonance||this.defaults.Q.value;this.filterType=initValue(properties.filterType,this.defaults.filterType.value);this.gain=initValue(properties.gain,this.defaults.gain.value);this.bypass=properties.bypass||false;};Tuna.prototype.Filter.prototype=Object.create(Super,{name:{value:"Filter"},defaults:{writable:true,value:{frequency:{value:800,min:20,max:22050,automatable:true,type:FLOAT},Q:{value:1,min:0.001,max:100,automatable:true,type:FLOAT},gain:{value:0,min:-40,max:40,automatable:true,type:FLOAT},bypass:{value:false,automatable:false,type:BOOLEAN},filterType:{value:"lowpass",automatable:false,type:STRING}}},filterType:{enumerable:true,get:function get(){return this.filter.type;},set:function set(value){this.filter.type=value;}},Q:{enumerable:true,get:function get(){return this.filter.Q;},set:function set(value){this.filter.Q.value=value;}},gain:{enumerable:true,get:function get(){return this.filter.gain;},set:function set(value){this.filter.gain.value=value;}},frequency:{enumerable:true,get:function get(){return this.filter.frequency;},set:function set(value){this.filter.frequency.value=value;}}});Tuna.prototype.MoogFilter=function(properties){if(!properties){properties=this.getDefaults();}this.bufferSize=properties.bufferSize||this.defaults.bufferSize.value;this.input=userContext.createGain();this.activateNode=userContext.createGain();this.processor=userContext.createScriptProcessor(this.bufferSize,1,1);this.output=userContext.createGain();this.activateNode.connect(this.processor);this.processor.connect(this.output);var in1,in2,in3,in4,out1,out2,out3,out4;in1=in2=in3=in4=out1=out2=out3=out4=0.0;var input,output,f,fb,i,length;this.processor.onaudioprocess=function(e){input=e.inputBuffer.getChannelData(0),output=e.outputBuffer.getChannelData(0),f=this.cutoff*1.16,inputFactor=0.35013*(f*f)*(f*f);fb=this.resonance*(1.0-0.15*f*f);length=input.length;for(i=0;i<length;i++){input[i]-=out4*fb;input[i]*=inputFactor;out1=input[i]+0.3*in1+(1-f)*out1; // Pole 1
	in1=input[i];out2=out1+0.3*in2+(1-f)*out2; // Pole 2
	in2=out1;out3=out2+0.3*in3+(1-f)*out3; // Pole 3
	in3=out2;out4=out3+0.3*in4+(1-f)*out4; // Pole 4
	in4=out3;output[i]=out4;}};this.cutoff=initValue(properties.cutoff,this.defaults.cutoff.value);this.resonance=initValue(properties.resonance,this.defaults.resonance.value);this.bypass=properties.bypass||false;};Tuna.prototype.MoogFilter.prototype=Object.create(Super,{name:{value:"MoogFilter"},defaults:{writable:true,value:{bufferSize:{value:4096,min:256,max:16384,automatable:false,type:INT},bypass:{value:false,automatable:false,type:BOOLEAN},cutoff:{value:0.065,min:0.0001,max:1.0,automatable:false,type:FLOAT},resonance:{value:3.5,min:0.0,max:4.0,automatable:false,type:FLOAT}}},cutoff:{enumerable:true,get:function get(){return this.processor.cutoff;},set:function set(value){this.processor.cutoff=value;}},resonance:{enumerable:true,get:function get(){return this.processor.resonance;},set:function set(value){this.processor.resonance=value;}}});Tuna.prototype.Overdrive=function(properties){if(!properties){properties=this.getDefaults();}this.input=userContext.createGain();this.activateNode=userContext.createGain();this.inputDrive=userContext.createGain();this.waveshaper=userContext.createWaveShaper();this.outputDrive=userContext.createGain();this.output=userContext.createGain();this.activateNode.connect(this.inputDrive);this.inputDrive.connect(this.waveshaper);this.waveshaper.connect(this.outputDrive);this.outputDrive.connect(this.output);this.ws_table=new Float32Array(this.k_nSamples);this.drive=initValue(properties.drive,this.defaults.drive.value);this.outputGain=initValue(properties.outputGain,this.defaults.outputGain.value);this.curveAmount=initValue(properties.curveAmount,this.defaults.curveAmount.value);this.algorithmIndex=initValue(properties.algorithmIndex,this.defaults.algorithmIndex.value);this.bypass=properties.bypass||false;};Tuna.prototype.Overdrive.prototype=Object.create(Super,{name:{value:"Overdrive"},defaults:{writable:true,value:{drive:{value:1,min:0,max:1,automatable:true,type:FLOAT,scaled:true},outputGain:{value:1,min:0,max:1,automatable:true,type:FLOAT,scaled:true},curveAmount:{value:0.725,min:0,max:1,automatable:false,type:FLOAT},algorithmIndex:{value:0,min:0,max:5,automatable:false,type:INT}}},k_nSamples:{value:8192},drive:{get:function get(){return this.inputDrive.gain;},set:function set(value){this._drive=value;}},curveAmount:{get:function get(){return this._curveAmount;},set:function set(value){this._curveAmount=value;if(this._algorithmIndex===undefined){this._algorithmIndex=0;}this.waveshaperAlgorithms[this._algorithmIndex](this._curveAmount,this.k_nSamples,this.ws_table);this.waveshaper.curve=this.ws_table;}},outputGain:{get:function get(){return this.outputDrive.gain;},set:function set(value){this._outputGain=dbToWAVolume(value);}},algorithmIndex:{get:function get(){return this._algorithmIndex;},set:function set(value){this._algorithmIndex=value;this.curveAmount=this._curveAmount;}},waveshaperAlgorithms:{value:[function(amount,n_samples,ws_table){amount=Math.min(amount,0.9999);var k=2*amount/(1-amount),i,x;for(i=0;i<n_samples;i++){x=i*2/n_samples-1;ws_table[i]=(1+k)*x/(1+k*Math.abs(x));}},function(amount,n_samples,ws_table){var i,x,y;for(i=0;i<n_samples;i++){x=i*2/n_samples-1;y=(0.5*Math.pow(x+1.4,2)-1)*y>=0?5.8:1.2;ws_table[i]=tanh(y);}},function(amount,n_samples,ws_table){var i,x,y,a=1-amount;for(i=0;i<n_samples;i++){x=i*2/n_samples-1;y=x<0?-Math.pow(Math.abs(x),a+0.04):Math.pow(x,a);ws_table[i]=tanh(y*2);}},function(amount,n_samples,ws_table){var i,x,y,abx,a=1-amount>0.99?0.99:1-amount;for(i=0;i<n_samples;i++){x=i*2/n_samples-1;abx=Math.abs(x);if(abx<a)y=abx;else if(abx>a)y=a+(abx-a)/(1+Math.pow((abx-a)/(1-a),2));else if(abx>1)y=abx;ws_table[i]=sign(x)*y*(1/((a+1)/2));}},function(amount,n_samples,ws_table){ // fixed curve, amount doesn't do anything, the distortion is just from the drive
	var i,x;for(i=0;i<n_samples;i++){x=i*2/n_samples-1;if(x<-0.08905){ws_table[i]=-3/4*(1-Math.pow(1-(Math.abs(x)-0.032857),12)+1/3*(Math.abs(x)-0.032847))+0.01;}else if(x>=-0.08905&&x<0.320018){ws_table[i]=-6.153*(x*x)+3.9375*x;}else {ws_table[i]=0.630035;}}},function(amount,n_samples,ws_table){var a=2+Math.round(amount*14), // we go from 2 to 16 bits, keep in mind for the UI
	bits=Math.round(Math.pow(2,a-1)), // real number of quantization steps divided by 2
	i,x;for(i=0;i<n_samples;i++){x=i*2/n_samples-1;ws_table[i]=Math.round(x*bits)/bits;}}]}});Tuna.prototype.Phaser=function(properties){if(!properties){properties=this.getDefaults();}this.input=userContext.createGain();this.splitter=this.activateNode=userContext.createChannelSplitter(2);this.filtersL=[];this.filtersR=[];this.feedbackGainNodeL=userContext.createGain();this.feedbackGainNodeR=userContext.createGain();this.merger=userContext.createChannelMerger(2);this.filteredSignal=userContext.createGain();this.output=userContext.createGain();this.lfoL=new userInstance.LFO({target:this.filtersL,callback:this.callback});this.lfoR=new userInstance.LFO({target:this.filtersR,callback:this.callback});var i=this.stage;while(i--){this.filtersL[i]=userContext.createBiquadFilter();this.filtersR[i]=userContext.createBiquadFilter();this.filtersL[i].type="allpass";this.filtersR[i].type="allpass";}this.input.connect(this.splitter);this.input.connect(this.output);this.splitter.connect(this.filtersL[0],0,0);this.splitter.connect(this.filtersR[0],1,0);this.connectInOrder(this.filtersL);this.connectInOrder(this.filtersR);this.filtersL[this.stage-1].connect(this.feedbackGainNodeL);this.filtersL[this.stage-1].connect(this.merger,0,0);this.filtersR[this.stage-1].connect(this.feedbackGainNodeR);this.filtersR[this.stage-1].connect(this.merger,0,1);this.feedbackGainNodeL.connect(this.filtersL[0]);this.feedbackGainNodeR.connect(this.filtersR[0]);this.merger.connect(this.output);this.rate=initValue(properties.rate,this.defaults.rate.value);this.baseModulationFrequency=properties.baseModulationFrequency||this.defaults.baseModulationFrequency.value;this.depth=initValue(properties.depth,this.defaults.depth.value);this.feedback=initValue(properties.feedback,this.defaults.feedback.value);this.stereoPhase=initValue(properties.stereoPhase,this.defaults.stereoPhase.value);this.lfoL.activate(true);this.lfoR.activate(true);this.bypass=properties.bypass||false;};Tuna.prototype.Phaser.prototype=Object.create(Super,{name:{value:"Phaser"},stage:{value:4},defaults:{writable:true,value:{rate:{value:0.1,min:0,max:8,automatable:false,type:FLOAT},depth:{value:0.6,min:0,max:1,automatable:false,type:FLOAT},feedback:{value:0.7,min:0,max:1,automatable:false,type:FLOAT},stereoPhase:{value:40,min:0,max:180,automatable:false,type:FLOAT},baseModulationFrequency:{value:700,min:500,max:1500,automatable:false,type:FLOAT}}},callback:{value:function value(filters,_value2){for(var stage=0;stage<4;stage++){filters[stage].frequency.value=_value2;}}},depth:{get:function get(){return this._depth;},set:function set(value){this._depth=value;this.lfoL.oscillation=this._baseModulationFrequency*this._depth;this.lfoR.oscillation=this._baseModulationFrequency*this._depth;}},rate:{get:function get(){return this._rate;},set:function set(value){this._rate=value;this.lfoL.frequency=this._rate;this.lfoR.frequency=this._rate;}},baseModulationFrequency:{enumerable:true,get:function get(){return this._baseModulationFrequency;},set:function set(value){this._baseModulationFrequency=value;this.lfoL.offset=this._baseModulationFrequency;this.lfoR.offset=this._baseModulationFrequency;this._depth=this._depth;}},feedback:{get:function get(){return this._feedback;},set:function set(value){this._feedback=value;this.feedbackGainNodeL.gain.value=this._feedback;this.feedbackGainNodeR.gain.value=this._feedback;}},stereoPhase:{get:function get(){return this._stereoPhase;},set:function set(value){this._stereoPhase=value;var newPhase=this.lfoL._phase+this._stereoPhase*Math.PI/180;newPhase=fmod(newPhase,2*Math.PI);this.lfoR._phase=newPhase;}}});Tuna.prototype.PingPongDelay=function(properties){if(!properties){properties=this.getDefaults();}this.input=userContext.createGain();this.wetLevel=userContext.createGain();this.stereoToMonoMix=userContext.createGain();this.feedbackLevel=userContext.createGain();this.output=userContext.createGain();this.delayLeft=userContext.createDelay();this.delayRight=userContext.createDelay();this.activateNode=userContext.createGain();this.splitter=userContext.createChannelSplitter(2);this.merger=userContext.createChannelMerger(2);this.activateNode.connect(this.splitter);this.splitter.connect(this.stereoToMonoMix,0,0);this.splitter.connect(this.stereoToMonoMix,1,0);this.stereoToMonoMix.gain.value=.5;this.stereoToMonoMix.connect(this.wetLevel);this.wetLevel.connect(this.delayLeft);this.feedbackLevel.connect(this.delayLeft);this.delayLeft.connect(this.delayRight);this.delayRight.connect(this.feedbackLevel);this.delayLeft.connect(this.merger,0,0);this.delayRight.connect(this.merger,0,1);this.merger.connect(this.output);this.activateNode.connect(this.output);this.delayTimeLeft=properties.delayTimeLeft!==undefined?properties.delayTimeLeft:this.defaults.delayTimeLeft.value;this.delayTimeRight=properties.delayTimeRight!==undefined?properties.delayTimeRight:this.defaults.delayTimeRight.value;this.feedbackLevel.gain.value=properties.feedback!==undefined?properties.feedback:this.defaults.feedback.value;this.wetLevel.gain.value=properties.wetLevel!==undefined?properties.wetLevel:this.defaults.wetLevel.value;this.bypass=properties.bypass||false;};Tuna.prototype.PingPongDelay.prototype=Object.create(Super,{name:{value:"PingPongDelay"},delayTimeLeft:{enumerable:true,get:function get(){return this._delayTimeLeft;},set:function set(value){this._delayTimeLeft=value;this.delayLeft.delayTime.value=value/1000;}},delayTimeRight:{enumerable:true,get:function get(){return this._delayTimeRight;},set:function set(value){this._delayTimeRight=value;this.delayRight.delayTime.value=value/1000;}},defaults:{writable:true,value:{delayTimeLeft:{value:200,min:1,max:10000,automatable:false,type:INT},delayTimeRight:{value:400,min:1,max:10000,automatable:false,type:INT},feedback:{value:0.3,min:0,max:1,automatable:false,type:FLOAT},wetLevel:{value:0.5,min:0,max:1,automatable:false,type:FLOAT}}}});Tuna.prototype.Tremolo=function(properties){if(!properties){properties=this.getDefaults();}this.input=userContext.createGain();this.splitter=this.activateNode=userContext.createChannelSplitter(2),this.amplitudeL=userContext.createGain(),this.amplitudeR=userContext.createGain(),this.merger=userContext.createChannelMerger(2),this.output=userContext.createGain();this.lfoL=new userInstance.LFO({target:this.amplitudeL.gain,callback:pipe});this.lfoR=new userInstance.LFO({target:this.amplitudeR.gain,callback:pipe});this.input.connect(this.splitter);this.splitter.connect(this.amplitudeL,0);this.splitter.connect(this.amplitudeR,1);this.amplitudeL.connect(this.merger,0,0);this.amplitudeR.connect(this.merger,0,1);this.merger.connect(this.output);this.rate=properties.rate||this.defaults.rate.value;this.intensity=initValue(properties.intensity,this.defaults.intensity.value);this.stereoPhase=initValue(properties.stereoPhase,this.defaults.stereoPhase.value);this.lfoL.offset=1-this.intensity/2;this.lfoR.offset=1-this.intensity/2;this.lfoL.phase=this.stereoPhase*Math.PI/180;this.lfoL.activate(true);this.lfoR.activate(true);this.bypass=properties.bypass||false;};Tuna.prototype.Tremolo.prototype=Object.create(Super,{name:{value:"Tremolo"},defaults:{writable:true,value:{intensity:{value:0.3,min:0,max:1,automatable:false,type:FLOAT},stereoPhase:{value:0,min:0,max:180,automatable:false,type:FLOAT},rate:{value:5,min:0.1,max:11,automatable:false,type:FLOAT}}},intensity:{enumerable:true,get:function get(){return this._intensity;},set:function set(value){this._intensity=value;this.lfoL.offset=1-this._intensity/2;this.lfoR.offset=1-this._intensity/2;this.lfoL.oscillation=this._intensity;this.lfoR.oscillation=this._intensity;}},rate:{enumerable:true,get:function get(){return this._rate;},set:function set(value){this._rate=value;this.lfoL.frequency=this._rate;this.lfoR.frequency=this._rate;}},stereoPhase:{enumerable:true,get:function get(){return this._rate;},set:function set(value){this._stereoPhase=value;var newPhase=this.lfoL._phase+this._stereoPhase*Math.PI/180;newPhase=fmod(newPhase,2*Math.PI);this.lfoR.phase=newPhase;}}});Tuna.prototype.WahWah=function(properties){if(!properties){properties=this.getDefaults();}this.input=userContext.createGain();this.activateNode=userContext.createGain();this.envelopeFollower=new userInstance.EnvelopeFollower({target:this,callback:function callback(context,value){context.sweep=value;}});this.filterBp=userContext.createBiquadFilter();this.filterPeaking=userContext.createBiquadFilter();this.output=userContext.createGain(); //Connect AudioNodes
	this.activateNode.connect(this.filterBp);this.filterBp.connect(this.filterPeaking);this.filterPeaking.connect(this.output); //Set Properties
	this.init();this.automode=initValue(properties.enableAutoMode,this.defaults.automode.value);this.resonance=properties.resonance||this.defaults.resonance.value;this.sensitivity=initValue(properties.sensitivity,this.defaults.sensitivity.value);this.baseFrequency=initValue(properties.baseFrequency,this.defaults.baseFrequency.value);this.excursionOctaves=properties.excursionOctaves||this.defaults.excursionOctaves.value;this.sweep=initValue(properties.sweep,this.defaults.sweep.value);this.activateNode.gain.value=2;this.envelopeFollower.activate(true);this.bypass=properties.bypass||false;};Tuna.prototype.WahWah.prototype=Object.create(Super,{name:{value:"WahWah"},defaults:{writable:true,value:{automode:{value:true,automatable:false,type:BOOLEAN},baseFrequency:{value:0.5,min:0,max:1,automatable:false,type:FLOAT},excursionOctaves:{value:2,min:1,max:6,automatable:false,type:FLOAT},sweep:{value:0.2,min:0,max:1,automatable:false,type:FLOAT},resonance:{value:10,min:1,max:100,automatable:false,type:FLOAT},sensitivity:{value:0.5,min:-1,max:1,automatable:false,type:FLOAT}}},activateCallback:{value:function value(_value3){this.automode=_value3;}},automode:{get:function get(){return this._automode;},set:function set(value){this._automode=value;if(value){this.activateNode.connect(this.envelopeFollower.input);this.envelopeFollower.activate(true);}else {this.envelopeFollower.activate(false);this.activateNode.disconnect();this.activateNode.connect(this.filterBp);}}},filterFreqTimeout:{value:0},setFilterFreq:{value:function value(){try{this.filterBp.frequency.value=this._baseFrequency+this._excursionFrequency*this._sweep;this.filterPeaking.frequency.value=this._baseFrequency+this._excursionFrequency*this._sweep;}catch(e){clearTimeout(this.filterFreqTimeout); //put on the next cycle to let all init properties be set
	this.filterFreqTimeout=setTimeout(function(){this.setFilterFreq();}.bind(this),0);}}},sweep:{enumerable:true,get:function get(){return this._sweep.value;},set:function set(value){this._sweep=Math.pow(value>1?1:value<0?0:value,this._sensitivity);this.setFilterFreq();}},baseFrequency:{enumerable:true,get:function get(){return this._baseFrequency;},set:function set(value){this._baseFrequency=50*Math.pow(10,value*2);this._excursionFrequency=Math.min(userContext.sampleRate/2,this.baseFrequency*Math.pow(2,this._excursionOctaves));this.setFilterFreq();}},excursionOctaves:{enumerable:true,get:function get(){return this._excursionOctaves;},set:function set(value){this._excursionOctaves=value;this._excursionFrequency=Math.min(userContext.sampleRate/2,this.baseFrequency*Math.pow(2,this._excursionOctaves));this.setFilterFreq();}},sensitivity:{enumerable:true,get:function get(){return this._sensitivity;},set:function set(value){this._sensitivity=Math.pow(10,value);}},resonance:{enumerable:true,get:function get(){return this._resonance;},set:function set(value){this._resonance=value;this.filterPeaking.Q=this._resonance;}},init:{value:function value(){this.output.gain.value=1;this.filterPeaking.type="peaking";this.filterBp.type="bandpass";this.filterPeaking.frequency.value=100;this.filterPeaking.gain.value=20;this.filterPeaking.Q.value=5;this.filterBp.frequency.value=100;this.filterBp.Q.value=1;}}});Tuna.prototype.EnvelopeFollower=function(properties){if(!properties){properties=this.getDefaults();}this.input=userContext.createGain();this.jsNode=this.output=userContext.createScriptProcessor(this.buffersize,1,1);this.input.connect(this.output);this.attackTime=initValue(properties.attackTime,this.defaults.attackTime.value);this.releaseTime=initValue(properties.releaseTime,this.defaults.releaseTime.value);this._envelope=0;this.target=properties.target||{};this.callback=properties.callback||function(){};};Tuna.prototype.EnvelopeFollower.prototype=Object.create(Super,{name:{value:"EnvelopeFollower"},defaults:{value:{attackTime:{value:0.003,min:0,max:0.5,automatable:false,type:FLOAT},releaseTime:{value:0.5,min:0,max:0.5,automatable:false,type:FLOAT}}},buffersize:{value:256},envelope:{value:0},sampleRate:{value:44100},attackTime:{enumerable:true,get:function get(){return this._attackTime;},set:function set(value){this._attackTime=value;this._attackC=Math.exp(-1/this._attackTime*this.sampleRate/this.buffersize);}},releaseTime:{enumerable:true,get:function get(){return this._releaseTime;},set:function set(value){this._releaseTime=value;this._releaseC=Math.exp(-1/this._releaseTime*this.sampleRate/this.buffersize);}},callback:{get:function get(){return this._callback;},set:function set(value){if(typeof value==="function"){this._callback=value;}else {console.error("tuna.js: "+this.name+": Callback must be a function!");}}},target:{get:function get(){return this._target;},set:function set(value){this._target=value;}},activate:{value:function value(doActivate){this.activated=doActivate;if(doActivate){this.jsNode.connect(userContext.destination);this.jsNode.onaudioprocess=this.returnCompute(this);}else {this.jsNode.disconnect();this.jsNode.onaudioprocess=null;}}},returnCompute:{value:function value(instance){return function(event){instance.compute(event);};}},compute:{value:function value(event){var count=event.inputBuffer.getChannelData(0).length,channels=event.inputBuffer.numberOfChannels,current,chan,rms,i;chan=rms=i=0;if(channels>1){ //need to mixdown
	for(i=0;i<count;++i){for(;chan<channels;++chan){current=event.inputBuffer.getChannelData(chan)[i];rms+=current*current/channels;}}}else {for(i=0;i<count;++i){current=event.inputBuffer.getChannelData(0)[i];rms+=current*current;}}rms=Math.sqrt(rms);if(this._envelope<rms){this._envelope*=this._attackC;this._envelope+=(1-this._attackC)*rms;}else {this._envelope*=this._releaseC;this._envelope+=(1-this._releaseC)*rms;}this._callback(this._target,this._envelope);}}});Tuna.prototype.LFO=function(properties){ //Instantiate AudioNode
	this.output=userContext.createScriptProcessor(256,1,1);this.activateNode=userContext.destination; //Set Properties
	this.frequency=initValue(properties.frequency,this.defaults.frequency.value);this.offset=initValue(properties.offset,this.defaults.offset.value);this.oscillation=initValue(properties.oscillation,this.defaults.oscillation.value);this.phase=initValue(properties.phase,this.defaults.phase.value);this.target=properties.target||{};this.output.onaudioprocess=this.callback(properties.callback||function(){});this.bypass=properties.bypass||false;};Tuna.prototype.LFO.prototype=Object.create(Super,{name:{value:"LFO"},bufferSize:{value:256},sampleRate:{value:44100},defaults:{value:{frequency:{value:1,min:0,max:20,automatable:false,type:FLOAT},offset:{value:0.85,min:0,max:22049,automatable:false,type:FLOAT},oscillation:{value:0.3,min:-22050,max:22050,automatable:false,type:FLOAT},phase:{value:0,min:0,max:2*Math.PI,automatable:false,type:FLOAT}}},frequency:{get:function get(){return this._frequency;},set:function set(value){this._frequency=value;this._phaseInc=2*Math.PI*this._frequency*this.bufferSize/this.sampleRate;}},offset:{get:function get(){return this._offset;},set:function set(value){this._offset=value;}},oscillation:{get:function get(){return this._oscillation;},set:function set(value){this._oscillation=value;}},phase:{get:function get(){return this._phase;},set:function set(value){this._phase=value;}},target:{get:function get(){return this._target;},set:function set(value){this._target=value;}},activate:{value:function value(doActivate){if(!doActivate){this.output.disconnect(userContext.destination);}else {this.output.connect(userContext.destination);}}},callback:{value:function value(callback){var that=this;return function(){that._phase+=that._phaseInc;if(that._phase>2*Math.PI){that._phase=0;}callback(that._target,that._offset+that._oscillation*Math.sin(that._phase));};}}});Tuna.toString=Tuna.prototype.toString=function(){return "Please visit https://github.com/Theodeus/tuna/wiki for instructions on how to use Tuna.js";};})(this);;var getUserMedia; /** Let's do the vendor-prefix dance. **/var audioContext=window.AudioContext||window.webkitAudioContext;var context=new audioContext();var MediaStreamHelper={ /*
		        The browser have to support Promises if the browser supports only the deprecated version of getUserMedia.
		        There is a polyfill for Promises!
	          Example:
		          MediaStreamHelper.initialize(window);
		          getUserMedia({audio: true}).then(function(stream) {}).catch(function(error) {});
		*/UNSUPPORT:false,SUPPORT_STANDARD_VERSION:1,SUPPORT_DEPRECATED_VERSION:2,isGetUserMediaSupported:function isGetUserMediaSupported(window){if(window.navigator.mediaDevices&&window.navigator.mediaDevices.getUserMedia)return this.SUPPORT_STANDARD_VERSION;else if(window.navigator.getUserMedia)return this.SUPPORT_DEPRECATED_VERSION;else return this.UNSUPPORT;},initialize:function initializeMediaStreamHelper(window){var mediaDevices=window.navigator.mediaDevices||{};getUserMedia=window.navigator.getUserMedia||window.navigator.webkitGetUserMedia||window.navigator.mozGetUserMedia;var howIsItSupported=this.isGetUserMediaSupported(window);if(howIsItSupported!=this.UNSUPPORT){getUserMedia=howIsItSupported==this.SUPPORT_STANDARD_VERSION?mediaDevices.getUserMedia.bind(mediaDevices):function(constraints){return new Promise(function(resolve,reject){window.navigator.getUserMedia(constraints,resolve,reject);});};}}};MediaStreamHelper.initialize(window);if(!getUserMedia)console.log("Your browser supports getUserMedia.");else console.log("Your browser does not support getUserMedia."); /////////////////////////////////////////
	var Wad=function(){ /** Pre-render a noise buffer instead of generating noise on the fly. **/var noiseBuffer=function(){ // the initial seed
	Math.seed=6;Math.seededRandom=function(max,min){max=max||1;min=min||0;Math.seed=(Math.seed*9301+49297)%233280;var rnd=Math.seed/233280;return min+rnd*(max-min);};var bufferSize=2*context.sampleRate;var noiseBuffer=context.createBuffer(1,bufferSize,context.sampleRate);var output=noiseBuffer.getChannelData(0);for(var i=0;i<bufferSize;i++){output[i]=Math.seededRandom()*2-1;}return noiseBuffer;}(); /////////////////////////////////////////////////////////////////////////
	/** a lil hack. just be glad it isn't on Object.prototype. **/var isArray=function isArray(object){return Object.prototype.toString.call(object)==='[object Array]';}; /** Set up the default ADSR envelope. **/var constructEnv=function constructEnv(that,arg){that.env={ //default envelope, if one is not specified on play
	attack:arg.env?valueOrDefault(arg.env.attack,1):0, // time in seconds from onset to peak volume
	decay:arg.env?valueOrDefault(arg.env.decay,0):0, // time in seconds from peak volume to sustain volume
	sustain:arg.env?valueOrDefault(arg.env.sustain,1):1, // sustain volume level, as a percent of peak volume. min:0, max:1
	hold:arg.env?valueOrDefault(arg.env.hold,3.14159):3.14159, // time in seconds to maintain sustain volume
	release:arg.env?valueOrDefault(arg.env.release,0):0 // time in seconds from sustain volume to zero volume
	};that.defaultEnv={attack:arg.env?valueOrDefault(arg.env.attack,1):0, // time in seconds from onset to peak volume
	decay:arg.env?valueOrDefault(arg.env.decay,0):0, // time in seconds from peak volume to sustain volume
	sustain:arg.env?valueOrDefault(arg.env.sustain,1):1, // sustain volume level, as a percent of peak volume. min:0, max:1
	hold:arg.env?valueOrDefault(arg.env.hold,3.14159):3.14159, // time in seconds to maintain sustain volume
	release:arg.env?valueOrDefault(arg.env.release,0):0 // time in seconds from sustain volume to zero volume
	};}; /////////////////////////////////////////
	/** Set up the default filter and filter envelope. **/var constructFilter=function constructFilter(that,arg){if(!arg.filter){arg.filter=null;}else if(isArray(arg.filter)){that.filter=arg.filter.map(function(filterArg){return {type:filterArg.type||'lowpass',frequency:filterArg.frequency||600,q:filterArg.q||1,env:filterArg.env||null};});}else {that.filter=[{type:arg.filter.type||'lowpass',frequency:arg.filter.frequency||600,q:arg.filter.q||1,env:arg.filter.env||null}];}}; //////////////////////////////////////////////////////
	/** If the Wad uses an audio file as the source, request it from the server.
	Don't let the Wad play until all necessary files have been downloaded. **/var requestAudioFile=function requestAudioFile(that,callback){var request=new XMLHttpRequest();request.open("GET",that.source,true);request.responseType="arraybuffer";that.playable--;request.onload=function(){context.decodeAudioData(request.response,function(decodedBuffer){that.decodedBuffer=decodedBuffer;if(that.env.hold===3.14159){ // audio buffers should not use the default hold
	that.env.hold=that.decodedBuffer.duration+1;}if(callback){callback(that);}that.playable++;if(that.playOnLoad){that.play(that.playOnLoadArg);}});};request.send();}; //////////////////////////////////////////////////////////////////////////
	/** Set up the vibrato LFO **/var constructVibrato=function constructVibrato(that,arg){if(arg.vibrato){that.vibrato={shape:valueOrDefault(arg.vibrato.shape,'sine'),speed:valueOrDefault(arg.vibrato.speed,1),magnitude:valueOrDefault(arg.vibrato.magnitude,5),attack:valueOrDefault(arg.vibrato.attack,0)};}else {that.vibrato=null;}}; //////////////////////////////
	/** Set up the tremolo LFO **/var constructTremolo=function constructTremolo(that,arg){if(arg.tremolo){that.tremolo={shape:valueOrDefault(arg.tremolo.shape,'sine'),speed:valueOrDefault(arg.tremolo.speed,1),magnitude:valueOrDefault(arg.tremolo.magnitude,5),attack:valueOrDefault(arg.tremolo.attack,1)};}else {that.tremolo=null;}}; //////////////////////////////
	/** Grab the reverb impulse response file from a server.
	You may want to change Wad.defaultImpulse to serve files from your own server.
	Check out http://www.voxengo.com/impulses/ for free impulse responses. **/var constructReverb=function constructReverb(that,arg){if(arg.reverb){that.reverb={wet:valueOrDefault(arg.reverb.wet,1)};var impulseURL=arg.reverb.impulse||Wad.defaultImpulse;var request=new XMLHttpRequest();request.open("GET",impulseURL,true);request.responseType="arraybuffer";that.playable--;request.onload=function(){context.decodeAudioData(request.response,function(decodedBuffer){that.reverb.buffer=decodedBuffer;that.playable++;if(that.playOnLoad){that.play(that.playOnLoadArg);}if(that instanceof Wad.Poly){that.setUp(arg);}if(that.source==='mic'&&that.reverb&&that.reverb.buffer&&that.reverb.node&&!that.reverb.node.buffer){ // I think this is only relevant when calling play() with args on a mic
	that.reverb.node.convolver.buffer=that.reverb.buffer;}});};request.send();}else {that.reverb=null;}};var constructPanning=function constructPanning(that,arg){if('panning' in arg){that.panning={location:arg.panning};if(typeof arg.panning==="number"){that.panning.type='stereo';}else {that.panning.type='3d';that.panning.panningModel=arg.panningModel||'equalpower';}}else {that.panning={location:0,type:'stereo'};}if(that.panning.type==='stereo'&&!context.createStereoPanner){console.log("Your browser does not support stereo panning. Falling back to 3D panning.");that.panning={location:[0,0,0],type:'3d',panningModel:'equalpower'};}}; //////////////////////////////////////////////////////////////////////////////
	var constructDelay=function constructDelay(that,arg){if(arg.delay){that.delay={delayTime:valueOrDefault(arg.delay.delayTime,.5),maxDelayTime:valueOrDefault(arg.delay.maxDelayTime,2),feedback:valueOrDefault(arg.delay.feedback,.25),wet:valueOrDefault(arg.delay.wet,.25)};}else {that.delay=null;}}; /** Special initialization and configuration for microphone Wads **/var getConsent=function getConsent(that,arg){that.nodes=[];that.mediaStreamSource=null;that.gain=null;getUserMedia({audio:true,video:false}).then(function(stream){ // console.log('got stream')
	that.mediaStreamSource=context.createMediaStreamSource(stream);Wad.micConsent=true;setUpMic(that,arg);}).catch(function(error){console.log('Error setting up microphone input: ',error);}); // This is the error callback.
	}; ////////////////////////////////////////////////////////////////////
	var setUpMic=function setUpMic(that,arg){that.nodes=[];that.gain=context.createGain();that.gain.gain.value=valueOrDefault(arg.volume,that.volume);that.nodes.push(that.mediaStreamSource);that.nodes.push(that.gain); // console.log('that ', arg)
	if(that.filter||arg.filter){createFilters(that,arg);}if(that.reverb||arg.reverb){setUpReverbOnPlay(that,arg);}constructPanning(that,arg);setUpPanningOnPlay(that,arg);if(that.delay||arg.delay){setUpDelayOnPlay(that,arg);}setUpTunaOnPlay(that,arg);that.setUpExternalFxOnPlay(arg,context);};var Wad=function Wad(arg){ /** Set basic Wad properties **/this.source=arg.source;this.destination=arg.destination||context.destination; // the last node the sound is routed to
	this.volume=valueOrDefault(arg.volume,1); // peak volume. min:0, max:1 (actually max is infinite, but ...just keep it at or below 1)
	this.defaultVolume=this.volume;this.playable=1; // if this is less than 1, this Wad is still waiting for a file to download before it can play
	this.pitch=Wad.pitches[arg.pitch]||arg.pitch||440;this.detune=arg.detune||0; // In Cents.
	this.globalReverb=arg.globalReverb||false;this.gain=[];this.loop=arg.loop||false;this.tuna=arg.tuna||null;constructEnv(this,arg);constructFilter(this,arg);constructVibrato(this,arg);constructTremolo(this,arg);constructReverb(this,arg);this.constructExternalFx(arg,context);constructPanning(this,arg);constructDelay(this,arg); ////////////////////////////////
	/** If the Wad's source is noise, set the Wad's buffer to the noise buffer we created earlier. **/if(this.source==='noise'){this.decodedBuffer=noiseBuffer;} //////////////////////////////////////////////////////////////////////////////////////////////////
	/** If the Wad's source is the microphone, the rest of the setup happens here. **/else if(this.source==='mic'){getConsent(this,arg);} //////////////////////////////////////////////////////////////////////////////////
	/** If the Wad's source is an object, assume it is a buffer from a recorder. There's probably a better way to handle this. **/else if(_typeof(this.source)=='object'){var newBuffer=context.createBuffer(2,this.source[0].length,context.sampleRate);newBuffer.getChannelData(0).set(this.source[0]);newBuffer.getChannelData(1).set(this.source[1]);this.decodedBuffer=newBuffer;} /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/** If the source is not a pre-defined value, assume it is a URL for an audio file, and grab it now. **/else if(!(this.source in {'sine':0,'sawtooth':0,'square':0,'triangle':0})){requestAudioFile(this,arg.callback);} ////////////////////////////////////////////////////////////////////////////////////////////////////////
	else {arg.callback&&arg.callback(this);}};Wad.micConsent=false;Wad.audioContext=context;if(window.Tuna!=undefined){Wad.tuna=new Tuna(Wad.audioContext);} /** When a note is played, these two functions will schedule changes in volume and filter frequency,
	as specified by the volume envelope and filter envelope **/var filterEnv=function filterEnv(wad,arg){wad.filter.forEach(function(filter,index){filter.node.frequency.linearRampToValueAtTime(filter.frequency,arg.exactTime);filter.node.frequency.linearRampToValueAtTime(filter.env.frequency,arg.exactTime+filter.env.attack);});};var playEnv=function playEnv(wad,arg){wad.gain[0].gain.linearRampToValueAtTime(0.0001,arg.exactTime);wad.gain[0].gain.linearRampToValueAtTime(wad.volume,arg.exactTime+wad.env.attack+0.00001);wad.gain[0].gain.linearRampToValueAtTime(wad.volume*wad.env.sustain,arg.exactTime+wad.env.attack+wad.env.decay+0.00002);wad.gain[0].gain.linearRampToValueAtTime(wad.volume*wad.env.sustain,arg.exactTime+wad.env.attack+wad.env.decay+wad.env.hold+0.00003);wad.gain[0].gain.linearRampToValueAtTime(0.0001,arg.exactTime+wad.env.attack+wad.env.decay+wad.env.hold+wad.env.release+0.00004);wad.soundSource.start(arg.exactTime);wad.soundSource.stop(arg.exactTime+wad.env.attack+wad.env.decay+wad.env.hold+wad.env.release);}; ////////////////////////////////////////////////////////////////////////////////////////////////////
	/** When all the nodes are set up for this Wad, this function plugs them into each other,
	with special handling for nodes with custom interfaces (e.g. reverb, delay). **/var plugEmIn=function plugEmIn(that,arg){ // console.log('nodes? ', that.nodes)
	var destination=arg&&arg.destination||that.destination;for(var i=1;i<that.nodes.length;i++){if(that.nodes[i-1].interface==='custom'){var from=that.nodes[i-1].output;}else { // assume native interface
	var from=that.nodes[i-1];}if(that.nodes[i].interface==='custom'){var to=that.nodes[i].input;}else { // assume native interface
	var to=that.nodes[i];}from.connect(to);}if(that.nodes[that.nodes.length-1].interface==='custom'){var lastStop=that.nodes[that.nodes.length-1].output;}else { // assume native interface
	var lastStop=that.nodes[that.nodes.length-1];}lastStop.connect(destination); /** Global reverb is super deprecated, and should be removed at some point. **/if(Wad.reverb&&that.globalReverb){that.nodes[that.nodes.length-1].connect(Wad.reverb.node);Wad.reverb.node.connect(Wad.reverb.gain);Wad.reverb.gain.connect(destination);} /**************************************************************************/}; /////////////////////////////////////////////////////////////////////////////////////////
	/** Initialize and configure an oscillator node **/var setUpOscillator=function setUpOscillator(that,arg){arg=arg||{};that.soundSource=context.createOscillator();that.soundSource.type=that.source;if(arg.pitch){if(arg.pitch in Wad.pitches){that.soundSource.frequency.value=Wad.pitches[arg.pitch];}else {that.soundSource.frequency.value=arg.pitch;}}else {that.soundSource.frequency.value=that.pitch;}that.soundSource.detune.value=arg.detune||that.detune;}; ///////////////////////////////////////////////////
	/** Set the ADSR volume envelope according to play() arguments, or revert to defaults **/var setUpEnvOnPlay=function setUpEnvOnPlay(that,arg){if(arg&&arg.env){that.env.attack=valueOrDefault(arg.env.attack,that.defaultEnv.attack);that.env.decay=valueOrDefault(arg.env.decay,that.defaultEnv.decay);that.env.sustain=valueOrDefault(arg.env.sustain,that.defaultEnv.sustain);that.env.hold=valueOrDefault(arg.env.hold,that.defaultEnv.hold);that.env.release=valueOrDefault(arg.env.release,that.defaultEnv.release);}else {that.env={attack:that.defaultEnv.attack,decay:that.defaultEnv.decay,sustain:that.defaultEnv.sustain,hold:that.defaultEnv.hold,release:that.defaultEnv.release};}}; //////////////////////////////////////////////////////////////////////////////////
	/** Set the filter and filter envelope according to play() arguments, or revert to defaults **/var createFilters=function createFilters(that,arg){if(arg.filter&&!isArray(arg.filter)){arg.filter=[arg.filter];}that.filter.forEach(function(filter,i){filter.node=context.createBiquadFilter();filter.node.type=filter.type;filter.node.frequency.value=arg.filter&&arg.filter[i]?arg.filter[i].frequency||filter.frequency:filter.frequency;filter.node.Q.value=arg.filter&&arg.filter[i]?arg.filter[i].q||filter.q:filter.q;if((arg.filter&&arg.filter[i].env||that.filter[i].env)&&!(that.source==="mic")){filter.env={attack:arg.filter&&arg.filter[i].env&&arg.filter[i].env.attack||that.filter[i].env.attack,frequency:arg.filter&&arg.filter[i].env&&arg.filter[i].env.frequency||that.filter[i].env.frequency};}that.nodes.push(filter.node);});};var setUpFilterOnPlay=function setUpFilterOnPlay(that,arg){if(arg&&arg.filter&&that.filter){if(!isArray(arg.filter))arg.filter=[arg.filter];createFilters(that,arg);}else if(that.filter){createFilters(that,that);}}; ///////////////////////////////////////////////////////////////////////////////////////////////
	/** Initialize and configure a convolver node for playback **/var setUpReverbOnPlay=function setUpReverbOnPlay(that,arg){var reverbNode={interface:'custom',input:context.createGain(),convolver:context.createConvolver(),wet:context.createGain(),output:context.createGain()};reverbNode.convolver.buffer=that.reverb.buffer;reverbNode.wet.gain.value=that.reverb.wet;reverbNode.input.connect(reverbNode.convolver);reverbNode.input.connect(reverbNode.output);reverbNode.convolver.connect(reverbNode.wet);reverbNode.wet.connect(reverbNode.output);that.reverb.node=reverbNode;that.nodes.push(that.reverb.node);}; //////////////////////////////////////////////////////////////
	/** Initialize and configure a panner node for playback **/var setUpPanningOnPlay=function setUpPanningOnPlay(that,arg){var panning=arg&&arg.panning; // can be zero provided as argument
	if(typeof panning==='undefined'){panning=that.panning.location;}if(typeof panning==='number'){that.panning.node=context.createStereoPanner();that.panning.node.pan.value=panning;that.panning.type='stereo';}else {that.panning.node=context.createPanner();that.panning.node.setPosition(panning[0],panning[1],panning[2]);that.panning.node.panningModel=arg.panningModel||that.panningModel||'equalpower';that.panning.type='3d';}that.nodes.push(that.panning.node);}; ///////////////////////////////////////////////////////////
	/** Initialize and configure a vibrato LFO Wad for playback **/var setUpVibratoOnPlay=function setUpVibratoOnPlay(that,arg){that.vibrato.wad=new Wad({source:that.vibrato.shape,pitch:that.vibrato.speed,volume:that.vibrato.magnitude,env:{attack:that.vibrato.attack},destination:that.soundSource.frequency});that.vibrato.wad.play();}; ///////////////////////////////////////////////////////////////
	/** Initialize and configure a tremolo LFO Wad for playback **/var setUpTremoloOnPlay=function setUpTremoloOnPlay(that,arg){that.tremolo.wad=new Wad({source:that.tremolo.shape,pitch:that.tremolo.speed,volume:that.tremolo.magnitude,env:{attack:that.tremolo.attack,hold:10},destination:that.gain[0].gain});that.tremolo.wad.play();}; ///////////////////////////////////////////////////////////////
	var setUpDelayOnPlay=function setUpDelayOnPlay(that,arg){if(that.delay){if(!arg.delay){arg.delay={};} //create the nodes we’ll use
	var delayNode={ // the custom delay node
	interface:'custom',input:context.createGain(),output:context.createGain(),delayNode:context.createDelay(that.delay.maxDelayTime), // the native delay node inside the custom delay node.
	feedbackNode:context.createGain(),wetNode:context.createGain()}; //set some decent values
	delayNode.delayNode.delayTime.value=valueOrDefault(arg.delay.delayTime,that.delay.delayTime);delayNode.feedbackNode.gain.value=valueOrDefault(arg.delay.feedback,that.delay.feedback);delayNode.wetNode.gain.value=valueOrDefault(arg.delay.wet,that.delay.wet); //set up the routing
	delayNode.input.connect(delayNode.delayNode);delayNode.input.connect(delayNode.output);delayNode.delayNode.connect(delayNode.feedbackNode);delayNode.delayNode.connect(delayNode.wetNode);delayNode.feedbackNode.connect(delayNode.delayNode);delayNode.wetNode.connect(delayNode.output);that.delay.delayNode=delayNode;that.nodes.push(delayNode);}}; /** **/var constructCompressor=function constructCompressor(that,arg){that.compressor=context.createDynamicsCompressor();that.compressor.attack.value=valueOrDefault(arg.compressor.attack,that.compressor.attack.value);that.compressor.knee.value=valueOrDefault(arg.compressor.knee,that.compressor.knee.value);that.compressor.ratio.value=valueOrDefault(arg.compressor.ratio,that.compressor.ratio.value);that.compressor.release.value=valueOrDefault(arg.compressor.release,that.compressor.release.value);that.compressor.threshold.value=valueOrDefault(arg.compressor.threshold,that.compressor.threshold.value);that.nodes.push(that.compressor);};var setUpTunaOnPlay=function setUpTunaOnPlay(that,arg){if(!(that.tuna||arg.tuna)){return;}var tunaConfig={};if(that.tuna){for(var key in that.tuna){tunaConfig[key]=that.tuna[key];}} // overwrite settings from `this` with settings from arg
	if(arg.tuna){for(var key in arg.tuna){tunaConfig[key]=arg.tuna[key];}}console.log('tunaconfig: ',tunaConfig);for(var key in tunaConfig){console.log(key);var tunaEffect=new Wad.tuna[key](tunaConfig[key]);that.nodes.push(tunaEffect);} // console.log(that.nodes)
	}; ///
	/** Method to allow users to setup external fx in the constructor **/Wad.prototype.constructExternalFx=function(arg,context){ //override me in your own code
	}; //////////////////////////////////////////////////////////////////////////////
	/** To be overrided by the user **/Wad.prototype.setUpExternalFxOnPlay=function(arg,context){ //user does what is necessary here, and then maybe does something like:
	// this.nodes.push(externalFX)
	}; ///////////////////////////////////////////////////////////////
	/** the play() method will create the various nodes that are required for this Wad to play,
	set properties on those nodes according to the constructor arguments and play() arguments,
	plug the nodes into each other with plugEmIn(),
	then finally play the sound by calling playEnv() **/Wad.prototype.play=function(arg){arg=arg||{arg:null};if(this.playable<1){this.playOnLoad=true;this.playOnLoadArg=arg;}else if(this.source==='mic'){if(Wad.micConsent){if(arg.arg===null){plugEmIn(this,arg);}else {constructFilter(this,arg);constructVibrato(this,arg);constructTremolo(this,arg);constructReverb(this,arg);this.constructExternalFx(arg,context);constructPanning(this,arg);constructDelay(this,arg);setUpMic(this,arg);plugEmIn(this,arg);}}else {console.log('You have not given your browser permission to use your microphone.');}}else {this.nodes=[];if(!arg.wait){arg.wait=0;}if(arg.volume){this.volume=arg.volume;}else {this.volume=this.defaultVolume;}if(this.source in {'sine':0,'sawtooth':0,'square':0,'triangle':0}){setUpOscillator(this,arg);}else {this.soundSource=context.createBufferSource();this.soundSource.buffer=this.decodedBuffer;if(this.source==='noise'||this.loop||arg.loop){this.soundSource.loop=true;}}if(arg.exactTime===undefined){arg.exactTime=context.currentTime+arg.wait;}this.nodes.push(this.soundSource); /**  sets the volume envelope based on the play() arguments if present,
	    or defaults to the constructor arguments if the volume envelope is not set on play() **/setUpEnvOnPlay(this,arg); ////////////////////////////////////////////////////////////////////////////////////////
	/**  sets up the filter and filter envelope based on the play() argument if present,
	    or defaults to the constructor argument if the filter and filter envelope are not set on play() **/setUpFilterOnPlay(this,arg); ///////////////////////////////////////////////////////////////////////////////////////////////////
	setUpTunaOnPlay(this,arg);this.setUpExternalFxOnPlay(arg,context);this.gain.unshift(context.createGain()); // sets up the gain node
	this.gain[0].label=arg.label;this.nodes.push(this.gain[0]);if(this.gain.length>15){this.gain.length=15;} // sets up reverb
	if(this.reverb){setUpReverbOnPlay(this,arg);} /**  sets panning based on the play() argument if present, or defaults to the constructor argument if panning is not set on play **/setUpPanningOnPlay(this,arg); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	setUpDelayOnPlay(this,arg);plugEmIn(this,arg);if(this.filter&&this.filter[0].env){filterEnv(this,arg);}playEnv(this,arg); //sets up vibrato LFO
	if(this.vibrato){setUpVibratoOnPlay(this,arg);} //sets up tremolo LFO
	if(this.tremolo){setUpTremoloOnPlay(this,arg);}}if(arg.callback){arg.callback(this);}return this;}; //////////////////////////////////////////////////////////////////////////////////////////
	/** Change the volume of a Wad at any time, including during playback **/Wad.prototype.setVolume=function(volume){this.defaultVolume=volume;if(this.gain.length>0){this.gain[0].gain.value=volume;}return this;}; /**
	    Change the playback speed of a Wad during playback.
	    inputSpeed is a value of 0 < speed, and is the rate of playback of the audio.
	    E.g. if input speed = 2.0, the playback will be twice as fast
	    **/Wad.prototype.setSpeed=function(inputSpeed){ //Check/Save the input
	var speed;if(inputSpeed&&inputSpeed>0)speed=inputSpeed;else speed=0; //Check if we have a soundsource (Though we always should)
	if(this.soundSource){ //Set the value
	this.soundSource.playbackRate.value=speed;}else { //Inform that there is no delay on the current wad
	console.log("Sorry, but the wad does not contain a soundSource!");}return this;};Wad.prototype.setDetune=function(detune){this.soundSource.detune.value=detune;return this;}; /** Change the panning of a Wad at any time, including during playback **/Wad.prototype.setPanning=function(panning){this.panning.location=panning;if(isArray(panning)&&this.panning.type==='3d'&&this.panning.node){this.panning.node.setPosition(panning[0],panning[1],panning[2]);}else if(typeof panning==='number'&&this.panning.type==='stereo'&&this.panning.node){this.panning.node.pan.value=panning;}if(isArray(panning)){this.panning.type='3d';}else if(typeof panning==='number'){this.panning.type='stereo';}return this;}; /**
	    Change the Reverb of a Wad at any time, including during playback.
	    inputWet is a value of 0 < wetness/gain < 1
	    **/Wad.prototype.setReverb=function(inputWet){ //Check/Save the input
	var wet;if(inputWet&&inputWet>0&&inputWet<1)wet=inputWet;else if(inputWet>=1)wet=1;else wet=0; //Check if we have delay
	if(this.reverb){ //Set the value
	this.reverb.wet=wet; //Set the node's value, if it exists
	if(this.reverb.node){this.reverb.node.wet.gain.value=wet;}}else { //Inform that there is no reverb on the current wad
	console.log("Sorry, but the wad does not contain Reverb!");}return this;}; /**
	    Change the Delay of a Wad at any time, including during playback.
	    inputTime is a value of time > 0, and is the time in seconds between each delayed playback.
	    inputWet is a value of gain 0 < inputWet < 1, and is Relative volume change between the original sound and the first delayed playback.
	    inputFeedback is a value of gain 0 < inputFeedback < 1, and is Relative volume change between each delayed playback and the next.
	    **/Wad.prototype.setDelay=function(inputTime,inputWet,inputFeedback){ //Check/Save the input
	var time;if(inputTime&&inputTime>0)time=inputTime;else time=0;var wet;if(inputWet&&inputWet>0&&inputWet<1)wet=inputWet;else if(inputWet>=1)wet=1;else wet=0;var feedback;if(inputFeedback&&inputFeedback>0&&inputFeedback<1)feedback=inputFeedback;else if(inputFeedback>=1)feedback=1;else feedback=0; //Check if we have delay
	if(this.delay){ //Set the value
	this.delay.delayTime=time;this.delay.wet=wet;this.delay.feedback=feedback; //Set the node's value, if it exists
	if(this.delay.delayNode){this.delay.delayNode.delayNode.delayTime.value=time;this.delay.delayNode.wetNode.gain.value=wet;this.delay.delayNode.feedbackNode.gain.value=feedback;}}else { //Inform that there is no delay on the current wad
	console.log("Sorry, but the wad does not contain delay!");}return this;}; //////////////////////////////////////////////////////////////////////////////////////////
	/** If multiple instances of a sound are playing simultaneously, stop() only can stop the most recent one **/Wad.prototype.stop=function(label){if(!(this.source==='mic')){if(label){for(var i=0;i<this.gain.length;i++){if(this.gain[i].label===label){this.gain[i].gain.cancelScheduledValues(context.currentTime);this.gain[i].gain.setValueAtTime(this.gain[i].gain.value,context.currentTime);this.gain[i].gain.linearRampToValueAtTime(.0001,context.currentTime+this.env.release);}}}if(!label){this.gain[0].gain.cancelScheduledValues(context.currentTime);this.gain[0].gain.setValueAtTime(this.gain[0].gain.value,context.currentTime);this.gain[0].gain.linearRampToValueAtTime(.0001,context.currentTime+this.env.release);}}else if(Wad.micConsent){this.mediaStreamSource.disconnect(0);}else {console.log('You have not given your browser permission to use your microphone.');}if(this.tremolo){this.tremolo.wad.stop();}}; ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var buflen=2048;var buf=new Uint8Array(buflen);var MINVAL=134; // 128 == zero.  MINVAL is the "minimum detected signal" level.
	var noteFromPitch=function noteFromPitch(frequency){var noteNum=12*(Math.log(frequency/440)/Math.log(2));return Math.round(noteNum)+69;};var frequencyFromNoteNumber=function frequencyFromNoteNumber(note){return 440*Math.pow(2,(note-69)/12);};var centsOffFromPitch=function centsOffFromPitch(frequency,note){return Math.floor(1200*Math.log(frequency/frequencyFromNoteNumber(note))/Math.log(2));};function autoCorrelate(buf,sampleRate){var MIN_SAMPLES=4; // corresponds to an 11kHz signal
	var MAX_SAMPLES=1000; // corresponds to a 44Hz signal
	var SIZE=1000;var best_offset=-1;var best_correlation=0;var rms=0;var foundGoodCorrelation=false;if(buf.length<SIZE+MAX_SAMPLES-MIN_SAMPLES)return -1; // Not enough data
	for(var i=0;i<SIZE;i++){var val=(buf[i]-128)/128;rms+=val*val;}rms=Math.sqrt(rms/SIZE);if(rms<0.01)return -1;var lastCorrelation=1;for(var offset=MIN_SAMPLES;offset<=MAX_SAMPLES;offset++){var correlation=0;for(var i=0;i<SIZE;i++){correlation+=Math.abs((buf[i]-128)/128-(buf[i+offset]-128)/128);}correlation=1-correlation/SIZE;if(correlation>0.9&&correlation>lastCorrelation)foundGoodCorrelation=true;else if(foundGoodCorrelation){ // short-circuit - we found a good correlation, then a bad one, so we'd just be seeing copies from here.
	return sampleRate/best_offset;}lastCorrelation=correlation;if(correlation>best_correlation){best_correlation=correlation;best_offset=offset;}}if(best_correlation>0.01){ // console.log("f = " + sampleRate/best_offset + "Hz (rms: " + rms + " confidence: " + best_correlation + ")")
	return sampleRate/best_offset;}return -1; //  var best_frequency = sampleRate/best_offset;
	}Wad.Poly=function(arg){if(!arg){arg={};}this.isSetUp=false;this.playable=1;if(arg.reverb){constructReverb(this,arg); // We need to make sure we have downloaded the impulse response before continuing with the setup.
	}else {this.setUp(arg);}};Wad.Poly.prototype.setUp=function(arg){ // Anything that needs to happen before reverb is set up can go here.
	this.wads=[];this.input=context.createAnalyser();this.input.fftSize=2048;this.nodes=[this.input];this.destination=arg.destination||context.destination; // the last node the sound is routed to
	this.volume=arg.volume||1;this.output=context.createGain();this.output.gain.value=this.volume;this.tuna=arg.tuna||null;if(!(typeof Recorder==='undefined')&&arg.recConfig){ // Recorder should be defined, unless you're running the unconcatenated source version and forgot to include recorder.js.
	this.rec=new Recorder(this.output,arg.recConfig);this.rec.recordings=[];var that=this;var getRecorderBufferCallback=function getRecorderBufferCallback(buffers){that.rec.createWadArg.source=buffers;that.rec.recordings.unshift(new Wad(that.rec.createWadArg));};this.rec.createWad=function(arg){this.createWadArg=arg||{env:{hold:9001}};this.getBuffer(getRecorderBufferCallback);};}this.globalReverb=arg.globalReverb||false; // deprecated
	constructFilter(this,arg);if(this.filter){createFilters(this,arg);}if(this.reverb){setUpReverbOnPlay(this,arg);}this.constructExternalFx(arg,context);constructPanning(this,arg);setUpPanningOnPlay(this,arg);if(arg.compressor){constructCompressor(this,arg);}constructDelay(this,arg);setUpDelayOnPlay(this,arg);setUpTunaOnPlay(this,arg);this.nodes.push(this.output);plugEmIn(this,arg);this.isSetUp=true;if(arg.callback){arg.callback(this);}}; /**
	    The MIT License (MIT)

	Copyright (c) 2014 Chris Wilson
	**/Wad.Poly.prototype.updatePitch=function(time){this.input.getByteTimeDomainData(buf);var ac=autoCorrelate(buf,context.sampleRate);if(ac!==-1&&ac!==11025&&ac!==12000){var pitch=ac;this.pitch=Math.floor(pitch);var note=noteFromPitch(pitch);this.noteName=Wad.pitchesArray[note-12]; // Detune doesn't seem to work.
	// var detune = centsOffFromPitch( pitch, note );
	// if (detune == 0 ) {
	//     this.detuneEstimate = 0;
	// } else {
	//     this.detuneEstimate = detune
	// }
	}var that=this;that.rafID=window.requestAnimationFrame(function(){that.updatePitch();});};Wad.Poly.prototype.stopUpdatingPitch=function(){cancelAnimationFrame(this.rafID);};Wad.Poly.prototype.setVolume=function(volume){if(this.isSetUp){this.output.gain.value=volume;}else {console.log('This PolyWad is not set up yet.');}return this;};Wad.Poly.prototype.play=function(arg){if(this.isSetUp){if(this.playable<1){this.playOnLoad=true;this.playOnLoadArg=arg;}else {if(arg&&arg.volume){this.output.gain.value=arg.volume; // if two notes are played with volume set as a play arg, does the second one overwrite the first? maybe input should be an array of gain nodes, like regular wads.
	arg.volume=undefined; // if volume is set, it should change the gain on the polywad's gain node, NOT the gain nodes for individual wads inside the polywad.
	}for(var i=0;i<this.wads.length;i++){this.wads[i].play(arg);}}}else {console.log('This PolyWad is not set up yet.');}return this;};Wad.Poly.prototype.stop=function(arg){if(this.isSetUp){for(var i=0;i<this.wads.length;i++){this.wads[i].stop(arg);}}};Wad.Poly.prototype.add=function(wad){if(this.isSetUp){wad.destination=this.input;this.wads.push(wad);if(wad instanceof Wad.Poly){wad.output.disconnect(0);wad.output.connect(this.input);}}else {console.log('This PolyWad is not set up yet.');}return this;};Wad.Poly.prototype.remove=function(wad){if(this.isSetUp){for(var i=0;i<this.wads.length;i++){if(this.wads[i]===wad){this.wads[i].destination=context.destination;this.wads.splice(i,1);if(wad instanceof Wad.Poly){wad.output.disconnect(0);wad.output.connect(context.destination);}}}}return this;};Wad.Poly.prototype.constructExternalFx=function(arg,context){}; /** If a Wad is created with reverb without specifying a URL for the impulse response,
	grab it from the defaultImpulse URL **/Wad.defaultImpulse='http://www.codecur.io/us/sendaudio/widehall.wav'; // This method is deprecated.
	Wad.setGlobalReverb=function(arg){Wad.reverb={};Wad.reverb.node=context.createConvolver();Wad.reverb.gain=context.createGain();Wad.reverb.gain.gain.value=arg.wet;var impulseURL=arg.impulse||Wad.defaultImpulse;var request=new XMLHttpRequest();request.open("GET",impulseURL,true);request.responseType="arraybuffer";request.onload=function(){context.decodeAudioData(request.response,function(decodedBuffer){Wad.reverb.node.buffer=decodedBuffer;});};request.send();}; //////////////////////////////////////////////////////////////////////////////////////
	//  Utility function to avoid javascript type conversion bug checking zero values   //
	var valueOrDefault=function valueOrDefault(value,def){var val=value==null?def:value;return val;}; //////////////////////////////////////////////////////////////////////////////////////
	/** This object is a mapping of note names to frequencies. **/Wad.pitches={'A0':27.5000,'A#0':29.1352,'Bb0':29.1352,'B0':30.8677,'B#0':32.7032,'Cb1':30.8677,'C1':32.7032,'C#1':34.6478,'Db1':34.6478,'D1':36.7081,'D#1':38.8909,'Eb1':38.8909,'E1':41.2034,'Fb1':41.2034,'E#1':43.6535,'F1':43.6535,'F#1':46.2493,'Gb1':46.2493,'G1':48.9994,'G#1':51.9131,'Ab1':51.9131,'A1':55.0000,'A#1':58.2705,'Bb1':58.2705,'B1':61.7354,'Cb2':61.7354,'B#1':65.4064,'C2':65.4064,'C#2':69.2957,'Db2':69.2957,'D2':73.4162,'D#2':77.7817,'Eb2':77.7817,'E2':82.4069,'Fb2':82.4069,'E#2':87.3071,'F2':87.3071,'F#2':92.4986,'Gb2':92.4986,'G2':97.9989,'G#2':103.826,'Ab2':103.826,'A2':110.000,'A#2':116.541,'Bb2':116.541,'B2':123.471,'Cb3':123.471,'B#2':130.813,'C3':130.813,'C#3':138.591,'Db3':138.591,'D3':146.832,'D#3':155.563,'Eb3':155.563,'E3':164.814,'Fb3':164.814,'E#3':174.614,'F3':174.614,'F#3':184.997,'Gb3':184.997,'G3':195.998,'G#3':207.652,'Ab3':207.652,'A3':220.000,'A#3':233.082,'Bb3':233.082,'B3':246.942,'Cb4':246.942,'B#3':261.626,'C4':261.626,'C#4':277.183,'Db4':277.183,'D4':293.665,'D#4':311.127,'Eb4':311.127,'E4':329.628,'Fb4':329.628,'E#4':349.228,'F4':349.228,'F#4':369.994,'Gb4':369.994,'G4':391.995,'G#4':415.305,'Ab4':415.305,'A4':440.000,'A#4':466.164,'Bb4':466.164,'B4':493.883,'Cb5':493.883,'B#4':523.251,'C5':523.251,'C#5':554.365,'Db5':554.365,'D5':587.330,'D#5':622.254,'Eb5':622.254,'E5':659.255,'Fb5':659.255,'E#5':698.456,'F5':698.456,'F#5':739.989,'Gb5':739.989,'G5':783.991,'G#5':830.609,'Ab5':830.609,'A5':880.000,'A#5':932.328,'Bb5':932.328,'B5':987.767,'Cb6':987.767,'B#5':1046.50,'C6':1046.50,'C#6':1108.73,'Db6':1108.73,'D6':1174.66,'D#6':1244.51,'Eb6':1244.51,'Fb6':1318.51,'E6':1318.51,'E#6':1396.91,'F6':1396.91,'F#6':1479.98,'Gb6':1479.98,'G6':1567.98,'G#6':1661.22,'Ab6':1661.22,'A6':1760.00,'A#6':1864.66,'Bb6':1864.66,'B6':1975.53,'Cb7':1975.53,'B#6':2093.00,'C7':2093.00,'C#7':2217.46,'Db7':2217.46,'D7':2349.32,'D#7':2489.02,'Eb7':2489.02,'E7':2637.02,'Fb7':2637.02,'E#7':2793.83,'F7':2793.83,'F#7':2959.96,'Gb7':2959.96,'G7':3135.96,'G#7':3322.44,'Ab7':3322.44,'A7':3520.00,'A#7':3729.31,'Bb7':3729.31,'B7':3951.07,'Cb8':3951.07,'B#7':4186.01,'C8':4186.01};Wad.pitchesArray=[ // Just an array of note names. This can be useful for mapping MIDI data to notes.
	'C0','C#0','D0','D#0','E0','F0','F#0','G0','G#0','A0','A#0','B0','C1','C#1','D1','D#1','E1','F1','F#1','G1','G#1','A1','A#1','B1','C2','C#2','D2','D#2','E2','F2','F#2','G2','G#2','A2','A#2','B2','C3','C#3','D3','D#3','E3','F3','F#3','G3','G#3','A3','A#3','B3','C4','C#4','D4','D#4','E4','F4','F#4','G4','G#4','A4','A#4','B4','C5','C#5','D5','D#5','E5','F5','F#5','G5','G#5','A5','A#5','B5','C6','C#6','D6','D#6','E6','F6','F#6','G6','G#6','A6','A#6','B6','C7','C#7','D7','D#7','E7','F7','F#7','G7','G#7','A7','A#7','B7','C8']; //////////////////////////////////////////////////////////////
	Wad.midiInstrument={play:function play(){console.log('playing midi');},stop:function stop(){console.log('stopping midi');}};Wad.midiInputs=[];var midiMap=function midiMap(event){console.log(event.receivedTime,event.data);if(event.data[0]===144){ // 144 means the midi message has note data
	// console.log('note')
	if(event.data[2]===0){ // noteOn velocity of 0 means this is actually a noteOff message
	console.log('|| stopping note: ',Wad.pitchesArray[event.data[1]-12]);Wad.midiInstrument.stop(Wad.pitchesArray[event.data[1]-12]);}else if(event.data[2]>0){console.log('> playing note: ',Wad.pitchesArray[event.data[1]-12]);Wad.midiInstrument.play({pitch:Wad.pitchesArray[event.data[1]-12],label:Wad.pitchesArray[event.data[1]-12],callback:function callback(that){}});}}else if(event.data[0]===176){ // 176 means the midi message has controller data
	console.log('controller');if(event.data[1]==46){if(event.data[2]==127){Wad.midiInstrument.pedalMod=true;}else if(event.data[2]==0){Wad.midiInstrument.pedalMod=false;}}}else if(event.data[0]===224){ // 224 means the midi message has pitch bend data
	console.log('pitch bend');}};var onSuccessCallback=function onSuccessCallback(midiAccess){ // console.log('inputs: ', m.inputs)
	Wad.midiInputs=[];var val=midiAccess.inputs.values();for(var o=val.next();!o.done;o=val.next()){Wad.midiInputs.push(o.value);} // Wad.midiInputs = [m.inputs.values().next().value];   // inputs = array of MIDIPorts
	console.log('MIDI inputs: ',Wad.midiInputs); // var outputs = m.outputs(); // outputs = array of MIDIPorts
	for(var i=0;i<Wad.midiInputs.length;i++){Wad.midiInputs[i].onmidimessage=midiMap; // onmidimessage( event ), event.data & event.receivedTime are populated
	} // var o = m.outputs()[0];           // grab first output device
	// o.send( [ 0x90, 0x45, 0x7f ] );     // full velocity note on A4 on channel zero
	// o.send( [ 0x80, 0x45, 0x7f ], window.performance.now() + 1000 );  // full velocity A4 note off in one second.
	};var onErrorCallback=function onErrorCallback(err){console.log("uh-oh! Something went wrong!  Error code: "+err.code);};if(navigator&&navigator.requestMIDIAccess){try{navigator.requestMIDIAccess().then(onSuccessCallback,onErrorCallback);}catch(err){var text="There was an error on this page.\n\n";text+="Error description: "+err.message+"\n\n";text+="Click OK to continue.\n\n";console.log(text);}}Wad.presets={hiHatClosed:{source:'noise',env:{attack:.001,decay:.008,sustain:.2,hold:.03,release:.01},filter:{type:'highpass',frequency:400,q:1}},snare:{source:'noise',env:{attack:.001,decay:.01,sustain:.2,hold:.03,release:.02},filter:{type:'bandpass',frequency:300,q:.180}},hiHatOpen:{source:'noise',env:{attack:.001,decay:.008,sustain:.2,hold:.43,release:.01},filter:{type:'highpass',frequency:100,q:.2}},ghost:{source:'square',volume:.3,env:{attack:.01,decay:.002,sustain:.5,hold:2.5,release:.3},filter:{type:'lowpass',frequency:600,q:7,env:{attack:.7,frequency:1600}},vibrato:{attack:8,speed:8,magnitude:100}},piano:{source:'square',volume:1.4,env:{attack:.01,decay:.005,sustain:.2,hold:.015,release:.3},filter:{type:'lowpass',frequency:1200,q:8.5,env:{attack:.2,frequency:600}}}};return Wad;}();if(typeof module!=='undefined'&&module.exports){module.exports=Wad;}return Wad;});
	}.call(window));

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _num = __webpack_require__(292);

	var num = _interopRequireWildcard(_num);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var Wad = __webpack_require__(290);


	var min = 500;
	var max = 700;

	var freqX = function freqX(event, progress) {
	    return Math.min(max, 300 + num.sample(event.KillerWorldLocation.x, event.VictimWorldLocation.x, progress) / 10 * 100);
	};

	/**
	 * Plays sound based on event world location.
	 */

	exports.default = function (audio, event, data) {
	    var length = event.KillVectorLength;
	    var duration = length * 2; // seconds

	    var xOscillator = audio.ctx.createOscillator();
	    xOscillator.type = 'triangle';
	    xOscillator.frequency.value = freqX(event, 0);

	    var gainNode = audio.ctx.createGain();
	    gainNode.gain.value = 0;

	    xOscillator.connect(gainNode);
	    gainNode.connect(audio.destination);

	    return {
	        sound: {
	            play: function play() {
	                gainNode.gain.setValueAtTime(0, audio.ctx.currentTime);
	                gainNode.gain.linearRampToValueAtTime(0.1, audio.ctx.currentTime + duration * 0.2);
	                gainNode.gain.setValueAtTime(0.1, audio.ctx.currentTime + duration * 0.7);
	                gainNode.gain.linearRampToValueAtTime(0, audio.ctx.currentTime + duration * 1);

	                xOscillator.frequency.setValueAtTime(freqX(event, 0), audio.ctx.currentTime);
	                xOscillator.frequency.linearRampToValueAtTime(freqX(event, 1), duration * 1);
	                xOscillator.start();
	                xOscillator.stop(audio.ctx.currentTime + duration);
	            },
	            stop: function stop() {
	                xOscillator.stop();
	            }
	        },
	        duration: duration * 1000
	    };
	};

/***/ },

/***/ 292:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var clamp = exports.clamp = function clamp(min, max, value) {
	    return Math.max(min, Math.min(max, value));
	};

	var sample = exports.sample = function sample(min, max, value) {
	    return clamp(min, max, min + (max - min) * value);
	};

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _timeline = __webpack_require__(296);

	var _timeline2 = _interopRequireDefault(_timeline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(20);
	var ReactDOM = __webpack_require__(177);

	var interval = 30;
	var SCALE = 20;

	var tryInvoke = function tryInvoke(f, x) {
	    return f ? f(x) : null;
	};

	/**
	 * 
	 */

	var PlaybackSpeedControls = function (_React$Component) {
	    _inherits(PlaybackSpeedControls, _React$Component);

	    function PlaybackSpeedControls(props) {
	        _classCallCheck(this, PlaybackSpeedControls);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PlaybackSpeedControls).call(this, props));

	        _this.state = {
	            speed: +props.value,
	            value: props.value || '1',
	            customValue: '1',
	            custom: false
	        };
	        return _this;
	    }

	    _createClass(PlaybackSpeedControls, [{
	        key: 'onChange',
	        value: function onChange(e) {
	            var value = e.target.value;
	            if (value === 'custom') {
	                if (+this.state.value) this.props.onChange(+value);

	                this.setState({ value: 'custom', custom: true });
	                this.setValue(this.state.customValue);
	            } else {
	                this.setState({ value: value, custom: false, customValue: value });
	                this.setValue(value);
	            }
	        }
	    }, {
	        key: 'onCustomChange',
	        value: function onCustomChange(e) {
	            var value = e.target.value;
	            this.setValue(value);
	            this.setState({ customValue: value });
	        }
	    }, {
	        key: 'setValue',
	        value: function setValue(value) {
	            var num = +value;
	            if (isNaN(num)) {
	                //this.
	                return false;
	            }
	            if (num <= 0 || num > 20) {
	                return false;
	            }
	            this.setState({ speed: num });
	            this.props.onChange(+num);
	            return true;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'span',
	                { className: 'control' },
	                'Speed:',
	                React.createElement(
	                    'select',
	                    { style: { zIndex: 999 }, className: 'speed-selector', onChange: this.onChange.bind(this), value: this.state.value },
	                    React.createElement(
	                        'option',
	                        { value: '1' },
	                        '1x'
	                    ),
	                    React.createElement(
	                        'option',
	                        { value: '2' },
	                        '2x'
	                    ),
	                    React.createElement(
	                        'option',
	                        { value: '4' },
	                        '4x'
	                    ),
	                    React.createElement(
	                        'option',
	                        { value: '8' },
	                        '8x'
	                    ),
	                    React.createElement(
	                        'option',
	                        { value: '20' },
	                        '20x'
	                    ),
	                    React.createElement(
	                        'option',
	                        { value: 'custom' },
	                        'custom'
	                    )
	                ),
	                React.createElement('input', { type: 'text', className: this.state.custom ? '' : 'hidden',
	                    value: this.state.customValue,
	                    onChange: this.onCustomChange.bind(this) })
	            );
	        }
	    }]);

	    return PlaybackSpeedControls;
	}(React.Component);

	/**
	 * 
	 */


	var Controls = function (_React$Component2) {
	    _inherits(Controls, _React$Component2);

	    function Controls(props) {
	        _classCallCheck(this, Controls);

	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Controls).call(this, props));

	        _this2.state = {
	            progress: 0,
	            duration: 0,
	            playing: false,
	            dragging: false,
	            playbackSpeed: 1
	        };

	        _this2._onKeyDown = function (e) {
	            if (e.keyCode === 32) _this2.toggle();
	        };
	        return _this2;
	    }

	    _createClass(Controls, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            window.removeEventListener('keypress', this._onKeyDown);
	            window.addEventListener('keypress', this._onKeyDown);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            window.removeEventListener('keypress', this._onKeyDown);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(newProps) {
	            if (newProps.stream !== this.props.stream) {
	                this.setState({
	                    duration: newProps.stream.duration || 0,
	                    head: newProps.stream.times && newProps.stream.times.begin
	                });
	            }
	        }
	    }, {
	        key: 'onEventFocus',
	        value: function onEventFocus(event) {
	            this.setState({ focusedEvent: event });
	            tryInvoke(this.props.onEventFocus, event);
	        }
	    }, {
	        key: 'onEventFocusEnd',
	        value: function onEventFocusEnd(event) {
	            this.setState({ focusedEvent: null });
	            tryInvoke(this.props.onEventFocusEnd, event);
	        }
	    }, {
	        key: 'play',
	        value: function play() {
	            if (this.state.playing) return;
	            this.setState({ playing: true });

	            var self = this;
	            (function loop(when) {
	                var _this3 = this;

	                var _start = Date.now();
	                setTimeout(function () {
	                    if (!self.state.playing) return;

	                    var actual = Date.now() - _start;
	                    var next = Math.max(0, interval - (actual - interval));

	                    if (!self.state.dragging) {
	                        var progress = self.state.progress + self.state.playbackSpeed * (actual / self.state.duration);
	                        var offset = progress * self.state.duration;
	                        var head = self.state.head && self.state.head.clone();
	                        while (head && head.valid && head.key < offset) {
	                            tryInvoke(self.props.onTimelineEvent, head.value);
	                            if (head.hasNext) {
	                                head.next();
	                            } else {
	                                head = null;
	                                break;
	                            }
	                        }
	                        self.setState({ progress: Math.max(0, Math.min(1, progress)), head: head });
	                        if (progress >= 1) {
	                            _this3.setState({ playing: false });
	                            return;
	                        }
	                    }
	                    loop(next);
	                }, when);
	            })(interval);

	            this.props.onPlay();
	        }
	    }, {
	        key: 'onTimelineDrag',
	        value: function onTimelineDrag(progress, done) {
	            var offset = progress * this.state.duration;
	            var head = this.props.stream.times.ge(offset);
	            this.setState({
	                progress: progress,
	                head: head,
	                dragging: !done
	            });

	            if (this.props.onPositionChange) {
	                var before = [];
	                var after = [];
	                var i = head.clone();
	                i.prev();
	                for (; i.valid; i.prev()) {
	                    before.push(i.value);
	                }for (var _i = head.clone(); _i.valid; _i.next()) {
	                    after.push(_i.value);
	                }this.props.onPositionChange(before, after);
	            }
	        }
	    }, {
	        key: 'onTimelineDragDone',
	        value: function onTimelineDragDone(progress) {
	            this.onTimelineDrag(progress, true);
	        }
	    }, {
	        key: 'pause',
	        value: function pause() {
	            this.setState({ playing: false });
	            this.props.onPause();
	        }
	    }, {
	        key: 'onPlaybackSpeedChange',
	        value: function onPlaybackSpeedChange(speed) {
	            this.setState({ playbackSpeed: speed });
	        }
	    }, {
	        key: 'toggle',
	        value: function toggle() {
	            if (this.state.playing) this.pause();else this.play();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { id: 'controls' },
	                React.createElement(
	                    'div',
	                    { id: 'playback-controls' },
	                    React.createElement(
	                        'div',
	                        { className: 'button-group' },
	                        React.createElement(
	                            'button',
	                            { onClick: this.toggle.bind(this), className: 'material-icons' },
	                            this.state.playing ? 'pause' : 'play_arrow'
	                        )
	                    ),
	                    React.createElement(PlaybackSpeedControls, { onChange: this.onPlaybackSpeedChange.bind(this) })
	                ),
	                React.createElement(_timeline2.default, _extends({}, this.props, {
	                    stream: this.props.stream,
	                    progress: this.state.progress,
	                    onDrag: this.onTimelineDrag.bind(this),
	                    onDragDone: this.onTimelineDragDone.bind(this) }))
	            );
	        }
	    }]);

	    return Controls;
	}(React.Component);

	exports.default = Controls;
	;

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _num = __webpack_require__(292);

	var num = _interopRequireWildcard(_num);

	var _weapons = __webpack_require__(17);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(20);
	var ReactDOM = __webpack_require__(177);
	var moment = __webpack_require__(179);

	var tryInvoke = function tryInvoke(f, x) {
	    return f ? f(x) : null;
	};

	var getWeaponName = function getWeaponName(weaponId) {
	    var weapon = (0, _weapons.getWeaponsTable)().get(weaponId);
	    return weapon ? weapon.name : 'unknown';
	};

	/**
	 * Single event on the timeline.
	 */

	var TimelineEvent = function (_React$Component) {
	    _inherits(TimelineEvent, _React$Component);

	    function TimelineEvent() {
	        _classCallCheck(this, TimelineEvent);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TimelineEvent).apply(this, arguments));
	    }

	    _createClass(TimelineEvent, [{
	        key: 'onMouseEnter',
	        value: function onMouseEnter(event) {
	            tryInvoke(this.props.onFocus, this.props.event);
	        }
	    }, {
	        key: 'onMouseLeave',
	        value: function onMouseLeave(event) {
	            tryInvoke(this.props.onFocusEnd, this.props.event);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var progress = this.props.event ? this.props.event.MatchProgress : 0;
	            var style = {
	                left: progress * 100 + '%'
	            };
	            var weaponName = this.props.event ? getWeaponName(this.props.event.KillerWeaponStockId) : 'unknown';

	            return React.createElement('li', { className: 'timeline-event weapon weapon-' + weaponName,
	                style: style,
	                onMouseEnter: this.onMouseEnter.bind(this),
	                onMouseLeave: this.onMouseLeave.bind(this) });
	        }
	    }]);

	    return TimelineEvent;
	}(React.Component);

	/**
	 * Set of timeline events
	 */


	var TimelineEvents = function (_React$Component2) {
	    _inherits(TimelineEvents, _React$Component2);

	    function TimelineEvents() {
	        _classCallCheck(this, TimelineEvents);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TimelineEvents).apply(this, arguments));
	    }

	    _createClass(TimelineEvents, [{
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var events = [];
	            if (this.props.stream) {
	                this.props.stream.forEach(function (event) {
	                    events.push(React.createElement(TimelineEvent, _extends({ key: event.Id, event: event }, _this3.props)));
	                });
	            }
	            return React.createElement(
	                'ul',
	                { className: 'timeline-events' },
	                events
	            );
	        }
	    }]);

	    return TimelineEvents;
	}(React.Component);

	/**
	 * 
	 */


	var TimelineScrubber = function (_React$Component3) {
	    _inherits(TimelineScrubber, _React$Component3);

	    function TimelineScrubber() {
	        _classCallCheck(this, TimelineScrubber);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TimelineScrubber).apply(this, arguments));
	    }

	    _createClass(TimelineScrubber, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement('div', { className: 'scrubber',
	                style: { position: 'absolute', top: 0, left: (this.props.progress || 0) * 100 + '%' } });
	        }
	    }]);

	    return TimelineScrubber;
	}(React.Component);

	/**
	 * 
	 */


	var TimelineTicks = function (_React$Component4) {
	    _inherits(TimelineTicks, _React$Component4);

	    function TimelineTicks() {
	        _classCallCheck(this, TimelineTicks);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TimelineTicks).apply(this, arguments));
	    }

	    _createClass(TimelineTicks, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this6 = this;

	            this.drawGrid();

	            window.addEventListener('resize', function () {
	                _this6.drawGrid(_this6.props.duration);
	            }, false);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.drawGrid(nextProps.duration);
	        }
	    }, {
	        key: 'drawGrid',
	        value: function drawGrid(duration) {
	            if (! +duration) return;
	            var canvas = ReactDOM.findDOMNode(this);

	            var _canvas$getBoundingCl = canvas.getBoundingClientRect();

	            var width = _canvas$getBoundingCl.width;
	            var height = _canvas$getBoundingCl.height;

	            canvas.width = width;
	            canvas.height = height;

	            var context = canvas.getContext('2d');

	            context.lineWidth = 1;
	            context.strokeStyle = 'white';
	            this.drawTicks(context, width, height, duration, height, 30000.0);
	            this.drawTicks(context, width, height, duration, height / 4, 5000.0);
	        }
	    }, {
	        key: 'drawTicks',
	        value: function drawTicks(context, width, height, duration, tickHeight, size) {
	            var upper = height / 2 - tickHeight / 2;
	            var lower = height / 2 + tickHeight / 2;

	            context.beginPath();
	            var stepSize = width / (duration / size);
	            for (var i = 0; i < width; i += stepSize) {
	                context.moveTo(i, upper);
	                context.lineTo(i, lower);
	            }
	            context.stroke();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement('canvas', { className: 'timeline-ticks' });
	        }
	    }]);

	    return TimelineTicks;
	}(React.Component);

	/**
	 * 
	 */


	var Timeline = function (_React$Component5) {
	    _inherits(Timeline, _React$Component5);

	    function Timeline(props) {
	        _classCallCheck(this, Timeline);

	        var _this7 = _possibleConstructorReturn(this, Object.getPrototypeOf(Timeline).call(this, props));

	        _this7.state = {
	            dragging: false
	        };
	        return _this7;
	    }

	    _createClass(Timeline, [{
	        key: 'onEventFocus',
	        value: function onEventFocus(event) {
	            this.setState({ focusedEvent: event });
	            tryInvoke(this.props.onEventFocus, event);
	        }
	    }, {
	        key: 'onEventFocusEnd',
	        value: function onEventFocusEnd(event) {
	            this.setState({ focusedEvent: null });
	            tryInvoke(this.props.onEventFocusEnd, event);
	        }
	    }, {
	        key: 'onMouseDown',
	        value: function onMouseDown(event) {
	            if (this.state.dragging) return;
	            this.setState({ dragging: true });
	            var progress = this.getProgressFromMouseEvent(event);
	            this.props.onDrag(progress);
	        }
	    }, {
	        key: 'onMouseUp',
	        value: function onMouseUp(event) {
	            if (!this.state.dragging) return;
	            this.setState({ dragging: false });
	            var progress = this.getProgressFromMouseEvent(event);
	            this.props.onDragDone(progress);
	        }
	    }, {
	        key: 'onMouseMove',
	        value: function onMouseMove(e) {
	            if (!this.state.dragging) return;
	            e.stopPropagation();
	            e.nativeEvent.stopImmediatePropagation();

	            var progress = this.getProgressFromMouseEvent(e);
	            this.props.onDrag(progress);
	        }
	    }, {
	        key: 'getProgressFromMouseEvent',
	        value: function getProgressFromMouseEvent(event) {
	            var node = ReactDOM.findDOMNode(this).getElementsByClassName('timeline-content')[0];
	            var rect = node.getBoundingClientRect();
	            var progress = num.clamp(0, 1.0, (event.pageX - rect.left) / rect.width);
	            return progress;
	        }
	    }, {
	        key: 'timeToString',
	        value: function timeToString(ms) {
	            return moment(moment.duration(ms)._data).format('mm:ss.SSS');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var end = this.props.stream && this.timeToString(this.props.stream.duration);
	            var middle = this.props.stream && this.timeToString(this.props.stream.duration * this.props.progress);

	            return React.createElement(
	                'div',
	                { id: 'timeline', onMouseDown: this.onMouseDown.bind(this), onMouseUp: this.onMouseUp.bind(this), onMouseMove: this.onMouseMove.bind(this) },
	                React.createElement(
	                    'div',
	                    { className: 'timeline-content' },
	                    React.createElement(TimelineTicks, { duration: this.props.stream && this.props.stream.duration }),
	                    React.createElement(TimelineEvents, { stream: this.props.stream }),
	                    React.createElement(TimelineScrubber, { progress: this.props.progress })
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'timeline-label', style: { left: 0 } },
	                    this.timeToString(0)
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'timeline-label', style: { left: '50%' } },
	                    middle
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'timeline-label', style: { right: 0 } },
	                    end
	                )
	            );
	        }
	    }]);

	    return Timeline;
	}(React.Component);

	exports.default = Timeline;
	;

/***/ }

});