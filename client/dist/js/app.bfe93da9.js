(function (t) {
  function e(e) {
    for (
      var s, n, o = e[0], l = e[1], c = e[2], u = 0, d = [];
      u < o.length;
      u++
    )
      (n = o[u]),
        Object.prototype.hasOwnProperty.call(r, n) && r[n] && d.push(r[n][0]),
        (r[n] = 0);
    for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
    m && m(e);
    while (d.length) d.shift()();
    return i.push.apply(i, c || []), a();
  }
  function a() {
    for (var t, e = 0; e < i.length; e++) {
      for (var a = i[e], s = !0, o = 1; o < a.length; o++) {
        var l = a[o];
        0 !== r[l] && (s = !1);
      }
      s && (i.splice(e--, 1), (t = n((n.s = a[0]))));
    }
    return t;
  }
  var s = {},
    r = {app: 0},
    i = [];
  function n(e) {
    if (s[e]) return s[e].exports;
    var a = (s[e] = {i: e, l: !1, exports: {}});
    return t[e].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = t),
    (n.c = s),
    (n.d = function (t, e, a) {
      n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: a});
    }),
    (n.r = function (t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
        Object.defineProperty(t, '__esModule', {value: !0});
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, 'default', {enumerable: !0, value: t}),
        2 & e && 'string' != typeof t)
      )
        for (var s in t)
          n.d(
            a,
            s,
            function (e) {
              return t[e];
            }.bind(null, s)
          );
      return a;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t['default'];
            }
          : function () {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = '/admin/dashboard/');
  var o = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var c = 0; c < o.length; c++) e(o[c]);
  var m = l;
  i.push([0, 'chunk-vendors']), a();
})({
  0: function (t, e, a) {
    t.exports = a('56d7');
  },
  '01ad': function (t, e, a) {
    'use strict';
    var s = a('9134'),
      r = a.n(s);
    r.a;
  },
  '034f': function (t, e, a) {
    'use strict';
    var s = a('85ec'),
      r = a.n(s);
    r.a;
  },
  '106c': function (t, e, a) {},
  '15fb': function (t, e, a) {
    'use strict';
    var s = a('888a'),
      r = a.n(s);
    r.a;
  },
  '22c5': function (t, e, a) {},
  2662: function (t, e, a) {},
  2705: function (t, e, a) {},
  '2ef0e': function (t, e, a) {},
  '3e7e': function (t, e, a) {},
  '42ef': function (t, e, a) {
    'use strict';
    var s = a('3e7e'),
      r = a.n(s);
    e['default'] = r.a;
  },
  '48a9': function (t, e, a) {},
  '4cad': function (t, e, a) {
    'use strict';
    var s = a('2662'),
      r = a.n(s);
    r.a;
  },
  '4f60': function (t, e, a) {
    'use strict';
    var s = a('48a9'),
      r = a.n(s);
    r.a;
  },
  '56d7': function (t, e, a) {
    'use strict';
    a.r(e);
    a('e260'), a('e6cf'), a('cca6'), a('a79d');
    var s = a('2b0e'),
      r = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          {staticClass: 'app-global-wrapper', attrs: {id: 'app'}},
          [
            t.notify
              ? a('div', {staticClass: 'msg-box', on: {click: t.closeMsgBox}}, [
                  t._v(' ' + t._s(this.msg) + ' '),
                ])
              : t._e(),
            t.loading ? a('div', {staticClass: 'loading-overlay'}) : t._e(),
            t.loading ? a('div', {staticClass: 'spinner'}) : t._e(),
            a(
              'div',
              {staticClass: 'app-wrapper'},
              [a('TopPanel'), a('NavigationPanel'), a('DataPanel')],
              1
            ),
          ]
        );
      },
      i = [],
      n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          {staticClass: 'top-panel', class: {'panel-open': !t.isCollapsed}},
          [
            a('div', {staticClass: 'bars-wrapper'}, [
              a(
                'div',
                {staticClass: 'bars-container', on: {click: t.toggleNav}},
                [a('div', {staticClass: 'bar-middle'})]
              ),
            ]),
            a('div'),
            a(
              'div',
              {staticClass: 'settings-wrapper', on: {click: t.toggleSettings}},
              [
                a('i', {staticClass: 'fa fa-cog settings-icon'}),
                t.isSettingOpen
                  ? a('div', {staticClass: 'settings-panel'}, [
                      a('ul', {staticClass: 'settings'}, [
                        a(
                          'li',
                          [
                            a('router-link', {attrs: {to: '/notifications'}}, [
                              a('a', {attrs: {href: 'notifications'}}, [
                                t._v('Notifications'),
                              ]),
                            ]),
                          ],
                          1
                        ),
                        a(
                          'li',
                          [
                            a('router-link', {attrs: {to: '/profile'}}, [
                              a('a', {attrs: {href: 'profile'}}, [
                                t._v('Profile'),
                              ]),
                            ]),
                          ],
                          1
                        ),
                        t._m(0),
                      ]),
                    ])
                  : t._e(),
              ]
            ),
          ]
        );
      },
      o = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('li', [
            a('a', {attrs: {href: '/admin/logout'}}, [t._v('Sign Out')]),
          ]);
        },
      ],
      l = {
        name: 'TopPanel',
        data: function () {
          return {isCollapsed: !0, isSettingOpen: !1};
        },
        methods: {
          toggleNav: function () {
            this.isCollapsed = !this.isCollapsed;
          },
          toggleSettings: function () {
            this.isSettingOpen = !this.isSettingOpen;
          },
        },
      },
      c = l,
      m = (a('bf1f'), a('2877')),
      u = Object(m['a'])(c, n, o, !1, null, '21cc86bc', null),
      d = u.exports,
      p = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'navigation-panel'}, [
          a('ul', [
            a(
              'li',
              [
                a(
                  'router-link',
                  {attrs: {to: '/admin/dashboard/destinations'}},
                  [
                    a('a', {attrs: {href: '/admin/dashboard/destinations'}}, [
                      a('i', {staticClass: 'fa fa-home'}),
                      a('span', [t._v('Destinations')]),
                    ]),
                  ]
                ),
              ],
              1
            ),
            a(
              'li',
              [
                a('router-link', {attrs: {to: '/admin/dashboard/substyles'}}, [
                  a('a', {attrs: {href: '/admin/dashboard/substyles'}}, [
                    a('i', {staticClass: 'fa fa-building'}),
                    a('span', [t._v('Substyles')]),
                  ]),
                ]),
              ],
              1
            ),
            a(
              'li',
              [
                a('router-link', {attrs: {to: '/admin/dashboard/bookings'}}, [
                  a('a', {attrs: {href: '/admin/dashboard/bookings'}}, [
                    a('i', {staticClass: 'fa fa-address-card'}),
                    a('span', [t._v('Bookings')]),
                  ]),
                ]),
              ],
              1
            ),
            a(
              'li',
              [
                a('router-link', {attrs: {to: '/admin/dashboard/styles'}}, [
                  a('a', {attrs: {href: '/admin/dashboard/styles'}}, [
                    a('i', {staticClass: 'fa fa-map'}),
                    a('span', [t._v('Trip Styles')]),
                  ]),
                ]),
              ],
              1
            ),
            a(
              'li',
              [
                a('router-link', {attrs: {to: '/admin/dashboard/tours'}}, [
                  a('a', {attrs: {href: '/admin/dashboard/tours'}}, [
                    a('i', {staticClass: 'fa fa-bus'}),
                    a('span', [t._v('Tours')]),
                  ]),
                ]),
              ],
              1
            ),
            a(
              'li',
              [
                a('router-link', {attrs: {to: '/admin/dashboard/blogs'}}, [
                  a('a', {attrs: {href: '/admin/dashboard/blogs'}}, [
                    a('i', {staticClass: 'fa fa-book'}),
                    a('span', [t._v('Blogs')]),
                  ]),
                ]),
              ],
              1
            ),
            a(
              'li',
              [
                a('router-link', {attrs: {to: '/admin/dashboard/careers'}}, [
                  a('a', {attrs: {href: '/admin/dashboard/careers'}}, [
                    a('i', {staticClass: 'fa fa-tree'}),
                    a('span', [t._v('Careers')]),
                  ]),
                ]),
              ],
              1
            ),
            a(
              'li',
              [
                a('router-link', {attrs: {to: '/admin/dashboard/sections'}}, [
                  a('a', {attrs: {href: '/admin/dashboard/sections'}}, [
                    a('i', {staticClass: 'fa fa-tree'}),
                    a('span', [t._v('Sections')]),
                  ]),
                ]),
              ],
              1
            ),
            a(
              'li',
              [
                a('router-link', {attrs: {to: '/admin/dashboard/upload'}}, [
                  a('a', {attrs: {href: '/admin/dashboard/upload'}}, [
                    a('i', {staticClass: 'fa fa-upload'}),
                    a('span', [t._v('Uploads')]),
                  ]),
                ]),
              ],
              1
            ),
          ]),
        ]);
      },
      f = [],
      v = {name: 'NavigationPanel'},
      g = v,
      h = (a('a31d'), Object(m['a'])(g, p, f, !1, null, '69e5079a', null)),
      _ = h.exports,
      b = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'data-panel'}, [a('router-view')], 1);
      },
      C = [],
      y = {name: 'DataPanel'},
      N = y,
      k = (a('15fb'), Object(m['a'])(N, b, C, !1, null, '1449eac5', null)),
      $ = k.exports,
      x = new s['a'](),
      S = {
        name: 'App',
        data: function () {
          return {loading: !1, notify: !1, msg: 'Some example message'};
        },
        components: {TopPanel: d, NavigationPanel: _, DataPanel: $},
        methods: {
          closeMsgBox: function () {
            (this.notify = !1), (this.msg = '');
          },
        },
        created: function () {
          var t = this;
          this.$store.dispatch('getDestinations'),
            this.$store.dispatch('getStyles'),
            this.$store.dispatch('getSubstyles'),
            this.$store.dispatch('getTours'),
            this.$store.dispatch('getBookings'),
            this.$store.dispatch('getBlogs'),
            this.$store.dispatch('getCareers'),
            this.$store.dispatch('getBlogs'),
            x.$on('loadStart', function (e) {
              (t.loading = !0), (t.msg = e.msg);
            }),
            x.$on('loadEnd', function () {
              (t.loading = !1), (t.msg = '');
            }),
            x.$on('notify', function (e) {
              (t.notify = !0), (t.msg = e.msg);
            });
        },
      },
      E = S,
      P = (a('034f'), Object(m['a'])(E, r, i, !1, null, null, null)),
      w = P.exports,
      T = a('8c4f'),
      I = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          {staticClass: 'destination-list-wrapper'},
          [
            a(
              'div',
              {staticClass: 'destination-list'},
              t._l(t.destinations, function (t) {
                return a('DestinationListItem', {
                  key: t._id,
                  attrs: {destination: t},
                });
              }),
              1
            ),
            a(
              'router-link',
              {attrs: {to: '/admin/dashboard/destinations/new'}},
              [
                a('div', {staticClass: 'add-btn-wrapper'}, [
                  a('a', {staticClass: 'add-btn', attrs: {href: '#'}}, [
                    t._v('+'),
                  ]),
                ]),
              ]
            ),
          ],
          1
        );
      },
      D = [],
      L = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          {staticClass: 'list-item-wrapper'},
          [
            a(
              'router-link',
              {
                attrs: {
                  to: '/admin/dashboard/destinations/' + t.destination._id,
                },
              },
              [
                a('div', {staticClass: 'list-item'}, [
                  a('div', {staticClass: 'list-item-name'}, [
                    a('p', [t._v(t._s(t.destination.heading))]),
                  ]),
                ]),
              ]
            ),
          ],
          1
        );
      },
      q = [],
      B = {name: 'DestinationListItem', props: ['destination']},
      A = B,
      U = (a('7e3c'), Object(m['a'])(A, L, q, !1, null, null, null)),
      O = U.exports,
      j = {
        name: 'DestinationList',
        computed: {
          destinations: function () {
            return this.$store.getters.destinations;
          },
        },
        components: {DestinationListItem: O},
      },
      F = j,
      M = (a('01ad'), Object(m['a'])(F, I, D, !1, null, null, null)),
      R = M.exports,
      H = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'destination-form-wrapper'}, [
          t.destination
            ? a('div', {staticClass: 'destination-form'}, [
                a(
                  'form',
                  {staticClass: 'form'},
                  [
                    a('div', {staticClass: 'form-field'}, [
                      t._m(0),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.destination.linkName,
                            expression: 'destination.linkName',
                          },
                        ],
                        staticClass: 'form-input',
                        class: {'border-red': t.errors.linkName},
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.destination.linkName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.destination, 'linkName', e.target.value);
                          },
                        },
                      }),
                      t.errors.linkName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.linkName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(1),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.destination.heading,
                            expression: 'destination.heading',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.destination.heading},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.destination, 'heading', e.target.value);
                          },
                        },
                      }),
                      t.errors.heading
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.heading)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(2),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.destination.imageName,
                            expression: 'destination.imageName',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.destination.imageName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(
                                t.destination,
                                'imageName',
                                e.target.value
                              );
                          },
                        },
                      }),
                      t.errors.imageName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.imageName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(3),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.destination.imageCaption,
                            expression: 'destination.imageCaption',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.destination.imageCaption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(
                                t.destination,
                                'imageCaption',
                                e.target.value
                              );
                          },
                        },
                      }),
                      t.errors.imageCaption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.imageCaption)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(4),
                      a('textarea', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.destination.caption,
                            expression: 'destination.caption',
                          },
                        ],
                        staticClass: 'form-area',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.destination.caption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.destination, 'caption', e.target.value);
                          },
                        },
                      }),
                      t.errors.caption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.caption)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(5),
                      a(
                        'div',
                        {staticClass: 'cities'},
                        t._l(t.tours, function (e) {
                          return a('label', {key: e._id}, [
                            a('input', {
                              staticClass: 'form-checkbox',
                              attrs: {type: 'checkbox', name: 'tours[]'},
                              domProps: {
                                checked: !!t.isTourPresent(e._id),
                                value: e._id,
                              },
                            }),
                            a('span', {staticClass: 'checkbox-label'}, [
                              t._v(t._s(e.heading)),
                            ]),
                          ]);
                        }),
                        0
                      ),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(6),
                      a(
                        'select',
                        {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: t.destination.blog._id,
                              expression: 'destination.blog._id',
                            },
                          ],
                          staticClass: 'form-input',
                          on: {
                            change: function (e) {
                              var a = Array.prototype.filter
                                .call(e.target.options, function (t) {
                                  return t.selected;
                                })
                                .map(function (t) {
                                  var e = '_value' in t ? t._value : t.value;
                                  return e;
                                });
                              t.$set(
                                t.destination.blog,
                                '_id',
                                e.target.multiple ? a : a[0]
                              );
                            },
                          },
                        },
                        [
                          a('option', {attrs: {value: 'undefined'}}, [
                            t._v('Not Selected'),
                          ]),
                          t._l(t.blogs, function (e) {
                            return a(
                              'option',
                              {key: e._id, domProps: {value: e._id}},
                              [t._v(t._s(e.title))]
                            );
                          }),
                        ],
                        2
                      ),
                    ]),
                    a(
                      'a',
                      {
                        staticClass: 'form-btn',
                        attrs: {disable: t.loading, href: '#'},
                        on: {click: t.saveData},
                      },
                      [t._v('Save')]
                    ),
                    a(
                      'router-link',
                      {attrs: {to: '/admin/dashboard/destinations'}},
                      [
                        a(
                          'a',
                          {
                            staticClass: 'form-btn',
                            attrs: {href: '/admin/dashboard/destinations'},
                            on: {click: t.deleteDestById},
                          },
                          [t._v('Delete')]
                        ),
                      ]
                    ),
                    a('div', {staticClass: 'loader'}, [
                      a('p', {staticStyle: {color: 'green'}}, [
                        t._v('Last Update Status: [' + t._s(t.msg) + ']'),
                      ]),
                    ]),
                  ],
                  1
                ),
              ])
            : t._e(),
        ]);
      },
      G = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'linkName'}},
            [t._v('Link Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Heading '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Image Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Image Caption '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Caption '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Tours '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Blog '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
      ],
      z = (a('caad'), a('2532'), a('2ef0')),
      Y = a.n(z),
      W = {
        name: 'DestinationForm',
        props: ['id'],
        data: function () {
          return {
            destination: {},
            loading: !1,
            msg: 'None',
            errors: {
              linkName: !1,
              heading: !1,
              imageName: !1,
              imageCaption: !1,
              caption: !1,
            },
          };
        },
        computed: {
          tours: function () {
            return this.$store.getters.tours;
          },
          blogs: function () {
            return this.$store.getters.blogs;
          },
        },
        created: function () {
          this.destination = Y.a.cloneDeep(
            this.$store.getters.destById(this.id)
          );
        },
        methods: {
          isTourPresent: function (t) {
            for (var e = 0; e < this.destination.tours.length; e++)
              if (this.destination.tours[e]._id === t) return !0;
            return !1;
          },
          deleteDestById: function () {
            this.$store.dispatch(
              'deleteDestination',
              this.destination.linkName
            );
          },
          saveData: function (t) {
            var e = this;
            if ((t.preventDefault(), this.validateForm())) {
              for (
                var a = [], s = document.getElementsByName('tours[]'), r = 0;
                r < s.length;
                r++
              )
                s[r].checked && a.push(s[r]._value);
              (this.destination.tours = a),
                (this.destination.blog = this.destination.blog._id),
                (this.loading = !0),
                (this.msg = 'Saving...'),
                x.$emit('loadStart', {msg: 'Saving'}),
                this.$store
                  .dispatch('updateDestination', this.destination)
                  .then(function () {
                    (e.destination = Y.a.cloneDeep(
                      e.$store.getters.destById(e.id)
                    )),
                      (e.loading = !1),
                      (e.msg = 'Updated'),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Save Success'});
                  })
                  .catch(function (t) {
                    (e.destination = Y.a.cloneDeep(
                      e.$store.getters.destById(e.id)
                    )),
                      (e.loading = !1),
                      (e.msg = t),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Save Failed'});
                  });
            }
          },
          validateForm: function () {
            var t = !0;
            return (
              '' == this.destination.linkName
                ? ((this.errors.linkName = 'Link name cannot be empty.'),
                  (t = !1))
                : this.destination.linkName.includes(' ')
                ? (this.errors.linkName = 'Link name cannot have spaces.')
                : this.destination.linkName.length > 20 &&
                  (this.errors.linkName =
                    'Link name cannot be longer than 20 characters.'),
              '' == this.destination.heading &&
                ((this.errors.heading = 'Heading cannot be empty.'), (t = !1)),
              '' == this.destination.imageName &&
                ((this.errors.imageName = 'Image name cannot be empty.'),
                (t = !1)),
              '' == this.destination.imageCaption &&
                ((this.errors.imageCaption = 'Image caption cannot be empty.'),
                (t = !1)),
              '' == this.destination.caption
                ? ((this.errors.caption = 'Caption cannot be empty.'), (t = !1))
                : this.destination.caption.length > 300 &&
                  ((this.errors.caption =
                    'Caption cannot be longer than 300 characters.'),
                  (t = !1)),
              t
            );
          },
        },
      },
      J = W,
      K = (a('794a'), Object(m['a'])(J, H, G, !1, null, null, null)),
      V = K.exports,
      Q = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'destination-form-wrapper'}, [
          t.destination
            ? a('div', {staticClass: 'destination-form'}, [
                a(
                  'form',
                  {staticClass: 'form'},
                  [
                    a('div', {staticClass: 'form-field'}, [
                      t._m(0),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.destination.linkName,
                            expression: 'destination.linkName',
                          },
                        ],
                        staticClass: 'form-input',
                        class: {'border-red': t.errors.linkName},
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.destination.linkName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.destination, 'linkName', e.target.value);
                          },
                        },
                      }),
                      t.errors.linkName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.linkName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(1),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.destination.heading,
                            expression: 'destination.heading',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.destination.heading},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.destination, 'heading', e.target.value);
                          },
                        },
                      }),
                      t.errors.heading
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.heading)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(2),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.destination.imageName,
                            expression: 'destination.imageName',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.destination.imageName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(
                                t.destination,
                                'imageName',
                                e.target.value
                              );
                          },
                        },
                      }),
                      t.errors.imageName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.imageName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(3),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.destination.imageCaption,
                            expression: 'destination.imageCaption',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.destination.imageCaption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(
                                t.destination,
                                'imageCaption',
                                e.target.value
                              );
                          },
                        },
                      }),
                      t.errors.imageCaption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.imageCaption)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(4),
                      a('textarea', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.destination.caption,
                            expression: 'destination.caption',
                          },
                        ],
                        staticClass: 'form-area',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.destination.caption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.destination, 'caption', e.target.value);
                          },
                        },
                      }),
                      t.errors.caption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.caption)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(5),
                      a(
                        'div',
                        {staticClass: 'cities'},
                        t._l(t.tours, function (e) {
                          return a('label', {key: e._id}, [
                            a('input', {
                              staticClass: 'form-checkbox',
                              attrs: {type: 'checkbox', name: 'tours[]'},
                              domProps: {value: e._id},
                            }),
                            a('span', {staticClass: 'checkbox-label'}, [
                              t._v(t._s(e.heading)),
                            ]),
                          ]);
                        }),
                        0
                      ),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(6),
                      a(
                        'select',
                        {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: t.destination.blog,
                              expression: 'destination.blog',
                            },
                          ],
                          staticClass: 'form-input',
                          on: {
                            change: function (e) {
                              var a = Array.prototype.filter
                                .call(e.target.options, function (t) {
                                  return t.selected;
                                })
                                .map(function (t) {
                                  var e = '_value' in t ? t._value : t.value;
                                  return e;
                                });
                              t.$set(
                                t.destination,
                                'blog',
                                e.target.multiple ? a : a[0]
                              );
                            },
                          },
                        },
                        [
                          a('option', {attrs: {value: ''}}, [
                            t._v('Not Selected'),
                          ]),
                          t._l(t.blogs, function (e) {
                            return a(
                              'option',
                              {key: e._id, domProps: {value: e._id}},
                              [t._v(t._s(e.title))]
                            );
                          }),
                        ],
                        2
                      ),
                    ]),
                    a(
                      'a',
                      {
                        staticClass: 'form-btn',
                        attrs: {disable: t.loading, href: '#'},
                        on: {click: t.saveData},
                      },
                      [t._v('Save')]
                    ),
                    a(
                      'router-link',
                      {attrs: {to: '/admin/dashboard/destinations'}},
                      [
                        a(
                          'a',
                          {
                            staticClass: 'form-btn',
                            attrs: {href: '/admin/dashboard/destinations'},
                          },
                          [t._v('Back')]
                        ),
                      ]
                    ),
                    a('div', {staticClass: 'loader'}, [
                      a('p', {staticStyle: {color: 'green'}}, [
                        t._v('Last Update Status: [' + t._s(t.msg) + ']'),
                      ]),
                    ]),
                  ],
                  1
                ),
              ])
            : t._e(),
        ]);
      },
      X = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'linkName'}},
            [t._v('Link Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Heading '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Image Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Image Caption '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Caption '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Tours '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Blog '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
      ],
      Z = {
        name: 'DestinationFormNew',
        props: ['id'],
        data: function () {
          return {
            loading: !1,
            msg: 'None',
            destination: {
              linkName: '',
              heading: '',
              imageName: '',
              imageCaption: '',
              caption: '',
              tours: [],
              blog: '',
            },
            errors: {
              linkName: !1,
              heading: !1,
              imageName: !1,
              imageCaption: !1,
              caption: !1,
            },
          };
        },
        computed: {
          tours: function () {
            return this.$store.getters.tours;
          },
          blogs: function () {
            return this.$store.getters.blogs;
          },
        },
        methods: {
          saveData: function (t) {
            var e = this;
            if ((t.preventDefault(), this.validateForm())) {
              for (
                var a = [], s = document.getElementsByName('tour[]'), r = 0;
                r < s.length;
                r++
              )
                s[r].checked && a.push(s[r]._value);
              (this.destination.tours = a),
                (this.loading = !0),
                (this.msg = 'Saving...'),
                x.$emit('loadStart', {msg: 'Saving...'}),
                this.$store
                  .dispatch('addDestination', this.destination)
                  .then(function () {
                    (e.loading = !1),
                      (e.msg = 'Updated'),
                      x.$emit('loadEnd', {msg: 'Saved'}),
                      x.$emit('notify', {msg: 'Data Saved'});
                  })
                  .catch(function (t) {
                    (e.loading = !1),
                      (e.msg = t),
                      x.$emit('loadEnd', {msg: 'Failed'}),
                      x.$emit('notify', {msg: 'Failed'});
                  });
            }
          },
          validateForm: function () {
            var t = !0;
            return (
              '' == this.destination.linkName
                ? ((this.errors.linkName = 'Link name cannot be empty.'),
                  (t = !1))
                : this.destination.linkName.includes(' ')
                ? ((this.errors.linkName = 'Link name cannot have spaces.'),
                  (t = !1))
                : this.destination.linkName.length > 20
                ? ((this.errors.linkName =
                    'Link name cannot be longer than 20 characters.'),
                  (t = !1))
                : (this.errors.linkName = ''),
              '' == this.destination.heading
                ? ((this.errors.heading = 'Heading cannot be empty.'), (t = !1))
                : (this.errors.heading = ''),
              '' == this.destination.imageName
                ? ((this.errors.imageName = 'Image name cannot be empty.'),
                  (t = !1))
                : (this.errors.imageName = ''),
              '' == this.destination.imageCaption
                ? ((this.errors.imageCaption =
                    'Image caption cannot be empty.'),
                  (t = !1))
                : (this.errors.imageCaption = ''),
              '' == this.destination.caption
                ? ((this.errors.caption = 'Caption cannot be empty.'), (t = !1))
                : this.destination.caption.length > 300
                ? ((this.errors.caption =
                    'Caption cannot be longer than 300 characters.'),
                  (t = !1))
                : (this.errors.caption = ''),
              t
            );
          },
        },
      },
      tt = Z,
      et = Object(m['a'])(tt, Q, X, !1, null, '315a1a07', null),
      at = et.exports,
      st = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          {staticClass: 'destination-list-wrapper'},
          [
            a(
              'div',
              {staticClass: 'destination-list'},
              t._l(t.substyles, function (t) {
                return a('SubstyleListItem', {
                  key: t._id,
                  attrs: {substyle: t},
                });
              }),
              1
            ),
            a('router-link', {attrs: {to: '/admin/dashboard/substyles/new'}}, [
              a('div', {staticClass: 'add-btn-wrapper'}, [
                a('a', {staticClass: 'add-btn', attrs: {href: '#'}}, [
                  t._v('+'),
                ]),
              ]),
            ]),
          ],
          1
        );
      },
      rt = [],
      it = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          {staticClass: 'list-item-wrapper'},
          [
            a(
              'router-link',
              {attrs: {to: '/admin/dashboard/substyles/' + t.substyle._id}},
              [
                a('div', {staticClass: 'list-item'}, [
                  a('div', {staticClass: 'list-item-name'}, [
                    a('p', [t._v(t._s(t.substyle.heading))]),
                  ]),
                ]),
              ]
            ),
          ],
          1
        );
      },
      nt = [],
      ot = {name: 'SubstyleListItem', props: ['substyle']},
      lt = ot,
      ct = Object(m['a'])(lt, it, nt, !1, null, '69f1a40c', null),
      mt = ct.exports,
      ut = {
        name: 'SubstyleList',
        computed: {
          substyles: function () {
            return this.$store.getters.substyles;
          },
        },
        components: {SubstyleListItem: mt},
      },
      dt = ut,
      pt = Object(m['a'])(dt, st, rt, !1, null, '7c2d8762', null),
      ft = pt.exports,
      vt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'destination-form-wrapper'}, [
          t.substyle
            ? a('div', {staticClass: 'destination-form'}, [
                a(
                  'form',
                  {staticClass: 'form'},
                  [
                    a('div', {staticClass: 'form-field'}, [
                      t._m(0),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.substyle.linkName,
                            expression: 'substyle.linkName',
                          },
                        ],
                        staticClass: 'form-input',
                        class: {'border-red': t.errors.linkName},
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.substyle.linkName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.substyle, 'linkName', e.target.value);
                          },
                        },
                      }),
                      t.errors.linkName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.linkName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(1),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.substyle.heading,
                            expression: 'substyle.heading',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.substyle.heading},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.substyle, 'heading', e.target.value);
                          },
                        },
                      }),
                      t.errors.heading
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.heading)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(2),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.substyle.imageName,
                            expression: 'substyle.imageName',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.substyle.imageName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.substyle, 'imageName', e.target.value);
                          },
                        },
                      }),
                      t.errors.imageName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.imageName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(3),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.substyle.imageCaption,
                            expression: 'substyle.imageCaption',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.substyle.imageCaption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(
                                t.substyle,
                                'imageCaption',
                                e.target.value
                              );
                          },
                        },
                      }),
                      t.errors.imageCaption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.imageCaption)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(4),
                      a('textarea', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.substyle.caption,
                            expression: 'substyle.caption',
                          },
                        ],
                        staticClass: 'form-area',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.substyle.caption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.substyle, 'caption', e.target.value);
                          },
                        },
                      }),
                      t.errors.caption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.caption)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(5),
                      a(
                        'div',
                        {staticClass: 'cities'},
                        t._l(t.tours, function (e) {
                          return a('label', {key: e._id}, [
                            a('input', {
                              staticClass: 'form-checkbox',
                              attrs: {type: 'checkbox', name: 'tours[]'},
                              domProps: {
                                checked: !!t.isTourPresent(e._id),
                                value: e._id,
                              },
                            }),
                            a('span', {staticClass: 'checkbox-label'}, [
                              t._v(t._s(e.heading)),
                            ]),
                          ]);
                        }),
                        0
                      ),
                    ]),
                    a(
                      'a',
                      {
                        staticClass: 'form-btn',
                        attrs: {disable: t.loading, href: '#'},
                        on: {click: t.saveData},
                      },
                      [t._v('Save')]
                    ),
                    a(
                      'router-link',
                      {attrs: {to: '/admin/dashboard/substyles'}},
                      [
                        a(
                          'a',
                          {
                            staticClass: 'form-btn',
                            attrs: {href: '/admin/dashboard/substyles'},
                            on: {click: t.deleteSubstyleById},
                          },
                          [t._v('Delete')]
                        ),
                      ]
                    ),
                    a('div', {staticClass: 'loader'}, [
                      a('p', {staticStyle: {color: 'green'}}, [
                        t._v('Last Update Status: [' + t._s(t.msg) + ']'),
                      ]),
                    ]),
                  ],
                  1
                ),
              ])
            : t._e(),
        ]);
      },
      gt = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'linkName'}},
            [t._v('Link Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Heading '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Image Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Image Caption '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Caption '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Tours '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
      ],
      ht = {
        name: 'SubstyleForm',
        props: ['id'],
        data: function () {
          return {
            substyle: {},
            loading: !1,
            msg: 'None',
            errors: {
              linkName: !1,
              heading: !1,
              imageName: !1,
              imageCaption: !1,
              caption: !1,
            },
          };
        },
        computed: {
          tours: function () {
            return this.$store.getters.tours;
          },
        },
        created: function () {
          this.substyle = Y.a.cloneDeep(
            this.$store.getters.substyleById(this.id)
          );
        },
        methods: {
          isTourPresent: function (t) {
            for (var e = 0; e < this.substyle.tours.length; e++)
              if (this.substyle.tours[e]._id === t) return !0;
            return !1;
          },
          deleteSubstyleById: function () {
            this.$store.dispatch('deleteSubstyle', this.substyle.linkName);
          },
          saveData: function (t) {
            var e = this;
            if ((t.preventDefault(), this.validateForm())) {
              for (
                var a = [], s = document.getElementsByName('tours[]'), r = 0;
                r < s.length;
                r++
              )
                s[r].checked && a.push(s[r]._value);
              (this.substyle.tours = a),
                (this.loading = !0),
                (this.msg = 'Saving...'),
                x.$emit('loadStart', {msg: 'Saving'}),
                this.$store
                  .dispatch('updateSubstyle', this.substyle)
                  .then(function () {
                    (e.substyle = Y.a.cloneDeep(
                      e.$store.getters.substyleById(e.id)
                    )),
                      (e.loading = !1),
                      (e.msg = 'Updated'),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Save Success'});
                  })
                  .catch(function (t) {
                    (e.substyle = Y.a.cloneDeep(
                      e.$store.getters.substyleById(e.id)
                    )),
                      (e.loading = !1),
                      (e.msg = t),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Save Failed'});
                  });
            }
          },
          validateForm: function () {
            var t = !0;
            return (
              '' == this.substyle.linkName
                ? ((this.errors.linkName = 'Link name cannot be empty.'),
                  (t = !1))
                : this.substyle.linkName.includes(' ')
                ? (this.errors.linkName = 'Link name cannot have spaces.')
                : this.substyle.linkName.length > 20 &&
                  (this.errors.linkName =
                    'Link name cannot be longer than 20 characters.'),
              '' == this.substyle.heading &&
                ((this.errors.heading = 'Heading cannot be empty.'), (t = !1)),
              '' == this.substyle.imageName &&
                ((this.errors.imageName = 'Image name cannot be empty.'),
                (t = !1)),
              '' == this.substyle.imageCaption &&
                ((this.errors.imageCaption = 'Image caption cannot be empty.'),
                (t = !1)),
              '' == this.substyle.caption
                ? ((this.errors.caption = 'Caption cannot be empty.'), (t = !1))
                : this.substyle.caption.length > 300 &&
                  ((this.errors.caption =
                    'Caption cannot be longer than 300 characters.'),
                  (t = !1)),
              t
            );
          },
        },
      },
      _t = ht,
      bt = Object(m['a'])(_t, vt, gt, !1, null, '37592a89', null),
      Ct = bt.exports,
      yt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'destination-form-wrapper'}, [
          a('div', {staticClass: 'destination-form'}, [
            a(
              'form',
              {staticClass: 'form'},
              [
                a('div', {staticClass: 'form-field'}, [
                  t._m(0),
                  a('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.substyle.linkName,
                        expression: 'substyle.linkName',
                      },
                    ],
                    staticClass: 'form-input',
                    class: {'border-red': t.errors.linkName},
                    attrs: {type: 'text', name: '', value: '', required: ''},
                    domProps: {value: t.substyle.linkName},
                    on: {
                      input: function (e) {
                        e.target.composing ||
                          t.$set(t.substyle, 'linkName', e.target.value);
                      },
                    },
                  }),
                  t.errors.linkName
                    ? a('span', {staticClass: 'error'}, [
                        t._v(t._s(t.errors.linkName)),
                      ])
                    : t._e(),
                ]),
                a('div', {staticClass: 'form-field'}, [
                  t._m(1),
                  a('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.substyle.heading,
                        expression: 'substyle.heading',
                      },
                    ],
                    staticClass: 'form-input',
                    attrs: {type: 'text', name: '', value: '', required: ''},
                    domProps: {value: t.substyle.heading},
                    on: {
                      input: function (e) {
                        e.target.composing ||
                          t.$set(t.substyle, 'heading', e.target.value);
                      },
                    },
                  }),
                  t.errors.heading
                    ? a('span', {staticClass: 'error'}, [
                        t._v(t._s(t.errors.heading)),
                      ])
                    : t._e(),
                ]),
                a('div', {staticClass: 'form-field'}, [
                  t._m(2),
                  a('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.substyle.imageName,
                        expression: 'substyle.imageName',
                      },
                    ],
                    staticClass: 'form-input',
                    attrs: {type: 'text', name: '', value: '', required: ''},
                    domProps: {value: t.substyle.imageName},
                    on: {
                      input: function (e) {
                        e.target.composing ||
                          t.$set(t.substyle, 'imageName', e.target.value);
                      },
                    },
                  }),
                  t.errors.imageName
                    ? a('span', {staticClass: 'error'}, [
                        t._v(t._s(t.errors.imageName)),
                      ])
                    : t._e(),
                ]),
                a('div', {staticClass: 'form-field'}, [
                  t._m(3),
                  a('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.substyle.imageCaption,
                        expression: 'substyle.imageCaption',
                      },
                    ],
                    staticClass: 'form-input',
                    attrs: {type: 'text', name: '', value: '', required: ''},
                    domProps: {value: t.substyle.imageCaption},
                    on: {
                      input: function (e) {
                        e.target.composing ||
                          t.$set(t.substyle, 'imageCaption', e.target.value);
                      },
                    },
                  }),
                  t.errors.imageCaption
                    ? a('span', {staticClass: 'error'}, [
                        t._v(t._s(t.errors.imageCaption)),
                      ])
                    : t._e(),
                ]),
                a('div', {staticClass: 'form-field'}, [
                  t._m(4),
                  a('textarea', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.substyle.caption,
                        expression: 'substyle.caption',
                      },
                    ],
                    staticClass: 'form-area',
                    attrs: {type: 'text', name: '', value: '', required: ''},
                    domProps: {value: t.substyle.caption},
                    on: {
                      input: function (e) {
                        e.target.composing ||
                          t.$set(t.substyle, 'caption', e.target.value);
                      },
                    },
                  }),
                  t.errors.caption
                    ? a('span', {staticClass: 'error'}, [
                        t._v(t._s(t.errors.caption)),
                      ])
                    : t._e(),
                ]),
                a('div', {staticClass: 'form-field'}, [
                  t._m(5),
                  a(
                    'div',
                    {staticClass: 'cities'},
                    t._l(t.tours, function (e) {
                      return a('label', {key: e._id}, [
                        a('input', {
                          staticClass: 'form-checkbox',
                          attrs: {type: 'checkbox', name: 'tours[]'},
                          domProps: {value: e._id},
                        }),
                        a('span', {staticClass: 'checkbox-label'}, [
                          t._v(t._s(e.heading)),
                        ]),
                      ]);
                    }),
                    0
                  ),
                ]),
                a(
                  'a',
                  {
                    staticClass: 'form-btn',
                    attrs: {disable: t.loading, href: '#'},
                    on: {click: t.saveData},
                  },
                  [t._v('Save')]
                ),
                a('router-link', {attrs: {to: '/admin/dashboard/substyles'}}, [
                  a(
                    'a',
                    {
                      staticClass: 'form-btn',
                      attrs: {href: '/admin/dashboard/substyles'},
                    },
                    [t._v('Back')]
                  ),
                ]),
                a('div', {staticClass: 'loader'}, [
                  a('p', {staticStyle: {color: 'green'}}, [
                    t._v('Last Update Status: [' + t._s(t.msg) + ']'),
                  ]),
                ]),
              ],
              1
            ),
          ]),
        ]);
      },
      Nt = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'linkName'}},
            [t._v('Link Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Heading '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Image Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Image Caption '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Caption '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Tours '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
      ],
      kt = {
        name: 'SubstyleFormNew',
        props: ['id'],
        data: function () {
          return {
            substyle: {
              linkName: '',
              imageName: '',
              imageCaption: '',
              heading: '',
              caption: '',
              tours: [],
            },
            loading: !1,
            msg: 'None',
            errors: {
              linkName: !1,
              heading: !1,
              imageName: !1,
              imageCaption: !1,
              caption: !1,
            },
          };
        },
        computed: {
          tours: function () {
            return this.$store.getters.tours;
          },
        },
        methods: {
          saveData: function (t) {
            var e = this;
            if ((t.preventDefault(), this.validateForm())) {
              for (
                var a = [], s = document.getElementsByName('tours[]'), r = 0;
                r < s.length;
                r++
              )
                s[r].checked && a.push(s[r]._value);
              (this.substyle.tours = a),
                (this.loading = !0),
                (this.msg = 'Saving...'),
                x.$emit('loadStart', {msg: 'Saving'}),
                this.$store
                  .dispatch('addSubstyle', this.substyle)
                  .then(function () {
                    (e.loading = !1),
                      (e.msg = 'Updated'),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Save Success'});
                  })
                  .catch(function (t) {
                    (e.loading = !1),
                      (e.msg = t),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Save Failed'});
                  });
            }
          },
          validateForm: function () {
            var t = !0;
            return (
              '' == this.substyle.linkName
                ? ((this.errors.linkName = 'Link name cannot be empty.'),
                  (t = !1))
                : this.substyle.linkName.includes(' ')
                ? (this.errors.linkName = 'Link name cannot have spaces.')
                : this.substyle.linkName.length > 20 &&
                  (this.errors.linkName =
                    'Link name cannot be longer than 20 characters.'),
              '' == this.substyle.heading &&
                ((this.errors.heading = 'Heading cannot be empty.'), (t = !1)),
              '' == this.substyle.imageName &&
                ((this.errors.imageName = 'Image name cannot be empty.'),
                (t = !1)),
              '' == this.substyle.imageCaption &&
                ((this.errors.imageCaption = 'Image caption cannot be empty.'),
                (t = !1)),
              '' == this.substyle.caption
                ? ((this.errors.caption = 'Caption cannot be empty.'), (t = !1))
                : this.substyle.caption.length > 300 &&
                  ((this.errors.caption =
                    'Caption cannot be longer than 300 characters.'),
                  (t = !1)),
              t
            );
          },
        },
      },
      $t = kt,
      xt = Object(m['a'])($t, yt, Nt, !1, null, 'b4a3a4b4', null),
      St = xt.exports,
      Et = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          {staticClass: 'destination-list-wrapper'},
          [
            a(
              'div',
              {staticClass: 'destination-list'},
              t._l(t.styles, function (t) {
                return a('StyleListItem', {key: t._id, attrs: {tripstyle: t}});
              }),
              1
            ),
            a('router-link', {attrs: {to: '/admin/dashboard/styles/new'}}, [
              a('div', {staticClass: 'add-btn-wrapper'}, [
                a('a', {staticClass: 'add-btn', attrs: {href: '#'}}, [
                  t._v('+'),
                ]),
              ]),
            ]),
          ],
          1
        );
      },
      Pt = [],
      wt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          {staticClass: 'list-item-wrapper'},
          [
            a(
              'router-link',
              {attrs: {to: '/admin/dashboard/styles/' + t.tripstyle._id}},
              [
                a('div', {staticClass: 'list-item'}, [
                  a('div', {staticClass: 'list-item-name'}, [
                    a('p', [t._v(t._s(t.tripstyle.heading))]),
                  ]),
                ]),
              ]
            ),
          ],
          1
        );
      },
      Tt = [],
      It = {name: 'StyleListItem', props: ['tripstyle']},
      Dt = It,
      Lt = Object(m['a'])(Dt, wt, Tt, !1, null, '2e4ee8c9', null),
      qt = Lt.exports,
      Bt = {
        name: 'StyleList',
        computed: {
          styles: function () {
            return this.$store.getters.styles;
          },
        },
        components: {StyleListItem: qt},
      },
      At = Bt,
      Ut = Object(m['a'])(At, Et, Pt, !1, null, 'c60ece9e', null),
      Ot = Ut.exports,
      jt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'destination-form-wrapper'}, [
          t.style
            ? a('div', {staticClass: 'destination-form'}, [
                a(
                  'form',
                  {staticClass: 'form'},
                  [
                    a('div', {staticClass: 'form-field'}, [
                      t._m(0),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.style.linkName,
                            expression: 'style.linkName',
                          },
                        ],
                        staticClass: 'form-input',
                        class: {'border-red': t.errors.linkName},
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.style.linkName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.style, 'linkName', e.target.value);
                          },
                        },
                      }),
                      t.errors.linkName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.linkName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(1),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.style.heading,
                            expression: 'style.heading',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.style.heading},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.style, 'heading', e.target.value);
                          },
                        },
                      }),
                      t.errors.heading
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.heading)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(2),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.style.imageName,
                            expression: 'style.imageName',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.style.imageName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.style, 'imageName', e.target.value);
                          },
                        },
                      }),
                      t.errors.imageName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.imageName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(3),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.style.imageCaption,
                            expression: 'style.imageCaption',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.style.imageCaption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.style, 'imageCaption', e.target.value);
                          },
                        },
                      }),
                      t.errors.imageCaption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.imageCaption)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(4),
                      a('textarea', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.style.caption,
                            expression: 'style.caption',
                          },
                        ],
                        staticClass: 'form-area',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.style.caption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.style, 'caption', e.target.value);
                          },
                        },
                      }),
                      t.errors.caption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.caption)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(5),
                      a(
                        'div',
                        {staticClass: 'cities'},
                        t._l(t.substyles, function (e) {
                          return a('label', {key: e._id}, [
                            a('input', {
                              staticClass: 'form-checkbox',
                              attrs: {type: 'checkbox', name: 'substyles[]'},
                              domProps: {
                                checked: !!t.isSubstylePresent(e._id),
                                value: e._id,
                              },
                            }),
                            a('span', {staticClass: 'checkbox-label'}, [
                              t._v(t._s(e.heading)),
                            ]),
                          ]);
                        }),
                        0
                      ),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(6),
                      a(
                        'div',
                        {staticClass: 'cities'},
                        t._l(t.tours, function (e) {
                          return a('label', {key: e._id}, [
                            a('input', {
                              staticClass: 'form-checkbox',
                              attrs: {type: 'checkbox', name: 'tours[]'},
                              domProps: {
                                checked: !!t.isTourPresent(e._id),
                                value: e._id,
                              },
                            }),
                            a('span', {staticClass: 'checkbox-label'}, [
                              t._v(t._s(e.heading)),
                            ]),
                          ]);
                        }),
                        0
                      ),
                    ]),
                    a(
                      'a',
                      {
                        staticClass: 'form-btn',
                        attrs: {disable: t.loading, href: '#'},
                        on: {click: t.saveData},
                      },
                      [t._v('Save')]
                    ),
                    a('router-link', {attrs: {to: '/admin/dashboard/styles'}}, [
                      a(
                        'a',
                        {
                          staticClass: 'form-btn',
                          attrs: {href: '/admin/dashboard/styles'},
                          on: {click: t.deleteStyleById},
                        },
                        [t._v('Delete')]
                      ),
                    ]),
                    a('div', {staticClass: 'loader'}, [
                      a('p', {staticStyle: {color: 'green'}}, [
                        t._v('Last Update Status: [' + t._s(t.msg) + ']'),
                      ]),
                    ]),
                  ],
                  1
                ),
              ])
            : t._e(),
        ]);
      },
      Ft = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'linkName'}},
            [t._v('Link Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Heading '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Image Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Image Caption '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Caption '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Substyles '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Tours '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
      ],
      Mt = {
        name: 'StyleForm',
        props: ['id'],
        data: function () {
          return {
            style: {},
            loading: !1,
            msg: 'None',
            errors: {
              linkName: !1,
              heading: !1,
              imageName: !1,
              imageCaption: !1,
              caption: !1,
            },
          };
        },
        computed: {
          tours: function () {
            return this.$store.getters.tours;
          },
          substyles: function () {
            return this.$store.getters.substyles;
          },
        },
        created: function () {
          this.style = Y.a.cloneDeep(this.$store.getters.styleById(this.id));
        },
        methods: {
          isTourPresent: function (t) {
            for (var e = 0; e < this.style.tours.length; e++)
              if (this.style.tours[e]._id === t) return !0;
            return !1;
          },
          isSubstylePresent: function (t) {
            for (var e = 0; e < this.style.substyles.length; e++)
              if (this.style.substyles[e]._id === t) return !0;
            return !1;
          },
          deleteStyleById: function () {
            this.$store.dispatch('deleteStyle', this.style.linkName);
          },
          saveData: function (t) {
            var e = this;
            if ((t.preventDefault(), this.validateForm())) {
              for (
                var a = [],
                  s = [],
                  r = document.getElementsByName('substyles[]'),
                  i = document.getElementsByName('tours[]'),
                  n = 0;
                n < i.length;
                n++
              )
                i[n].checked && a.push(i[n]._value);
              for (var o = 0; o < r.length; o++)
                r[o].checked && s.push(r[o]._value);
              (this.style.tours = a),
                (this.style.substyles = s),
                (this.loading = !0),
                (this.msg = 'Saving...'),
                x.$emit('loadStart', {msg: 'Saving'}),
                this.$store
                  .dispatch('updateStyle', this.style)
                  .then(function () {
                    (e.style = Y.a.cloneDeep(e.$store.getters.styleById(e.id))),
                      (e.loading = !1),
                      (e.msg = 'Updated'),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Save Success'});
                  })
                  .catch(function (t) {
                    (e.style = Y.a.cloneDeep(e.$store.getters.styleById(e.id))),
                      (e.loading = !1),
                      (e.msg = t),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Save Failed'});
                  });
            }
          },
          validateForm: function () {
            var t = !0;
            return (
              '' == this.style.linkName
                ? ((this.errors.linkName = 'Link name cannot be empty.'),
                  (t = !1))
                : this.style.linkName.includes(' ')
                ? (this.errors.linkName = 'Link name cannot have spaces.')
                : this.style.linkName.length > 20 &&
                  (this.errors.linkName =
                    'Link name cannot be longer than 20 characters.'),
              '' == this.style.heading &&
                ((this.errors.heading = 'Heading cannot be empty.'), (t = !1)),
              '' == this.style.imageName &&
                ((this.errors.imageName = 'Image name cannot be empty.'),
                (t = !1)),
              '' == this.style.imageCaption &&
                ((this.errors.imageCaption = 'Image caption cannot be empty.'),
                (t = !1)),
              '' == this.style.caption
                ? ((this.errors.caption = 'Caption cannot be empty.'), (t = !1))
                : this.style.caption.length > 300 &&
                  ((this.errors.caption =
                    'Caption cannot be longer than 300 characters.'),
                  (t = !1)),
              t
            );
          },
        },
      },
      Rt = Mt,
      Ht = Object(m['a'])(Rt, jt, Ft, !1, null, '0f1ecb1e', null),
      Gt = Ht.exports,
      zt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'destination-form-wrapper'}, [
          a('div', {staticClass: 'destination-form'}, [
            a(
              'form',
              {staticClass: 'form'},
              [
                a('div', {staticClass: 'form-field'}, [
                  t._m(0),
                  a('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.style.linkName,
                        expression: 'style.linkName',
                      },
                    ],
                    staticClass: 'form-input',
                    class: {'border-red': t.errors.linkName},
                    attrs: {type: 'text', name: '', value: '', required: ''},
                    domProps: {value: t.style.linkName},
                    on: {
                      input: function (e) {
                        e.target.composing ||
                          t.$set(t.style, 'linkName', e.target.value);
                      },
                    },
                  }),
                  t.errors.linkName
                    ? a('span', {staticClass: 'error'}, [
                        t._v(t._s(t.errors.linkName)),
                      ])
                    : t._e(),
                ]),
                a('div', {staticClass: 'form-field'}, [
                  t._m(1),
                  a('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.style.heading,
                        expression: 'style.heading',
                      },
                    ],
                    staticClass: 'form-input',
                    attrs: {type: 'text', name: '', value: '', required: ''},
                    domProps: {value: t.style.heading},
                    on: {
                      input: function (e) {
                        e.target.composing ||
                          t.$set(t.style, 'heading', e.target.value);
                      },
                    },
                  }),
                  t.errors.heading
                    ? a('span', {staticClass: 'error'}, [
                        t._v(t._s(t.errors.heading)),
                      ])
                    : t._e(),
                ]),
                a('div', {staticClass: 'form-field'}, [
                  t._m(2),
                  a('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.style.imageName,
                        expression: 'style.imageName',
                      },
                    ],
                    staticClass: 'form-input',
                    attrs: {type: 'text', name: '', value: '', required: ''},
                    domProps: {value: t.style.imageName},
                    on: {
                      input: function (e) {
                        e.target.composing ||
                          t.$set(t.style, 'imageName', e.target.value);
                      },
                    },
                  }),
                  t.errors.imageName
                    ? a('span', {staticClass: 'error'}, [
                        t._v(t._s(t.errors.imageName)),
                      ])
                    : t._e(),
                ]),
                a('div', {staticClass: 'form-field'}, [
                  t._m(3),
                  a('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.style.imageCaption,
                        expression: 'style.imageCaption',
                      },
                    ],
                    staticClass: 'form-input',
                    attrs: {type: 'text', name: '', value: '', required: ''},
                    domProps: {value: t.style.imageCaption},
                    on: {
                      input: function (e) {
                        e.target.composing ||
                          t.$set(t.style, 'imageCaption', e.target.value);
                      },
                    },
                  }),
                  t.errors.imageCaption
                    ? a('span', {staticClass: 'error'}, [
                        t._v(t._s(t.errors.imageCaption)),
                      ])
                    : t._e(),
                ]),
                a('div', {staticClass: 'form-field'}, [
                  t._m(4),
                  a('textarea', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.style.caption,
                        expression: 'style.caption',
                      },
                    ],
                    staticClass: 'form-area',
                    attrs: {type: 'text', name: '', value: '', required: ''},
                    domProps: {value: t.style.caption},
                    on: {
                      input: function (e) {
                        e.target.composing ||
                          t.$set(t.style, 'caption', e.target.value);
                      },
                    },
                  }),
                  t.errors.caption
                    ? a('span', {staticClass: 'error'}, [
                        t._v(t._s(t.errors.caption)),
                      ])
                    : t._e(),
                ]),
                a('div', {staticClass: 'form-field'}, [
                  t._m(5),
                  a(
                    'div',
                    {staticClass: 'cities'},
                    t._l(t.substyles, function (e) {
                      return a('label', {key: e._id}, [
                        a('input', {
                          staticClass: 'form-checkbox',
                          attrs: {type: 'checkbox', name: 'substyles[]'},
                          domProps: {value: e._id},
                        }),
                        a('span', {staticClass: 'checkbox-label'}, [
                          t._v(t._s(e.heading)),
                        ]),
                      ]);
                    }),
                    0
                  ),
                ]),
                a('div', {staticClass: 'form-field'}, [
                  t._m(6),
                  a(
                    'div',
                    {staticClass: 'cities'},
                    t._l(t.tours, function (e) {
                      return a('label', {key: e._id}, [
                        a('input', {
                          staticClass: 'form-checkbox',
                          attrs: {type: 'checkbox', name: 'tours[]'},
                          domProps: {value: e._id},
                        }),
                        a('span', {staticClass: 'checkbox-label'}, [
                          t._v(t._s(e.heading)),
                        ]),
                      ]);
                    }),
                    0
                  ),
                ]),
                a(
                  'a',
                  {
                    staticClass: 'form-btn',
                    attrs: {disable: t.loading, href: '#'},
                    on: {click: t.saveData},
                  },
                  [t._v('Save')]
                ),
                a('router-link', {attrs: {to: '/admin/dashboard/styles'}}, [
                  a(
                    'a',
                    {
                      staticClass: 'form-btn',
                      attrs: {href: '/admin/dashboard/styles'},
                    },
                    [t._v('Back')]
                  ),
                ]),
                a('div', {staticClass: 'loader'}, [
                  a('p', {staticStyle: {color: 'green'}}, [
                    t._v('Last Update Status: [' + t._s(t.msg) + ']'),
                  ]),
                ]),
              ],
              1
            ),
          ]),
        ]);
      },
      Yt = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'linkName'}},
            [t._v('Link Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Heading '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Image Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Image Caption '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Caption '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Substyles '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Tours '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
      ],
      Wt = {
        name: 'StyleFormNew',
        props: ['id'],
        data: function () {
          return {
            style: {
              linkName: '',
              imageName: '',
              imageCaption: '',
              heading: '',
              caption: '',
              tours: [],
              substyles: [],
            },
            loading: !1,
            msg: 'None',
            errors: {
              linkName: !1,
              heading: !1,
              imageName: !1,
              imageCaption: !1,
              caption: !1,
            },
          };
        },
        computed: {
          tours: function () {
            return this.$store.getters.tours;
          },
          substyles: function () {
            return this.$store.getters.substyles;
          },
        },
        methods: {
          saveData: function (t) {
            var e = this;
            if ((t.preventDefault(), this.validateForm())) {
              for (
                var a = [],
                  s = [],
                  r = document.getElementsByName('substyles[]'),
                  i = document.getElementsByName('tours[]'),
                  n = 0;
                n < i.length;
                n++
              )
                i[n].checked && a.push(i[n]._value);
              for (var o = 0; o < r.length; o++)
                r[o].checked && s.push(r[o]._value);
              (this.style.tours = a),
                (this.style.substyles = s),
                (this.loading = !0),
                (this.msg = 'Saving...'),
                x.$emit('loadStart', {msg: 'Saving'}),
                this.$store
                  .dispatch('addStyle', this.style)
                  .then(function () {
                    (e.loading = !1),
                      (e.msg = 'Updated'),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Save Success'});
                  })
                  .catch(function (t) {
                    (e.loading = !1),
                      (e.msg = t),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Save Failed'});
                  });
            }
          },
          validateForm: function () {
            var t = !0;
            return (
              '' == this.style.linkName
                ? ((this.errors.linkName = 'Link name cannot be empty.'),
                  (t = !1))
                : this.style.linkName.includes(' ')
                ? (this.errors.linkName = 'Link name cannot have spaces.')
                : this.style.linkName.length > 20 &&
                  (this.errors.linkName =
                    'Link name cannot be longer than 20 characters.'),
              '' == this.style.heading &&
                ((this.errors.heading = 'Heading cannot be empty.'), (t = !1)),
              '' == this.style.imageName &&
                ((this.errors.imageName = 'Image name cannot be empty.'),
                (t = !1)),
              '' == this.style.imageCaption &&
                ((this.errors.imageCaption = 'Image caption cannot be empty.'),
                (t = !1)),
              '' == this.style.caption
                ? ((this.errors.caption = 'Caption cannot be empty.'), (t = !1))
                : this.style.caption.length > 300 &&
                  ((this.errors.caption =
                    'Caption cannot be longer than 300 characters.'),
                  (t = !1)),
              t
            );
          },
        },
      },
      Jt = Wt,
      Kt = Object(m['a'])(Jt, zt, Yt, !1, null, '002fe767', null),
      Vt = Kt.exports,
      Qt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          {staticClass: 'destination-list-wrapper'},
          [
            a(
              'div',
              {staticClass: 'destination-list'},
              t._l(t.tours, function (t) {
                return a('TourListItem', {key: t._id, attrs: {tour: t}});
              }),
              1
            ),
            a('router-link', {attrs: {to: '/admin/dashboard/tours/new'}}, [
              a('div', {staticClass: 'add-btn-wrapper'}, [
                a('a', {staticClass: 'add-btn', attrs: {href: '#'}}, [
                  t._v('+'),
                ]),
              ]),
            ]),
          ],
          1
        );
      },
      Xt = [],
      Zt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          {staticClass: 'list-item-wrapper'},
          [
            a(
              'router-link',
              {attrs: {to: '/admin/dashboard/tours/' + t.tour._id}},
              [
                a('div', {staticClass: 'list-item'}, [
                  a('div', {staticClass: 'list-item-name'}, [
                    a('p', [t._v(t._s(t.tour.heading))]),
                  ]),
                ]),
              ]
            ),
          ],
          1
        );
      },
      te = [],
      ee = {name: 'TourListItem', props: ['tour']},
      ae = ee,
      se = Object(m['a'])(ae, Zt, te, !1, null, '4bdf2a12', null),
      re = se.exports,
      ie = {
        name: 'TourList',
        computed: {
          tours: function () {
            return this.$store.getters.tours;
          },
        },
        components: {TourListItem: re},
      },
      ne = ie,
      oe = Object(m['a'])(ne, Qt, Xt, !1, null, 'b64b6142', null),
      le = oe.exports,
      ce = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'destination-form-wrapper'}, [
          t.tour
            ? a('div', {staticClass: 'destination-form'}, [
                a(
                  'form',
                  {staticClass: 'form'},
                  [
                    a('div', {staticClass: 'form-field'}, [
                      t._m(0),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.linkName,
                            expression: 'tour.linkName',
                          },
                        ],
                        staticClass: 'form-input',
                        class: {'border-red': t.errors.linkName},
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.linkName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'linkName', e.target.value);
                          },
                        },
                      }),
                      t.errors.linkName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.linkName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(1),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.heading,
                            expression: 'tour.heading',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.heading},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'heading', e.target.value);
                          },
                        },
                      }),
                      t.errors.heading
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.heading)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(2),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.imageName,
                            expression: 'tour.imageName',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.imageName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'imageName', e.target.value);
                          },
                        },
                      }),
                      t.errors.imageName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.imageName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(3),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.imageCaption,
                            expression: 'tour.imageCaption',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.imageCaption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'imageCaption', e.target.value);
                          },
                        },
                      }),
                      t.errors.imageCaption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.imageCaption)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(4),
                      a('textarea', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.caption,
                            expression: 'tour.caption',
                          },
                        ],
                        staticClass: 'form-area',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.caption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'caption', e.target.value);
                          },
                        },
                      }),
                      t.errors.caption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.caption)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(5),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.priceMax,
                            expression: 'tour.priceMax',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'number',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.priceMax},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'priceMax', e.target.value);
                          },
                        },
                      }),
                      t.errors.priceMin
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.priceMin)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(6),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.priceMin,
                            expression: 'tour.priceMin',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'number',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.priceMin},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'priceMin', e.target.value);
                          },
                        },
                      }),
                      t.errors.priceMax
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.priceMax)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(7),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.holidayLength,
                            expression: 'tour.holidayLength',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'number',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.holidayLength},
                        on: {
                          input: [
                            function (e) {
                              e.target.composing ||
                                t.$set(t.tour, 'holidayLength', e.target.value);
                            },
                            t.updateArrays,
                          ],
                        },
                      }),
                      t.errors.holidayLength
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.holidayLength)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(8),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.holidayType,
                            expression: 'tour.holidayType',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.holidayType},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'holidayType', e.target.value);
                          },
                        },
                      }),
                      t.errors.holidayType
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.holidayType)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(9),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.bestTimeToGo,
                            expression: 'tour.bestTimeToGo',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.bestTimeToGo},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'bestTimeToGo', e.target.value);
                          },
                        },
                      }),
                      t.errors.bestTimeToGo
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.bestTimeToGo)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(10),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.formImage,
                            expression: 'tour.formImage',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.formImage},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'formImage', e.target.value);
                          },
                        },
                      }),
                      t.errors.formImage
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.formImage)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(11),
                      a(
                        'select',
                        {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: t.tour.status,
                              expression: 'tour.status',
                            },
                          ],
                          staticClass: 'form-input',
                          attrs: {name: ''},
                          on: {
                            change: function (e) {
                              var a = Array.prototype.filter
                                .call(e.target.options, function (t) {
                                  return t.selected;
                                })
                                .map(function (t) {
                                  var e = '_value' in t ? t._value : t.value;
                                  return e;
                                });
                              t.$set(
                                t.tour,
                                'status',
                                e.target.multiple ? a : a[0]
                              );
                            },
                          },
                        },
                        [
                          a('option', {attrs: {value: 'none'}}, [t._v('None')]),
                          a('option', {attrs: {value: 'featured'}}, [
                            t._v('Featured'),
                          ]),
                          a('option', {attrs: {value: 'upcoming'}}, [
                            t._v('Up Coming'),
                          ]),
                        ]
                      ),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(12),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.departurePoints,
                            expression: 'departurePoints',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'number',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.departurePoints},
                        on: {
                          input: [
                            function (e) {
                              e.target.composing ||
                                (t.departurePoints = e.target.value);
                            },
                            t.updateArrays,
                          ],
                        },
                      }),
                      t.errors.holidayLength
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.holidayLength)),
                          ])
                        : t._e(),
                    ]),
                    t._l(t.tour.departures, function (e, s) {
                      return a(
                        'div',
                        {key: 'depPoint-' + s, staticClass: 'form-field'},
                        [
                          a(
                            'label',
                            {
                              staticClass: 'form-label',
                              attrs: {for: 'heading'},
                            },
                            [
                              t._v('Departure Point ' + t._s(s + 1) + ' '),
                              a('span', {staticClass: 'red'}, [t._v(' *')]),
                            ]
                          ),
                          a('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: t.tour.departures[s],
                                expression: 'tour.departures[index]',
                              },
                            ],
                            staticClass: 'form-input',
                            attrs: {
                              type: 'text',
                              name: '',
                              value: '',
                              required: '',
                            },
                            domProps: {value: t.tour.departures[s]},
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(t.tour.departures, s, e.target.value);
                              },
                            },
                          }),
                          t.errors.highlightsImages
                            ? a('span', {staticClass: 'error'}, [
                                t._v(t._s(t.errors.highlightsImages)),
                              ])
                            : t._e(),
                        ]
                      );
                    }),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(13),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.highlightsCaption,
                            expression: 'tour.highlightsCaption',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.highlightsCaption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(
                                t.tour,
                                'highlightsCaption',
                                e.target.value
                              );
                          },
                        },
                      }),
                      t.errors.highlightsCaption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.highlightsCaption)),
                          ])
                        : t._e(),
                    ]),
                    t._l(4, function (e) {
                      return a(
                        'div',
                        {key: 'himage-' + e, staticClass: 'form-field'},
                        [
                          a(
                            'label',
                            {
                              staticClass: 'form-label',
                              attrs: {for: 'heading'},
                            },
                            [
                              t._v('Highlights Image ' + t._s(e) + ' '),
                              a('span', {staticClass: 'red'}, [t._v(' *')]),
                            ]
                          ),
                          a('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: t.tour.highlightsImages[e - 1],
                                expression: 'tour.highlightsImages[index - 1]',
                              },
                            ],
                            staticClass: 'form-input',
                            attrs: {
                              type: 'text',
                              name: '',
                              value: '',
                              required: '',
                            },
                            domProps: {value: t.tour.highlightsImages[e - 1]},
                            on: {
                              input: function (a) {
                                a.target.composing ||
                                  t.$set(
                                    t.tour.highlightsImages,
                                    e - 1,
                                    a.target.value
                                  );
                              },
                            },
                          }),
                          t.errors.highlightsImages
                            ? a('span', {staticClass: 'error'}, [
                                t._v(t._s(t.errors.highlightsImages)),
                              ])
                            : t._e(),
                        ]
                      );
                    }),
                    t._l(t.tour.itinerary, function (e, s) {
                      return a(
                        'div',
                        {key: 'iimage-' + s, staticClass: 'form-field'},
                        [
                          a(
                            'label',
                            {
                              staticClass: 'form-label',
                              attrs: {for: 'heading'},
                            },
                            [
                              t._v('Itinerary Image ' + t._s(s + 1) + ' '),
                              a('span', {staticClass: 'red'}, [t._v(' *')]),
                            ]
                          ),
                          a('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: t.tour.itinerary[s].image,
                                expression: 'tour.itinerary[index].image',
                              },
                            ],
                            staticClass: 'form-input',
                            attrs: {type: 'text', required: ''},
                            domProps: {value: t.tour.itinerary[s].image},
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(
                                    t.tour.itinerary[s],
                                    'image',
                                    e.target.value
                                  );
                              },
                            },
                          }),
                          t.errors.itineraryImages
                            ? a('span', {staticClass: 'error'}, [
                                t._v(t._s(t.errors.itineraryImages)),
                              ])
                            : t._e(),
                        ]
                      );
                    }),
                    t._l(t.tour.itinerary, function (e, s) {
                      return a(
                        'div',
                        {key: 'iheading-' + s, staticClass: 'form-field'},
                        [
                          a(
                            'label',
                            {
                              staticClass: 'form-label',
                              attrs: {for: 'heading'},
                            },
                            [
                              t._v('Itinerary Heading ' + t._s(s + 1) + ' '),
                              a('span', {staticClass: 'red'}, [t._v(' *')]),
                            ]
                          ),
                          a('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: t.tour.itinerary[s].heading,
                                expression: 'tour.itinerary[index].heading',
                              },
                            ],
                            staticClass: 'form-input',
                            attrs: {type: 'text', required: ''},
                            domProps: {value: t.tour.itinerary[s].heading},
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(
                                    t.tour.itinerary[s],
                                    'heading',
                                    e.target.value
                                  );
                              },
                            },
                          }),
                          t.errors.itineraryImages
                            ? a('span', {staticClass: 'error'}, [
                                t._v(t._s(t.errors.itineraryImages)),
                              ])
                            : t._e(),
                        ]
                      );
                    }),
                    t._l(t.tour.itinerary, function (e, s) {
                      return a(
                        'div',
                        {key: 'icaption-' + s, staticClass: 'form-field'},
                        [
                          a(
                            'label',
                            {
                              staticClass: 'form-label',
                              attrs: {for: 'heading'},
                            },
                            [
                              t._v('Itinerary Caption ' + t._s(s + 1) + ' '),
                              a('span', {staticClass: 'red'}, [t._v(' *')]),
                            ]
                          ),
                          a('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: t.tour.itinerary[s].caption,
                                expression: 'tour.itinerary[index].caption',
                              },
                            ],
                            staticClass: 'form-input',
                            attrs: {type: 'text', required: ''},
                            domProps: {value: t.tour.itinerary[s].caption},
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(
                                    t.tour.itinerary[s],
                                    'caption',
                                    e.target.value
                                  );
                              },
                            },
                          }),
                          t.errors.itineraryImages
                            ? a('span', {staticClass: 'error'}, [
                                t._v(t._s(t.errors.itineraryImages)),
                              ])
                            : t._e(),
                        ]
                      );
                    }),
                    a(
                      'a',
                      {
                        staticClass: 'form-btn',
                        attrs: {disable: t.loading, href: '#'},
                        on: {click: t.saveData},
                      },
                      [t._v('Save')]
                    ),
                    a('router-link', {attrs: {to: '/admin/dashboard/tours'}}, [
                      a(
                        'a',
                        {
                          staticClass: 'form-btn',
                          attrs: {href: '#'},
                          on: {click: t.deleteTourById},
                        },
                        [t._v('Delete')]
                      ),
                    ]),
                    a('div', {staticClass: 'loader'}, [
                      a('p', {staticStyle: {color: 'green'}}, [
                        t._v('Last Update Status: [' + t._s(t.msg) + ']'),
                      ]),
                    ]),
                  ],
                  2
                ),
              ])
            : t._e(),
        ]);
      },
      me = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'linkName'}},
            [t._v('Link Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Heading '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Image Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Image Caption '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Caption '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Price Min '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Price Max '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Holiday Length '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Holiday Type '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Best time to go '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Form Image '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Status '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Total Number of Departure Points '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Highlights Caption '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
      ],
      ue =
        (a('fb6a'),
        {
          name: 'TourForm',
          props: ['id'],
          data: function () {
            return {
              tour: {},
              departurePoints: 0,
              loading: !1,
              msg: 'None',
              errors: {
                linkName: !1,
                heading: !1,
                imageName: !1,
                imageCaption: !1,
                caption: !1,
                priceMin: !1,
                priceMax: !1,
                holidayLength: !1,
                bestTimeToGo: !1,
                formImage: !1,
                itinerary: !1,
                highlightsCaption: !1,
                highlightsImages: !1,
              },
            };
          },
          created: function () {
            (this.tour = Y.a.cloneDeep(this.$store.getters.tourById(this.id))),
              this.tour.departures || (this.tour.departures = []),
              (this.departurePoints = this.tour.departures.length || 0);
          },
          methods: {
            updateArrays: function () {
              while (this.tour.itinerary.length < this.tour.holidayLength)
                this.tour.itinerary.push({caption: '', heading: '', image: ''});
              while (this.tour.departures.length < this.departurePoints)
                this.tour.departures.push('');
            },
            deleteTourById: function () {
              this.$store.dispatch('deleteTour', this.tour.linkName);
            },
            saveData: function (t) {
              var e = this;
              t.preventDefault(),
                this.validateForm() &&
                  ((this.tour.itinerary = this.tour.itinerary.slice(
                    0,
                    this.tour.holidayLength
                  )),
                  (this.tour.departures = this.tour.departures.slice(
                    0,
                    this.departurePoints
                  )),
                  (this.loading = !0),
                  (this.msg = 'Saving...'),
                  x.$emit('loadStart', {msg: 'Saving'}),
                  this.$store
                    .dispatch('updateTour', this.tour)
                    .then(function () {
                      (e.loading = !1),
                        (e.msg = 'Updated'),
                        (e.tour = Y.a.cloneDeep(
                          e.$store.getters.tourById(e.id)
                        )),
                        x.$emit('loadEnd'),
                        x.$emit('notify', {msg: 'Save Success'});
                    })
                    .catch(function (t) {
                      (e.loading = !1),
                        (e.msg = t),
                        (e.tour = Y.a.cloneDeep(
                          e.$store.getters.tourById(e.id)
                        )),
                        x.$emit('loadEnd'),
                        x.$emit('notify', {msg: 'Save Failed'});
                    }));
            },
            validateForm: function () {
              var t = !0;
              return (
                '' == this.tour.linkName
                  ? ((this.errors.linkName = 'Link name cannot be empty.'),
                    (t = !1))
                  : this.tour.linkName.includes(' ')
                  ? (this.errors.linkName = 'Link name cannot have spaces.')
                  : this.tour.linkName.length > 20 &&
                    (this.errors.linkName =
                      'Link name cannot be longer than 20 characters.'),
                '' == this.tour.heading &&
                  ((this.errors.heading = 'Heading cannot be empty.'),
                  (t = !1)),
                '' == this.tour.imageName &&
                  ((this.errors.imageName = 'Image name cannot be empty.'),
                  (t = !1)),
                '' == this.tour.imageCaption &&
                  ((this.errors.imageCaption =
                    'Image caption cannot be empty.'),
                  (t = !1)),
                '' == this.tour.caption
                  ? ((this.errors.caption = 'Caption cannot be empty.'),
                    (t = !1))
                  : this.tour.caption.length > 300 &&
                    ((this.errors.caption =
                      'Caption cannot be longer than 300 characters.'),
                    (t = !1)),
                t
              );
            },
          },
        }),
      de = ue,
      pe = Object(m['a'])(de, ce, me, !1, null, '79afec4c', null),
      fe = pe.exports,
      ve = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'destination-form-wrapper'}, [
          t.tour
            ? a('div', {staticClass: 'destination-form'}, [
                a(
                  'form',
                  {staticClass: 'form'},
                  [
                    a('div', {staticClass: 'form-field'}, [
                      t._m(0),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.linkName,
                            expression: 'tour.linkName',
                          },
                        ],
                        staticClass: 'form-input',
                        class: {'border-red': t.errors.linkName},
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.linkName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'linkName', e.target.value);
                          },
                        },
                      }),
                      t.errors.linkName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.linkName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(1),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.heading,
                            expression: 'tour.heading',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.heading},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'heading', e.target.value);
                          },
                        },
                      }),
                      t.errors.heading
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.heading)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(2),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.imageName,
                            expression: 'tour.imageName',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.imageName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'imageName', e.target.value);
                          },
                        },
                      }),
                      t.errors.imageName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.imageName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(3),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.imageCaption,
                            expression: 'tour.imageCaption',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.imageCaption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'imageCaption', e.target.value);
                          },
                        },
                      }),
                      t.errors.imageCaption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.imageCaption)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(4),
                      a('textarea', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.caption,
                            expression: 'tour.caption',
                          },
                        ],
                        staticClass: 'form-area',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.caption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'caption', e.target.value);
                          },
                        },
                      }),
                      t.errors.caption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.caption)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(5),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.priceMax,
                            expression: 'tour.priceMax',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'number',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.priceMax},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'priceMax', e.target.value);
                          },
                        },
                      }),
                      t.errors.priceMin
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.priceMin)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(6),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.priceMin,
                            expression: 'tour.priceMin',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'number',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.priceMin},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'priceMin', e.target.value);
                          },
                        },
                      }),
                      t.errors.priceMax
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.priceMax)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(7),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.holidayLength,
                            expression: 'tour.holidayLength',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'number',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.holidayLength},
                        on: {
                          input: [
                            function (e) {
                              e.target.composing ||
                                t.$set(t.tour, 'holidayLength', e.target.value);
                            },
                            t.updateArrays,
                          ],
                        },
                      }),
                      t.errors.holidayLength
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.holidayLength)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(8),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.holidayType,
                            expression: 'tour.holidayType',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.holidayType},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'holidayType', e.target.value);
                          },
                        },
                      }),
                      t.errors.holidayType
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.holidayType)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(9),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.bestTimeToGo,
                            expression: 'tour.bestTimeToGo',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.bestTimeToGo},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'bestTimeToGo', e.target.value);
                          },
                        },
                      }),
                      t.errors.bestTimeToGo
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.bestTimeToGo)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(10),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.formImage,
                            expression: 'tour.formImage',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.formImage},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.tour, 'formImage', e.target.value);
                          },
                        },
                      }),
                      t.errors.formImage
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.formImage)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(11),
                      a(
                        'select',
                        {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: t.tour.status,
                              expression: 'tour.status',
                            },
                          ],
                          staticClass: 'form-input',
                          attrs: {name: ''},
                          on: {
                            change: function (e) {
                              var a = Array.prototype.filter
                                .call(e.target.options, function (t) {
                                  return t.selected;
                                })
                                .map(function (t) {
                                  var e = '_value' in t ? t._value : t.value;
                                  return e;
                                });
                              t.$set(
                                t.tour,
                                'status',
                                e.target.multiple ? a : a[0]
                              );
                            },
                          },
                        },
                        [
                          a('option', {attrs: {value: 'none'}}, [t._v('None')]),
                          a('option', {attrs: {value: 'featured'}}, [
                            t._v('Featured'),
                          ]),
                          a('option', {attrs: {value: 'upcoming'}}, [
                            t._v('Up Coming'),
                          ]),
                        ]
                      ),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(12),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.departurePoints,
                            expression: 'departurePoints',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'number',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.departurePoints},
                        on: {
                          input: [
                            function (e) {
                              e.target.composing ||
                                (t.departurePoints = e.target.value);
                            },
                            t.updateArrays,
                          ],
                        },
                      }),
                      t.errors.holidayLength
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.holidayLength)),
                          ])
                        : t._e(),
                    ]),
                    t._l(t.tour.departures, function (e, s) {
                      return a(
                        'div',
                        {key: 'depPoint-' + s, staticClass: 'form-field'},
                        [
                          a(
                            'label',
                            {
                              staticClass: 'form-label',
                              attrs: {for: 'heading'},
                            },
                            [
                              t._v('Departure Point ' + t._s(s + 1) + ' '),
                              a('span', {staticClass: 'red'}, [t._v(' *')]),
                            ]
                          ),
                          a('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: t.tour.departures[s],
                                expression: 'tour.departures[index]',
                              },
                            ],
                            staticClass: 'form-input',
                            attrs: {
                              type: 'text',
                              name: '',
                              value: '',
                              required: '',
                            },
                            domProps: {value: t.tour.departures[s]},
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(t.tour.departures, s, e.target.value);
                              },
                            },
                          }),
                          t.errors.highlightsImages
                            ? a('span', {staticClass: 'error'}, [
                                t._v(t._s(t.errors.highlightsImages)),
                              ])
                            : t._e(),
                        ]
                      );
                    }),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(13),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.tour.highlightsCaption,
                            expression: 'tour.highlightsCaption',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.tour.highlightsCaption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(
                                t.tour,
                                'highlightsCaption',
                                e.target.value
                              );
                          },
                        },
                      }),
                      t.errors.highlightsCaption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.highlightsCaption)),
                          ])
                        : t._e(),
                    ]),
                    t._l(4, function (e) {
                      return a(
                        'div',
                        {key: 'himage-' + e, staticClass: 'form-field'},
                        [
                          a(
                            'label',
                            {
                              staticClass: 'form-label',
                              attrs: {for: 'heading'},
                            },
                            [
                              t._v('Highlights Image ' + t._s(e) + ' '),
                              a('span', {staticClass: 'red'}, [t._v(' *')]),
                            ]
                          ),
                          a('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: t.tour.highlightsImages[e - 1],
                                expression: 'tour.highlightsImages[index - 1]',
                              },
                            ],
                            staticClass: 'form-input',
                            attrs: {
                              type: 'text',
                              name: '',
                              value: '',
                              required: '',
                            },
                            domProps: {value: t.tour.highlightsImages[e - 1]},
                            on: {
                              input: function (a) {
                                a.target.composing ||
                                  t.$set(
                                    t.tour.highlightsImages,
                                    e - 1,
                                    a.target.value
                                  );
                              },
                            },
                          }),
                          t.errors.highlightsImages
                            ? a('span', {staticClass: 'error'}, [
                                t._v(t._s(t.errors.highlightsImages)),
                              ])
                            : t._e(),
                        ]
                      );
                    }),
                    t._l(t.tour.itinerary, function (e, s) {
                      return a(
                        'div',
                        {key: 'iimage-' + s, staticClass: 'form-field'},
                        [
                          a(
                            'label',
                            {
                              staticClass: 'form-label',
                              attrs: {for: 'heading'},
                            },
                            [
                              t._v('Itinerary Image ' + t._s(s + 1) + ' '),
                              a('span', {staticClass: 'red'}, [t._v(' *')]),
                            ]
                          ),
                          a('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: t.tour.itinerary[s].image,
                                expression: 'tour.itinerary[index].image',
                              },
                            ],
                            staticClass: 'form-input',
                            attrs: {type: 'text', required: ''},
                            domProps: {value: t.tour.itinerary[s].image},
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(
                                    t.tour.itinerary[s],
                                    'image',
                                    e.target.value
                                  );
                              },
                            },
                          }),
                          t.errors.itineraryImages
                            ? a('span', {staticClass: 'error'}, [
                                t._v(t._s(t.errors.itineraryImages)),
                              ])
                            : t._e(),
                        ]
                      );
                    }),
                    t._l(t.tour.itinerary, function (e, s) {
                      return a(
                        'div',
                        {key: 'iheading-' + s, staticClass: 'form-field'},
                        [
                          a(
                            'label',
                            {
                              staticClass: 'form-label',
                              attrs: {for: 'heading'},
                            },
                            [
                              t._v('Itinerary Heading ' + t._s(s + 1) + ' '),
                              a('span', {staticClass: 'red'}, [t._v(' *')]),
                            ]
                          ),
                          a('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: t.tour.itinerary[s].heading,
                                expression: 'tour.itinerary[index].heading',
                              },
                            ],
                            staticClass: 'form-input',
                            attrs: {type: 'text', required: ''},
                            domProps: {value: t.tour.itinerary[s].heading},
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(
                                    t.tour.itinerary[s],
                                    'heading',
                                    e.target.value
                                  );
                              },
                            },
                          }),
                          t.errors.itineraryImages
                            ? a('span', {staticClass: 'error'}, [
                                t._v(t._s(t.errors.itineraryImages)),
                              ])
                            : t._e(),
                        ]
                      );
                    }),
                    t._l(t.tour.itinerary, function (e, s) {
                      return a(
                        'div',
                        {key: 'icaption-' + s, staticClass: 'form-field'},
                        [
                          a(
                            'label',
                            {
                              staticClass: 'form-label',
                              attrs: {for: 'heading'},
                            },
                            [
                              t._v('Itinerary Caption ' + t._s(s + 1) + ' '),
                              a('span', {staticClass: 'red'}, [t._v(' *')]),
                            ]
                          ),
                          a('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: t.tour.itinerary[s].caption,
                                expression: 'tour.itinerary[index].caption',
                              },
                            ],
                            staticClass: 'form-input',
                            attrs: {type: 'text', required: ''},
                            domProps: {value: t.tour.itinerary[s].caption},
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(
                                    t.tour.itinerary[s],
                                    'caption',
                                    e.target.value
                                  );
                              },
                            },
                          }),
                          t.errors.itineraryImages
                            ? a('span', {staticClass: 'error'}, [
                                t._v(t._s(t.errors.itineraryImages)),
                              ])
                            : t._e(),
                        ]
                      );
                    }),
                    a(
                      'a',
                      {
                        staticClass: 'form-btn',
                        attrs: {disable: t.loading, href: '#'},
                        on: {click: t.saveData},
                      },
                      [t._v('Save')]
                    ),
                    a('router-link', {attrs: {to: '/admin/dashboard/cities'}}, [
                      a(
                        'a',
                        {
                          staticClass: 'form-btn',
                          attrs: {href: '#'},
                          on: {click: t.deleteTourById},
                        },
                        [t._v('Delete')]
                      ),
                    ]),
                    a('div', {staticClass: 'loader'}, [
                      a('p', {staticStyle: {color: 'green'}}, [
                        t._v('Last Update Status: [' + t._s(t.msg) + ']'),
                      ]),
                    ]),
                  ],
                  2
                ),
              ])
            : t._e(),
        ]);
      },
      ge = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'linkName'}},
            [t._v('Link Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Heading '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Image Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Image Caption '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Caption '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Price Min '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Price Max '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Holiday Length '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Holiday Type '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Best time to go '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Form Image '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Status '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Total Number of Departure Points '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Highlights Caption '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
      ],
      he =
        (a('cb29'),
        {
          name: 'TourForm',
          props: ['id'],
          data: function () {
            return {
              departurePoints: 0,
              tour: {
                linkName: '',
                imageName: '',
                imageCaption: '',
                caption: '',
                heading: '',
                priceMin: 0,
                priceMax: 0,
                holidayLength: 1,
                holidayType: '',
                bestTimeToGo: '',
                formImage: '',
                status: '',
                departures: [],
                highlightsCaption: '',
                highlightsImages: Array(4).fill(''),
                itinerary: Array(1).fill({heading: '', caption: '', image: ''}),
              },
              loading: !1,
              msg: 'None',
              errors: {
                linkName: !1,
                heading: !1,
                imageName: !1,
                imageCaption: !1,
                caption: !1,
                priceMin: !1,
                priceMax: !1,
                holidayLength: !1,
                bestTimeToGo: !1,
                formImage: !1,
                itinerary: !1,
                highlightsCaption: !1,
                highlightsImages: !1,
              },
            };
          },
          methods: {
            updateArrays: function () {
              while (this.tour.itinerary.length < this.tour.holidayLength)
                this.tour.itinerary.push({caption: '', heading: '', image: ''});
              while (this.tour.departures.length < this.departurePoints)
                this.tour.departures.push('');
            },
            deleteTourById: function (t) {
              t.preventDefault(),
                this.$store.dispatch('deleteTour', this.tour.linkName);
            },
            saveData: function (t) {
              var e = this;
              t.preventDefault(),
                this.validateForm() &&
                  ((this.tour.itinerary = this.tour.itinerary.slice(
                    0,
                    this.tour.holidayLength
                  )),
                  (this.tour.departures = this.tour.departures.slice(
                    0,
                    this.departurePoints
                  )),
                  (this.loading = !0),
                  (this.msg = 'Saving...'),
                  x.$emit('loadStart', {msg: 'Saving'}),
                  this.$store
                    .dispatch('addTour', this.tour)
                    .then(function () {
                      (e.loading = !1),
                        (e.msg = 'Updated'),
                        x.$emit('loadEnd'),
                        x.$emit('notify', {msg: 'Save Success'});
                    })
                    .catch(function (t) {
                      (e.loading = !1),
                        (e.msg = t),
                        x.$emit('loadEnd'),
                        x.$emit('notify', {msg: 'Save Failed'});
                    }));
            },
            validateForm: function () {
              var t = !0;
              return (
                '' == this.tour.linkName
                  ? ((this.errors.linkName = 'Link name cannot be empty.'),
                    (t = !1))
                  : this.tour.linkName.includes(' ')
                  ? (this.errors.linkName = 'Link name cannot have spaces.')
                  : this.tour.linkName.length > 20 &&
                    (this.errors.linkName =
                      'Link name cannot be longer than 20 characters.'),
                '' == this.tour.heading &&
                  ((this.errors.heading = 'Heading cannot be empty.'),
                  (t = !1)),
                '' == this.tour.imageName &&
                  ((this.errors.imageName = 'Image name cannot be empty.'),
                  (t = !1)),
                '' == this.tour.imageCaption &&
                  ((this.errors.imageCaption =
                    'Image caption cannot be empty.'),
                  (t = !1)),
                '' == this.tour.caption
                  ? ((this.errors.caption = 'Caption cannot be empty.'),
                    (t = !1))
                  : this.tour.caption.length > 300 &&
                    ((this.errors.caption =
                      'Caption cannot be longer than 300 characters.'),
                    (t = !1)),
                t
              );
            },
          },
        }),
      _e = he,
      be = Object(m['a'])(_e, ve, ge, !1, null, '1c7261a5', null),
      Ce = be.exports,
      ye = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          {staticClass: 'destination-list-wrapper'},
          [
            a(
              'div',
              {staticClass: 'destination-list'},
              t._l(t.careers, function (t) {
                return a('CareerListItem', {key: t._id, attrs: {career: t}});
              }),
              1
            ),
            a('router-link', {attrs: {to: '/admin/dashboard/careers/new'}}, [
              a('div', {staticClass: 'add-btn-wrapper'}, [
                a('a', {staticClass: 'add-btn', attrs: {href: '#'}}, [
                  t._v('+'),
                ]),
              ]),
            ]),
          ],
          1
        );
      },
      Ne = [],
      ke = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          {staticClass: 'list-item-wrapper'},
          [
            a(
              'router-link',
              {attrs: {to: '/admin/dashboard/careers/' + t.career._id}},
              [
                a('div', {staticClass: 'list-item'}, [
                  a('div', {staticClass: 'list-item-name'}, [
                    a('p', [t._v(t._s(t.career.name))]),
                  ]),
                ]),
              ]
            ),
          ],
          1
        );
      },
      $e = [],
      xe = {name: 'CareerListItem', props: ['career']},
      Se = xe,
      Ee = Object(m['a'])(Se, ke, $e, !1, null, '37c77210', null),
      Pe = Ee.exports,
      we = {
        name: 'CareerList',
        computed: {
          careers: function () {
            return this.$store.getters.careers;
          },
        },
        components: {CareerListItem: Pe},
      },
      Te = we,
      Ie = a('7f6c'),
      De = Object(m['a'])(Te, ye, Ne, !1, null, null, null);
    'function' === typeof Ie['default'] && Object(Ie['default'])(De);
    var Le = De.exports,
      qe = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'destination-form-wrapper'}, [
          t.career
            ? a('div', {staticClass: 'destination-form'}, [
                a(
                  'form',
                  {staticClass: 'form'},
                  [
                    a('div', {staticClass: 'form-field'}, [
                      t._m(0),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.career.linkName,
                            expression: 'career.linkName',
                          },
                        ],
                        staticClass: 'form-input',
                        class: {'border-red': t.errors.linkName},
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.career.linkName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.career, 'linkName', e.target.value);
                          },
                        },
                      }),
                      t.errors.linkName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.linkName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(1),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.career.name,
                            expression: 'career.name',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.career.name},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.career, 'name', e.target.value);
                          },
                        },
                      }),
                      t.errors.name
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.name)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(2),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.career.experience,
                            expression: 'career.experience',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.career.experience},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.career, 'experience', e.target.value);
                          },
                        },
                      }),
                      t.errors.experience
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.experience)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(3),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.career.functionalAreas,
                            expression: 'career.functionalAreas',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.career.functionalAreas},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(
                                t.career,
                                'functionalAreas',
                                e.target.value
                              );
                          },
                        },
                      }),
                      t.errors.functionalAreas
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.functionalAreas)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(4),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.career.mailSubject,
                            expression: 'career.mailSubject',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.career.mailSubject},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.career, 'mailSubject', e.target.value);
                          },
                        },
                      }),
                      t.errors.mailSubject
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.mailSubject)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(5),
                      a('textarea', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.career.description,
                            expression: 'career.description',
                          },
                        ],
                        staticClass: 'form-area',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.career.description},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.career, 'description', e.target.value);
                          },
                        },
                      }),
                      t.errors.description
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.description)),
                          ])
                        : t._e(),
                    ]),
                    a(
                      'a',
                      {
                        staticClass: 'form-btn',
                        attrs: {disable: t.loading, href: '#'},
                        on: {click: t.saveData},
                      },
                      [t._v('Save')]
                    ),
                    a(
                      'router-link',
                      {attrs: {to: '/admin/dashboard/careers'}},
                      [
                        a(
                          'a',
                          {
                            staticClass: 'form-btn',
                            attrs: {href: '/admin/dashboard/careers'},
                            on: {click: t.deleteCareerById},
                          },
                          [t._v('Delete')]
                        ),
                      ]
                    ),
                    a('div', {staticClass: 'loader'}, [
                      a('p', {staticStyle: {color: 'green'}}, [
                        t._v('Last Update Status: [' + t._s(t.msg) + ']'),
                      ]),
                    ]),
                  ],
                  1
                ),
              ])
            : t._e(),
        ]);
      },
      Be = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'linkName'}},
            [t._v('Link Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Experience '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Functional Areas '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Mail Subject '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Description '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
      ],
      Ae =
        (a('a4d3'),
        a('e01a'),
        a('b0c0'),
        {
          name: 'CareerForm',
          props: ['id'],
          data: function () {
            return {
              career: {},
              loading: !1,
              msg: 'None',
              errors: {
                linkName: !1,
                name: !1,
                description: !1,
                functionalAreas: !1,
                experience: !1,
              },
            };
          },
          created: function () {
            this.career = Y.a.cloneDeep(
              this.$store.getters.careerById(this.id)
            );
          },
          methods: {
            deleteCareerById: function () {
              this.$store.dispatch('deleteCareer', this.career.linkName);
            },
            saveData: function (t) {
              var e = this;
              t.preventDefault(),
                this.validateForm() &&
                  ((this.loading = !0),
                  (this.msg = 'Saving...'),
                  x.$emit('loadStart', {msg: 'Saving'}),
                  this.$store
                    .dispatch('updateCareer', this.career)
                    .then(function () {
                      (e.career = Y.a.cloneDeep(
                        e.$store.getters.careerById(e.id)
                      )),
                        (e.loading = !1),
                        (e.msg = 'Updated'),
                        x.$emit('loadEnd'),
                        x.$emit('notify', {msg: 'Save Success'});
                    })
                    .catch(function (t) {
                      (e.career = Y.a.cloneDeep(
                        e.$store.getters.careerById(e.id)
                      )),
                        (e.loading = !1),
                        (e.msg = t),
                        x.$emit('loadEnd'),
                        x.$emit('notify', {msg: 'Save Failed'});
                    }));
            },
            validateForm: function () {
              var t = !0;
              return (
                '' == this.career.linkName
                  ? ((this.errors.linkName = 'Link name cannot be empty.'),
                    (t = !1))
                  : this.career.linkName.includes(' ')
                  ? (this.errors.linkName = 'Link name cannot have spaces.')
                  : this.career.linkName.length > 20 &&
                    (this.errors.linkName =
                      'Link name cannot be longer than 20 characters.'),
                '' == this.career.name &&
                  ((this.errors.name = 'Name cannot be empty.'), (t = !1)),
                '' == this.career.experience &&
                  ((this.errors.experience =
                    'Experience name cannot be empty.'),
                  (t = !1)),
                '' == this.career.description
                  ? ((this.errors.description =
                      'Description caption cannot be empty.'),
                    (t = !1))
                  : this.career.description.length > 300 &&
                    ((this.errors.description =
                      'Description cannot be longer than 300 characters.'),
                    (t = !1)),
                '' == this.career.functionalAreas &&
                  ((this.errors.functionalAreas =
                    'Functional Areas cannot be empty.'),
                  (t = !1)),
                '' == this.career.mailSubject &&
                  ((this.errors.mailSubject = 'Mail Subject cannot be empty.'),
                  (t = !1)),
                t
              );
            },
          },
        }),
      Ue = Ae,
      Oe = a('6a21'),
      je = Object(m['a'])(Ue, qe, Be, !1, null, null, null);
    'function' === typeof Oe['default'] && Object(Oe['default'])(je);
    var Fe = je.exports,
      Me = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'destination-form-wrapper'}, [
          a('div', {staticClass: 'destination-form'}, [
            a(
              'form',
              {staticClass: 'form'},
              [
                a('div', {staticClass: 'form-field'}, [
                  t._m(0),
                  a('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.career.linkName,
                        expression: 'career.linkName',
                      },
                    ],
                    staticClass: 'form-input',
                    class: {'border-red': t.errors.linkName},
                    attrs: {type: 'text', name: '', value: '', required: ''},
                    domProps: {value: t.career.linkName},
                    on: {
                      input: function (e) {
                        e.target.composing ||
                          t.$set(t.career, 'linkName', e.target.value);
                      },
                    },
                  }),
                  t.errors.linkName
                    ? a('span', {staticClass: 'error'}, [
                        t._v(t._s(t.errors.linkName)),
                      ])
                    : t._e(),
                ]),
                a('div', {staticClass: 'form-field'}, [
                  t._m(1),
                  a('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.career.name,
                        expression: 'career.name',
                      },
                    ],
                    staticClass: 'form-input',
                    attrs: {type: 'text', name: '', value: '', required: ''},
                    domProps: {value: t.career.name},
                    on: {
                      input: function (e) {
                        e.target.composing ||
                          t.$set(t.career, 'name', e.target.value);
                      },
                    },
                  }),
                  t.errors.name
                    ? a('span', {staticClass: 'error'}, [
                        t._v(t._s(t.errors.name)),
                      ])
                    : t._e(),
                ]),
                a('div', {staticClass: 'form-field'}, [
                  t._m(2),
                  a('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.career.experience,
                        expression: 'career.experience',
                      },
                    ],
                    staticClass: 'form-input',
                    attrs: {type: 'text', name: '', value: '', required: ''},
                    domProps: {value: t.career.experience},
                    on: {
                      input: function (e) {
                        e.target.composing ||
                          t.$set(t.career, 'experience', e.target.value);
                      },
                    },
                  }),
                  t.errors.experience
                    ? a('span', {staticClass: 'error'}, [
                        t._v(t._s(t.errors.experience)),
                      ])
                    : t._e(),
                ]),
                a('div', {staticClass: 'form-field'}, [
                  t._m(3),
                  a('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.career.functionalAreas,
                        expression: 'career.functionalAreas',
                      },
                    ],
                    staticClass: 'form-input',
                    attrs: {type: 'text', name: '', value: '', required: ''},
                    domProps: {value: t.career.functionalAreas},
                    on: {
                      input: function (e) {
                        e.target.composing ||
                          t.$set(t.career, 'functionalAreas', e.target.value);
                      },
                    },
                  }),
                  t.errors.functionalAreas
                    ? a('span', {staticClass: 'error'}, [
                        t._v(t._s(t.errors.functionalAreas)),
                      ])
                    : t._e(),
                ]),
                a('div', {staticClass: 'form-field'}, [
                  t._m(4),
                  a('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.career.mailSubject,
                        expression: 'career.mailSubject',
                      },
                    ],
                    staticClass: 'form-input',
                    attrs: {type: 'text', name: '', value: '', required: ''},
                    domProps: {value: t.career.mailSubject},
                    on: {
                      input: function (e) {
                        e.target.composing ||
                          t.$set(t.career, 'mailSubject', e.target.value);
                      },
                    },
                  }),
                  t.errors.mailSubject
                    ? a('span', {staticClass: 'error'}, [
                        t._v(t._s(t.errors.mailSubject)),
                      ])
                    : t._e(),
                ]),
                a('div', {staticClass: 'form-field'}, [
                  t._m(5),
                  a('textarea', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.career.description,
                        expression: 'career.description',
                      },
                    ],
                    staticClass: 'form-area',
                    attrs: {type: 'text', name: '', value: '', required: ''},
                    domProps: {value: t.career.description},
                    on: {
                      input: function (e) {
                        e.target.composing ||
                          t.$set(t.career, 'description', e.target.value);
                      },
                    },
                  }),
                  t.errors.description
                    ? a('span', {staticClass: 'error'}, [
                        t._v(t._s(t.errors.description)),
                      ])
                    : t._e(),
                ]),
                a(
                  'a',
                  {
                    staticClass: 'form-btn',
                    attrs: {disable: t.loading, href: '#'},
                    on: {click: t.saveData},
                  },
                  [t._v('Save')]
                ),
                a('router-link', {attrs: {to: '/admin/dashboard/careers'}}, [
                  a(
                    'a',
                    {
                      staticClass: 'form-btn',
                      attrs: {href: '/admin/dashboard/careers'},
                    },
                    [t._v('Back')]
                  ),
                ]),
                a('div', {staticClass: 'loader'}, [
                  a('p', {staticStyle: {color: 'green'}}, [
                    t._v('Last Update Status: [' + t._s(t.msg) + ']'),
                  ]),
                ]),
              ],
              1
            ),
          ]),
        ]);
      },
      Re = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'linkName'}},
            [t._v('Link Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Experience '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Functional Areas '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Mail Subject '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Description '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
      ],
      He = {
        name: 'CareerFormNew',
        props: ['id'],
        data: function () {
          return {
            career: {
              linkName: '',
              name: '',
              description: '',
              functionalAreas: '',
              experience: '',
              mailSubject: '',
            },
            loading: !1,
            msg: 'None',
            errors: {
              linkName: !1,
              name: !1,
              description: !1,
              functionalAreas: !1,
              experience: !1,
              mailSubject: !1,
            },
          };
        },
        methods: {
          saveData: function (t) {
            var e = this;
            t.preventDefault(),
              this.validateForm() &&
                ((this.loading = !0),
                (this.msg = 'Saving...'),
                x.$emit('loadStart', {msg: 'Saving'}),
                this.$store
                  .dispatch('addCareer', this.career)
                  .then(function () {
                    (e.loading = !1),
                      (e.msg = 'Updated'),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Save Success'});
                  })
                  .catch(function (t) {
                    (e.loading = !1),
                      (e.msg = t),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Save Failed'});
                  }));
          },
          validateForm: function () {
            var t = !0;
            return (
              '' == this.career.linkName
                ? ((this.errors.linkName = 'Link name cannot be empty.'),
                  (t = !1))
                : this.career.linkName.includes(' ')
                ? (this.errors.linkName = 'Link name cannot have spaces.')
                : this.career.linkName.length > 20 &&
                  (this.errors.linkName =
                    'Link name cannot be longer than 20 characters.'),
              '' == this.career.name &&
                ((this.errors.name = 'Name cannot be empty.'), (t = !1)),
              '' == this.career.experience &&
                ((this.errors.experience = 'Experience name cannot be empty.'),
                (t = !1)),
              '' == this.career.description
                ? ((this.errors.description =
                    'Description caption cannot be empty.'),
                  (t = !1))
                : this.career.description.length > 300 &&
                  ((this.errors.description =
                    'Description cannot be longer than 300 characters.'),
                  (t = !1)),
              '' == this.career.functionalAreas &&
                ((this.errors.functionalAreas =
                  'Functional Areas cannot be empty.'),
                (t = !1)),
              '' == this.career.mailSubject &&
                ((this.errors.mailSubject = 'Mail Subject cannot be empty.'),
                (t = !1)),
              t
            );
          },
        },
      },
      Ge = He,
      ze = a('8201'),
      Ye = Object(m['a'])(Ge, Me, Re, !1, null, null, null);
    'function' === typeof ze['default'] && Object(ze['default'])(Ye);
    var We = Ye.exports,
      Je = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          {staticClass: 'destination-list-wrapper'},
          [
            a(
              'div',
              {staticClass: 'destination-list'},
              t._l(t.blogs, function (t) {
                return a('BlogListItem', {key: t._id, attrs: {blog: t}});
              }),
              1
            ),
            a('router-link', {attrs: {to: '/admin/dashboard/blogs/new'}}, [
              a('div', {staticClass: 'add-btn-wrapper'}, [
                a('a', {staticClass: 'add-btn', attrs: {href: '#'}}, [
                  t._v('+'),
                ]),
              ]),
            ]),
          ],
          1
        );
      },
      Ke = [],
      Ve = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          {staticClass: 'list-item-wrapper'},
          [
            a(
              'router-link',
              {attrs: {to: '/admin/dashboard/blogs/' + t.blog._id}},
              [
                a('div', {staticClass: 'list-item'}, [
                  a('div', {staticClass: 'list-item-name'}, [
                    a('p', [t._v(t._s(t.blog.title))]),
                  ]),
                ]),
              ]
            ),
          ],
          1
        );
      },
      Qe = [],
      Xe = {name: 'BlogListItem', props: ['blog']},
      Ze = Xe,
      ta = Object(m['a'])(Ze, Ve, Qe, !1, null, '118ae2ef', null),
      ea = ta.exports,
      aa = {
        name: 'BlogList',
        computed: {
          blogs: function () {
            return this.$store.getters.blogs;
          },
        },
        components: {BlogListItem: ea},
      },
      sa = aa,
      ra = a('d42b'),
      ia = Object(m['a'])(sa, Je, Ke, !1, null, null, null);
    'function' === typeof ra['default'] && Object(ra['default'])(ia);
    var na = ia.exports,
      oa = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'destination-form-wrapper'}, [
          t.blog
            ? a('div', {staticClass: 'destination-form'}, [
                a(
                  'form',
                  {staticClass: 'form'},
                  [
                    a('div', {staticClass: 'form-field'}, [
                      t._m(0),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.blog.linkName,
                            expression: 'blog.linkName',
                          },
                        ],
                        staticClass: 'form-input',
                        class: {'border-red': t.errors.linkName},
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.blog.linkName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.blog, 'linkName', e.target.value);
                          },
                        },
                      }),
                      t.errors.linkName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.linkName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(1),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.blog.author,
                            expression: 'blog.author',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.blog.author},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.blog, 'author', e.target.value);
                          },
                        },
                      }),
                      t.errors.author
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.author)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(2),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.blog.title,
                            expression: 'blog.title',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.blog.title},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.blog, 'title', e.target.value);
                          },
                        },
                      }),
                      t.errors.title
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.title)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(3),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.blog.caption,
                            expression: 'blog.caption',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.blog.caption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.blog, 'caption', e.target.value);
                          },
                        },
                      }),
                      t.errors.caption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.caption)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(4),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.blog.imageName,
                            expression: 'blog.imageName',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.blog.imageName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.blog, 'imageName', e.target.value);
                          },
                        },
                      }),
                      t.errors.imageName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.imageName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(5),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.blog.imageCaption,
                            expression: 'blog.imageCaption',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.blog.imageCaption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.blog, 'imageCaption', e.target.value);
                          },
                        },
                      }),
                      t.errors.imageCaption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.imageCaption)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(6),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.blog.readTime,
                            expression: 'blog.readTime',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'number',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.blog.readTime},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.blog, 'readTime', e.target.value);
                          },
                        },
                      }),
                      t.errors.readTime
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.readTime)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(7),
                      a(
                        'select',
                        {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: t.blog.status,
                              expression: 'blog.status',
                            },
                          ],
                          staticClass: 'form-input',
                          attrs: {name: ''},
                          on: {
                            change: function (e) {
                              var a = Array.prototype.filter
                                .call(e.target.options, function (t) {
                                  return t.selected;
                                })
                                .map(function (t) {
                                  var e = '_value' in t ? t._value : t.value;
                                  return e;
                                });
                              t.$set(
                                t.blog,
                                'status',
                                e.target.multiple ? a : a[0]
                              );
                            },
                          },
                        },
                        [
                          a('option', {attrs: {value: 'none'}}, [t._v('None')]),
                          a('option', {attrs: {value: 'featured'}}, [
                            t._v('Featured'),
                          ]),
                        ]
                      ),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(8),
                      a('textarea', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.blog.content,
                            expression: 'blog.content',
                          },
                        ],
                        staticClass: 'form-area',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.blog.content},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.blog, 'content', e.target.value);
                          },
                        },
                      }),
                      t.errors.content
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.content)),
                          ])
                        : t._e(),
                    ]),
                    a(
                      'a',
                      {
                        staticClass: 'form-btn',
                        attrs: {disable: t.loading, href: '#'},
                        on: {click: t.saveData},
                      },
                      [t._v('Save')]
                    ),
                    a('router-link', {attrs: {to: '/admin/dashboard/blogs'}}, [
                      a(
                        'a',
                        {
                          staticClass: 'form-btn',
                          attrs: {href: '/admin/dashboard/blogs'},
                          on: {click: t.deleteBlogById},
                        },
                        [t._v('Delete')]
                      ),
                    ]),
                    a('div', {staticClass: 'loader'}, [
                      a('p', {staticStyle: {color: 'green'}}, [
                        t._v('Last Update Status: [' + t._s(t.msg) + ']'),
                      ]),
                    ]),
                  ],
                  1
                ),
              ])
            : t._e(),
        ]);
      },
      la = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'linkName'}},
            [t._v('Link Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Author '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Title '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Caption '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Image Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Image Caption '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Read Time (minutes) '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Status '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Content '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
      ],
      ca = {
        name: 'BlogForm',
        props: ['id'],
        data: function () {
          return {
            blog: {},
            loading: !1,
            msg: 'None',
            errors: {
              linkName: !1,
              title: !1,
              content: !1,
              imageName: !1,
              imageCaption: !1,
              readTime: !1,
              caption: !1,
              author: !1,
            },
          };
        },
        created: function () {
          this.blog = Y.a.cloneDeep(this.$store.getters.blogById(this.id));
        },
        methods: {
          deleteBlogById: function () {
            this.$store.dispatch('deleteBlog', this.blog.linkName);
          },
          saveData: function (t) {
            var e = this;
            t.preventDefault(),
              this.validateForm() &&
                ((this.loading = !0),
                (this.msg = 'Saving...'),
                x.$emit('loadStart', {msg: 'Saving'}),
                this.$store
                  .dispatch('updateBlog', this.blog)
                  .then(function () {
                    (e.blog = Y.a.cloneDeep(e.$store.getters.blogById(e.id))),
                      (e.loading = !1),
                      (e.msg = 'Updated'),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Save Success'});
                  })
                  .catch(function (t) {
                    (e.blog = Y.a.cloneDeep(e.$store.getters.blogById(e.id))),
                      (e.loading = !1),
                      (e.msg = t),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Save Failed'});
                  }));
          },
          validateForm: function () {
            var t = !0;
            return (
              '' == this.blog.linkName
                ? ((this.errors.linkName = 'Link name cannot be empty.'),
                  (t = !1))
                : this.blog.linkName.includes(' ')
                ? ((this.errors.linkName = 'Link name cannot have spaces.'),
                  (t = !1))
                : this.blog.linkName.length > 20 &&
                  ((this.errors.linkName =
                    'Link name cannot be longer than 20 characters.'),
                  (t = !1)),
              '' == this.blog.title &&
                ((this.errors.title = 'Title cannot be empty.'), (t = !1)),
              '' == this.blog.author &&
                ((this.errors.author = 'Author name cannot be empty.'),
                (t = !1)),
              '' == this.blog.content
                ? ((this.errors.content = 'Content cannot be empty.'), (t = !1))
                : this.blog.content.length > 1200 &&
                  ((this.errors.content =
                    'Content cannot be longer than 1200 characters.'),
                  (t = !1)),
              '' == this.blog.imageName &&
                ((this.errors.imageName = 'Image Name cannot be empty.'),
                (t = !1)),
              '' == this.blog.imageCaption &&
                ((this.errors.imageCaption = 'Image Caption cannot be empty.'),
                (t = !1)),
              '' == this.blog.caption &&
                ((this.errors.caption = 'Caption cannot be empty.'), (t = !1)),
              0 == this.blog.readTime &&
                ((this.errors.readTime = 'Read Time cannot be zero.'),
                (t = !1)),
              t
            );
          },
        },
      },
      ma = ca,
      ua = a('ea75'),
      da = Object(m['a'])(ma, oa, la, !1, null, null, null);
    'function' === typeof ua['default'] && Object(ua['default'])(da);
    var pa = da.exports,
      fa = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'destination-form-wrapper'}, [
          t.blog
            ? a('div', {staticClass: 'destination-form'}, [
                a(
                  'form',
                  {staticClass: 'form'},
                  [
                    a('div', {staticClass: 'form-field'}, [
                      t._m(0),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.blog.linkName,
                            expression: 'blog.linkName',
                          },
                        ],
                        staticClass: 'form-input',
                        class: {'border-red': t.errors.linkName},
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.blog.linkName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.blog, 'linkName', e.target.value);
                          },
                        },
                      }),
                      t.errors.linkName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.linkName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(1),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.blog.author,
                            expression: 'blog.author',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.blog.author},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.blog, 'author', e.target.value);
                          },
                        },
                      }),
                      t.errors.author
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.author)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(2),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.blog.title,
                            expression: 'blog.title',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.blog.title},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.blog, 'title', e.target.value);
                          },
                        },
                      }),
                      t.errors.title
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.title)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(3),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.blog.caption,
                            expression: 'blog.caption',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.blog.caption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.blog, 'caption', e.target.value);
                          },
                        },
                      }),
                      t.errors.caption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.caption)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(4),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.blog.imageName,
                            expression: 'blog.imageName',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.blog.imageName},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.blog, 'imageName', e.target.value);
                          },
                        },
                      }),
                      t.errors.imageName
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.imageName)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(5),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.blog.imageCaption,
                            expression: 'blog.imageCaption',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.blog.imageCaption},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.blog, 'imageCaption', e.target.value);
                          },
                        },
                      }),
                      t.errors.imageCaption
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.imageCaption)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(6),
                      a('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.blog.readTime,
                            expression: 'blog.readTime',
                          },
                        ],
                        staticClass: 'form-input',
                        attrs: {
                          type: 'number',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.blog.readTime},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.blog, 'readTime', e.target.value);
                          },
                        },
                      }),
                      t.errors.readTime
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.readTime)),
                          ])
                        : t._e(),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(7),
                      a(
                        'select',
                        {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: t.blog.status,
                              expression: 'blog.status',
                            },
                          ],
                          staticClass: 'form-input',
                          attrs: {name: ''},
                          on: {
                            change: function (e) {
                              var a = Array.prototype.filter
                                .call(e.target.options, function (t) {
                                  return t.selected;
                                })
                                .map(function (t) {
                                  var e = '_value' in t ? t._value : t.value;
                                  return e;
                                });
                              t.$set(
                                t.blog,
                                'status',
                                e.target.multiple ? a : a[0]
                              );
                            },
                          },
                        },
                        [
                          a('option', {attrs: {value: 'none'}}, [t._v('None')]),
                          a('option', {attrs: {value: 'featured'}}, [
                            t._v('Featured'),
                          ]),
                        ]
                      ),
                    ]),
                    a('div', {staticClass: 'form-field'}, [
                      t._m(8),
                      a('textarea', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.blog.content,
                            expression: 'blog.content',
                          },
                        ],
                        staticClass: 'form-area',
                        attrs: {
                          type: 'text',
                          name: '',
                          value: '',
                          required: '',
                        },
                        domProps: {value: t.blog.content},
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t.blog, 'content', e.target.value);
                          },
                        },
                      }),
                      t.errors.content
                        ? a('span', {staticClass: 'error'}, [
                            t._v(t._s(t.errors.content)),
                          ])
                        : t._e(),
                    ]),
                    a(
                      'a',
                      {
                        staticClass: 'form-btn',
                        attrs: {disable: t.loading, href: '#'},
                        on: {click: t.saveData},
                      },
                      [t._v('Save')]
                    ),
                    a('router-link', {attrs: {to: '/admin/dashboard/blogs'}}, [
                      a(
                        'a',
                        {
                          staticClass: 'form-btn',
                          attrs: {href: '/admin/dashboard/blogs'},
                        },
                        [t._v('Back')]
                      ),
                    ]),
                    a('div', {staticClass: 'loader'}, [
                      a('p', {staticStyle: {color: 'green'}}, [
                        t._v('Last Update Status: [' + t._s(t.msg) + ']'),
                      ]),
                    ]),
                  ],
                  1
                ),
              ])
            : t._e(),
        ]);
      },
      va = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'linkName'}},
            [t._v('Link Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Author '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Title '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Caption '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Image Name '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Image Caption '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [
              t._v('Read Time (minutes) '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Status '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'heading'}},
            [t._v('Content '), a('span', {staticClass: 'red'}, [t._v(' *')])]
          );
        },
      ],
      ga = {
        name: 'BlogFormNew',
        props: ['id'],
        data: function () {
          return {
            blog: {
              linkName: '',
              title: '',
              content: '',
              imageName: '',
              imageCaption: '',
              readTime: 0,
              caption: '',
              author: '',
              status: 'none',
            },
            loading: !1,
            msg: 'None',
            errors: {
              linkName: !1,
              title: !1,
              content: !1,
              imageName: !1,
              imageCaption: !1,
              readTime: !1,
              caption: !1,
              author: !1,
            },
          };
        },
        methods: {
          saveData: function (t) {
            var e = this;
            t.preventDefault(),
              this.validateForm() &&
                ((this.loading = !0),
                (this.msg = 'Saving...'),
                x.$emit('loadStart', {msg: 'Saving'}),
                this.$store
                  .dispatch('addBlog', this.blog)
                  .then(function () {
                    (e.loading = !1),
                      (e.msg = 'Updated'),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Save Success'});
                  })
                  .catch(function (t) {
                    (e.loading = !1),
                      (e.msg = t),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Save Failed'});
                  }));
          },
          validateForm: function () {
            var t = !0;
            return (
              '' == this.blog.linkName
                ? ((this.errors.linkName = 'Link name cannot be empty.'),
                  (t = !1))
                : this.blog.linkName.includes(' ')
                ? (this.errors.linkName = 'Link name cannot have spaces.')
                : this.blog.linkName.length > 20 &&
                  (this.errors.linkName =
                    'Link name cannot be longer than 20 characters.'),
              '' == this.blog.title &&
                ((this.errors.title = 'Title cannot be empty.'), (t = !1)),
              '' == this.blog.author &&
                ((this.errors.author = 'Author name cannot be empty.'),
                (t = !1)),
              '' == this.blog.content
                ? ((this.errors.content = 'Content cannot be empty.'), (t = !1))
                : this.blog.content.length > 1200 &&
                  ((this.errors.content =
                    'Content cannot be longer than 1200 characters.'),
                  (t = !1)),
              '' == this.blog.imageName &&
                ((this.errors.imageName = 'Image Name cannot be empty.'),
                (t = !1)),
              '' == this.blog.imageCaption &&
                ((this.errors.imageCaption = 'Image Caption cannot be empty.'),
                (t = !1)),
              '' == this.blog.caption &&
                ((this.errors.caption = 'Caption cannot be empty.'), (t = !1)),
              0 == this.blog.readTime &&
                ((this.errors.readTime = 'Read Time cannot be zero.'),
                (t = !1)),
              t
            );
          },
        },
      },
      ha = ga,
      _a = a('42ef'),
      ba = Object(m['a'])(ha, fa, va, !1, null, null, null);
    'function' === typeof _a['default'] && Object(_a['default'])(ba);
    var Ca = ba.exports,
      ya = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'destination-list-wrapper'}, [
          a(
            'div',
            {staticClass: 'destination-list'},
            t._l(t.bookings, function (e, s) {
              return a(
                'router-link',
                {key: e.name, attrs: {to: '/admin/dashboard/bookings/' + s}},
                [
                  a('div', {staticClass: 'list-item-wrapper'}, [
                    a('div', {staticClass: 'list-item'}, [
                      a('div', {staticClass: 'list-item-name'}, [
                        a('a', {attrs: {href: '#'}}, [t._v(t._s(s))]),
                      ]),
                    ]),
                  ]),
                ]
              );
            }),
            1
          ),
        ]);
      },
      Na = [],
      ka = (a('99af'), a('13d5'), a('ade3')),
      $a = {
        name: 'BookingList',
        computed: {
          bookings: function () {
            var t = this.$store.getters.bookings;
            return (
              (t = t.reduce(function (t, e) {
                return Object.assign(
                  t,
                  Object(ka['a'])({}, e.title, (t[e.title] || []).concat(e))
                );
              }, {})),
              t
            );
          },
        },
      },
      xa = $a,
      Sa = (a('752d'), Object(m['a'])(xa, ya, Na, !1, null, '31004845', null)),
      Ea = Sa.exports,
      Pa = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'booking-table-wrapper'}, [
          a(
            'table',
            {staticClass: 'booking-table'},
            [
              t._m(0),
              t._l(t.booking, function (e, s) {
                return a('tr', {key: s}, [
                  a('td', [t._v(t._s(e.firstName))]),
                  a('td', [t._v(t._s(e.lastName))]),
                  a('td', [t._v(t._s(e.email))]),
                  a('td', [t._v(t._s(e.phone))]),
                  a('td', [t._v(t._s(e.gender))]),
                  a('td', [t._v(t._s(e.departure))]),
                  a('td', [t._v(t._s(e.discountCode))]),
                ]);
              }),
            ],
            2
          ),
          a(
            'button',
            {
              attrs: {type: 'button', name: 'button'},
              on: {click: t.downloadCsv},
            },
            [t._v('Download CSV')]
          ),
        ]);
      },
      wa = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('tr', [
            a('th', [t._v('First Name')]),
            a('th', [t._v('Last Name')]),
            a('th', [t._v('Email')]),
            a('th', [t._v('Phone')]),
            a('th', [t._v('Gender')]),
            a('th', [t._v('Departure')]),
            a('th', [t._v('Discount Code')]),
          ]);
        },
      ],
      Ta = a('bc3a'),
      Ia = a.n(Ta),
      Da = {
        name: 'BookingListItem',
        props: ['id'],
        computed: {
          booking: function () {
            var t = this.$store.getters.bookings;
            return (
              (t = t.reduce(function (t, e) {
                return Object.assign(
                  t,
                  Object(ka['a'])({}, e.title, (t[e.title] || []).concat(e))
                );
              }, {})),
              t[this.id]
            );
          },
        },
        methods: {
          downloadCsv: function () {
            Ia.a
              .get('/api/tours/' + this.id + '/bookings?format=csv')
              .then(function (t) {
                console.log(t);
              })
              .catch(function (t) {
                console.log(t);
              });
          },
        },
      },
      La = Da,
      qa = (a('4f60'), Object(m['a'])(La, Pa, wa, !1, null, '1439e490', null)),
      Ba = qa.exports,
      Aa = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', {staticClass: 'destination-form-wrapper'}, [
          a('div', {staticClass: 'destination-form'}, [
            a(
              'form',
              {
                staticClass: 'form',
                attrs: {method: 'post', enctype: 'multipart/form-data'},
                on: {
                  submit: function (e) {
                    return e.preventDefault(), t.uploadPhotos(e);
                  },
                },
              },
              [
                a(
                  'div',
                  {staticClass: 'form-field'},
                  [
                    t._m(0),
                    a('image-uploader', {
                      staticClass: 'form-input',
                      attrs: {
                        required: '',
                        debug: 1,
                        maxWidth: 300,
                        quality: 0.5,
                        autoRotate: !0,
                        outputFormat: 'verbose',
                        preview: !1,
                        capture: !1,
                        accept: 'image/*',
                        doNotResize: "['gif', 'svg']",
                      },
                      on: {
                        input: t.changePhotoLres,
                        onUpload: t.startImageResize,
                        onComplete: t.endImageResize,
                      },
                    }),
                    t._l(t.errors.lres, function (e) {
                      return a('span', {key: e, staticClass: 'error'}, [
                        t._v(t._s(e)),
                      ]);
                    }),
                  ],
                  2
                ),
                a(
                  'div',
                  {staticClass: 'form-field'},
                  [
                    t._m(1),
                    a('image-uploader', {
                      staticClass: 'form-input',
                      attrs: {
                        required: '',
                        debug: 1,
                        maxWidth: 1024,
                        quality: 0.7,
                        autoRotate: !0,
                        outputFormat: 'verbose',
                        preview: !1,
                        capture: !1,
                        accept: 'image/*',
                        doNotResize: "['gif', 'svg']",
                      },
                      on: {
                        input: t.changePhotoMres,
                        onUpload: t.startImageResize,
                        onComplete: t.endImageResize,
                      },
                    }),
                    t._l(t.errors.mres, function (e) {
                      return a('span', {key: e, staticClass: 'error'}, [
                        t._v(t._s(e)),
                      ]);
                    }),
                  ],
                  2
                ),
                a(
                  'div',
                  {staticClass: 'form-field'},
                  [
                    t._m(2),
                    a('image-uploader', {
                      staticClass: 'form-input',
                      attrs: {
                        required: '',
                        debug: 1,
                        maxWidth: 1920,
                        quality: 0.7,
                        autoRotate: !0,
                        outputFormat: 'verbose',
                        preview: !1,
                        capture: !1,
                        accept: 'image/*',
                        doNotResize: "['gif', 'svg']",
                      },
                      on: {
                        input: t.changePhotoHres,
                        onUpload: t.startImageResize,
                        onComplete: t.endImageResize,
                      },
                    }),
                    t._l(t.errors.hres, function (e) {
                      return a('span', {key: e, staticClass: 'error'}, [
                        t._v(t._s(e)),
                      ]);
                    }),
                  ],
                  2
                ),
                a('input', {
                  staticClass: 'form-btn',
                  attrs: {type: 'submit', value: 'Upload', disable: t.loading},
                }),
                a('router-link', {attrs: {to: '/admin/dashboard/cities'}}, [
                  a('a', {staticClass: 'form-btn', attrs: {href: '#'}}, [
                    t._v('Back'),
                  ]),
                ]),
              ],
              1
            ),
          ]),
        ]);
      },
      Ua = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'linkName'}},
            [
              t._v('Low Resolution Photo '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'linkName'}},
            [
              t._v('Medium Resolution Photo '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            'label',
            {staticClass: 'form-label', attrs: {for: 'linkName'}},
            [
              t._v('High Resolution Photo '),
              a('span', {staticClass: 'red'}, [t._v(' *')]),
            ]
          );
        },
      ],
      Oa =
        (a('4160'),
        a('c975'),
        a('d3b7'),
        a('ac1f'),
        a('466d'),
        a('1276'),
        a('5cc6'),
        a('9a8c'),
        a('a975'),
        a('735e'),
        a('c1ac'),
        a('d139'),
        a('3a7b'),
        a('d5d6'),
        a('82f8'),
        a('e91f'),
        a('60bd'),
        a('5f96'),
        a('3280'),
        a('3fcc'),
        a('ca91'),
        a('25a1'),
        a('cd26'),
        a('3c5d'),
        a('2954'),
        a('649e'),
        a('219c'),
        a('170b'),
        a('b39a'),
        a('72f7'),
        a('159b'),
        a('4c7d')),
      ja = a.n(Oa),
      Fa = {
        name: 'UploadPhotos',
        components: {ImageUploader: ja.a},
        data: function () {
          return {
            loading: !1,
            photos: Array(3).fill(null),
            errors: {lres: [], mres: [], hres: []},
          };
        },
        methods: {
          startImageResize: function () {
            (this.loading = !0), x.$emit('loadStart', {msg: 'Resizing...'});
          },
          endImageResize: function () {
            x.$emit('loadEnd'), (this.loading = !1);
          },
          changePhotoLres: function (t) {
            this.photos[0] = t;
          },
          changePhotoMres: function (t) {
            this.photos[1] = t;
          },
          changePhotoHres: function (t) {
            this.photos[2] = t;
          },
          dataURLToBlob: function (t) {
            var e = ';base64,';
            if (-1 == t.indexOf(e)) {
              var a = t.split(','),
                s = a[0].split(':')[1],
                r = a[1];
              return new Blob([r], {type: s});
            }
            for (
              var i = t.split(e),
                n = i[0].split(':')[1],
                o = window.atob(i[1]),
                l = o.length,
                c = new Uint8Array(l),
                m = 0;
              m < l;
              ++m
            )
              c[m] = o.charCodeAt(m);
            return new Blob([c], {type: n});
          },
          validate: function () {
            var t = !0;
            (this.errors.lres = []),
              (this.errors.mres = []),
              (this.errors.hres = []),
              this.photos[0] || (this.errors.lres.push('Required'), (t = !1)),
              this.photos[1] || (this.errors.mres.push('Required'), (t = !1)),
              this.photos[2] || (this.errors.hres.push('Required'), (t = !1));
            var e = /[ \n\t\r]+/g,
              a = /^image\/(jpeg|png)$/g;
            return (
              this.photos.forEach(function (t) {
                return console.log(t.info.type);
              }),
              this.photos[0].info.type.match(a) ||
                (this.errors.lres.push(
                  'Only (jpg|png) images can be uploaded. Make sure the extension (jpg|png) are in lowercase'
                ),
                (t = !1)),
              this.photos[1].info.type.match(a) ||
                (this.errors.mres.push(
                  'Only (jpg|png) images can be uploaded. Make sure the extension (jpg|png) are in lowercase'
                ),
                (t = !1)),
              this.photos[2].info.type.match(a) ||
                (this.errors.hres.push(
                  'Only (jpg|png) images can be uploaded. Make sure the extension (jpg|png) are in lowercase'
                ),
                (t = !1)),
              this.photos[0].info.name.match(e) &&
                (this.errors.lres.push('Photo names cannot have spaces.'),
                (t = !1)),
              this.photos[1].info.name.match(e) &&
                (this.errors.mres.push('Photo names cannot have spaces.'),
                (t = !1)),
              this.photos[2].info.name.match(e) &&
                (this.errors.hres.push('Photo names cannot have spaces.'),
                (t = !1)),
              (this.photos[0].info.name === this.photos[1].info.name &&
                this.photos[1].info.name === this.photos[2].info.name) ||
                (this.errors.hres.push('Please upload same image in all slots'),
                this.errors.mres.push('Please upload same image in all slots'),
                this.errors.lres.push('Please upload same image in all slots'),
                (t = !1)),
              t
            );
          },
          uploadPhotos: function () {
            var t = this;
            if (this.validate()) {
              (this.errors.lres = []),
                (this.errors.mres = []),
                (this.errors.hres = []);
              var e = new FormData();
              e.append(
                'photos',
                this.dataURLToBlob(this.photos[0].dataUrl),
                'lres_'.concat(this.photos[0].info.name)
              ),
                e.append(
                  'photos',
                  this.dataURLToBlob(this.photos[1].dataUrl),
                  'mres_'.concat(this.photos[1].info.name)
                ),
                e.append(
                  'photos',
                  this.dataURLToBlob(this.photos[2].dataUrl),
                  'hres_'.concat(this.photos[2].info.name)
                ),
                (this.loading = !0),
                x.$emit('loadStart', {msg: 'Uploading...'}),
                Ia.a
                  .post('/upload/photos', e, {
                    headers: {'Content-Type': 'multipart/form-data'},
                  })
                  .then(function (e) {
                    x.$emit('loadEnd'),
                      (t.loading = !1),
                      201 === e.status
                        ? x.$emit('notify', {msg: 'Upload Success'})
                        : x.$emit('notify', {msg: 'Upload Failed'});
                  })
                  .catch(function (e) {
                    console.log(e),
                      (t.loading = !1),
                      x.$emit('loadEnd'),
                      x.$emit('notify', {msg: 'Upload Error.'});
                  });
            }
          },
        },
      },
      Ma = Fa,
      Ra = (a('4cad'), Object(m['a'])(Ma, Aa, Ua, !1, null, '81086652', null)),
      Ha = Ra.exports;
    s['a'].use(T['a']);
    var Ga = [
        {path: '/admin/dashboard', component: R},
        {path: '/admin/dashboard/upload', component: Ha},
        {path: '/admin/dashboard/destinations', component: R},
        {path: '/admin/dashboard/destinations/new', component: at},
        {path: '/admin/dashboard/destinations/:id', component: V, props: !0},
        {path: '/admin/dashboard/substyles', component: ft},
        {path: '/admin/dashboard/substyles/new', component: St},
        {path: '/admin/dashboard/substyles/:id', component: Ct, props: !0},
        {path: '/admin/dashboard/tours', component: le},
        {path: '/admin/dashboard/tours/new', component: Ce},
        {path: '/admin/dashboard/tours/:id', component: fe, props: !0},
        {path: '/admin/dashboard/bookings', component: Ea},
        {path: '/admin/dashboard/bookings/:id', component: Ba, props: !0},
        {path: '/admin/dashboard/styles', component: Ot},
        {path: '/admin/dashboard/styles/new', component: Vt},
        {path: '/admin/dashboard/styles/:id', component: Gt, props: !0},
        {path: '/admin/dashboard/careers', component: Le},
        {path: '/admin/dashboard/careers/new', component: We},
        {path: '/admin/dashboard/careers/:id', component: Fe, props: !0},
        {path: '/admin/dashboard/blogs', component: na},
        {path: '/admin/dashboard/blogs/new', component: Ca},
        {path: '/admin/dashboard/blogs/:id', component: pa, props: !0},
        {path: '*', redirect: '/admin/dashboard'},
      ],
      za = new T['a']({mode: 'history', routes: Ga}),
      Ya = a('2f62'),
      Wa = {
        getAdmins: function (t) {
          Ia.a.get('/api/admins').then(function (e) {
            t.commit('UPDATE_ADMINS', e.data);
          });
        },
      },
      Ja = Wa,
      Ka = {
        admins: function (t) {
          return t.admins;
        },
      },
      Va = Ka,
      Qa = {
        UPDATE_ADMINS: function (t, e) {
          t.admins = e;
        },
      },
      Xa = Qa,
      Za = {admins: []},
      ts = {namspaced: !1, state: Za, mutations: Xa, actions: Ja, getters: Va},
      es = ts,
      as = {
        getBlogs: function (t) {
          Ia.a
            .get('/api/blogs')
            .then(function (e) {
              200 === e.status && t.commit('UPDATE_BLOGS', e.data);
            })
            .catch(function (t) {
              console.log(t);
            });
        },
        updateBlog: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .patch('/api/blogs/'.concat(e.linkName), e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_BLOGS', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
        addBlog: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .post('/api/blogs', e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_BLOGS', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
        deleteBlog: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .delete('/api/blogs/' + e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_BLOGS', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
      },
      ss = as,
      rs =
        (a('7db0'),
        {
          blogs: function (t) {
            return t.blogs;
          },
          blogById: function (t) {
            return function (e) {
              return t.blogs.find(function (t) {
                return t._id === e;
              });
            };
          },
        }),
      is = rs,
      ns = {
        UPDATE_BLOGS: function (t, e) {
          t.blogs = e;
        },
      },
      os = ns,
      ls = {blogs: []},
      cs = {namspaced: !1, state: ls, mutations: os, actions: ss, getters: is},
      ms = cs,
      us = {
        getSubstyles: function (t) {
          Ia.a
            .get('/api/substyles')
            .then(function (e) {
              200 === e.status && t.commit('UPDATE_SUBSTYLES', e.data);
            })
            .catch(function (t) {
              console.log(t);
            });
        },
        updateSubstyle: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .patch('/api/substyles/'.concat(e.linkName), e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_SUBSTYLES', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
        addSubstyle: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .post('/api/substyles', e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_SUBSTYLES', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
        deleteSubstyle: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .delete('/api/substyles/' + e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_SUBSTYLES', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
      },
      ds = us,
      ps = {
        substyles: function (t) {
          return t.substyles;
        },
        substyleById: function (t) {
          return function (e) {
            return t.substyles.find(function (t) {
              return t._id === e;
            });
          };
        },
      },
      fs = ps,
      vs = {
        UPDATE_SUBSTYLES: function (t, e) {
          t.substyles = e;
        },
      },
      gs = vs,
      hs = {substyles: []},
      _s = {namspaced: !1, state: hs, mutations: gs, actions: ds, getters: fs},
      bs = _s,
      Cs = {
        getBookings: function (t) {
          Ia.a.get('/api/bookings').then(function (e) {
            200 === e.status && t.commit('UPDATE_BOOKINGS', e.data);
          });
        },
      },
      ys = Cs,
      Ns = {
        bookings: function (t) {
          return t.bookings;
        },
      },
      ks = Ns,
      $s = {
        UPDATE_BOOKINGS: function (t, e) {
          t.bookings = e;
        },
      },
      xs = $s,
      Ss = {bookings: []},
      Es = {namspaced: !1, state: Ss, mutations: xs, actions: ys, getters: ks},
      Ps = Es,
      ws = {
        getStyles: function (t) {
          Ia.a
            .get('/api/styles')
            .then(function (e) {
              200 === e.status && t.commit('UPDATE_STYLES', e.data);
            })
            .catch(function (t) {
              console.log(t);
            });
        },
        updateStyle: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .patch('/api/styles/'.concat(e.linkName), e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_STYLES', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
        addStyle: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .post('/api/styles', e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_STYLES', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
        deleteStyle: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .delete('/api/styles/' + e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_STYLES', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
      },
      Ts = ws,
      Is = {
        styles: function (t) {
          return t.styles;
        },
        styleById: function (t) {
          return function (e) {
            return t.styles.find(function (t) {
              return t._id === e;
            });
          };
        },
      },
      Ds = Is,
      Ls = {
        UPDATE_STYLES: function (t, e) {
          t.styles = e;
        },
      },
      qs = Ls,
      Bs = {styles: []},
      As = {namspaced: !1, state: Bs, mutations: qs, actions: Ts, getters: Ds},
      Us = As,
      Os = {
        getDestinations: function (t) {
          Ia.a
            .get('/api/destinations')
            .then(function (e) {
              200 === e.status && t.commit('UPDATE_DESTINATIONS', e.data);
            })
            .catch(function (t) {
              console.log(t);
            });
        },
        updateDestination: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .patch('/api/destinations/'.concat(e.linkName), e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_DESTINATIONS', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
        addDestination: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .post('/api/destinations', e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_DESTINATIONS', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
        deleteDestination: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .delete('/api/destinations/' + e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_DESTINATIONS', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
      },
      js = Os,
      Fs = {
        destinations: function (t) {
          return t.destinations;
        },
        destById: function (t) {
          return function (e) {
            return t.destinations.find(function (t) {
              return t._id === e;
            });
          };
        },
      },
      Ms = Fs,
      Rs = {
        UPDATE_DESTINATIONS: function (t, e) {
          t.destinations = e;
        },
      },
      Hs = Rs,
      Gs = {destinations: []},
      zs = {namspaced: !1, state: Gs, mutations: Hs, actions: js, getters: Ms},
      Ys = zs,
      Ws = {
        getTours: function (t) {
          Ia.a
            .get('/api/tours')
            .then(function (e) {
              200 === e.status && t.commit('UPDATE_TOURS', e.data);
            })
            .catch(function (t) {
              console.log(t);
            });
        },
        updateTour: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .patch('/api/tours/'.concat(e.linkName), e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_TOURS', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
        addTour: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .post('/api/tours', e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_TOURS', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
        deleteTour: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .delete('/api/tours/' + e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_TOURS', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
      },
      Js = Ws,
      Ks = {
        tours: function (t) {
          return t.tours;
        },
        tourById: function (t) {
          return function (e) {
            return t.tours.find(function (t) {
              return t._id === e;
            });
          };
        },
      },
      Vs = Ks,
      Qs = {
        UPDATE_TOURS: function (t, e) {
          t.tours = e;
        },
      },
      Xs = Qs,
      Zs = {tours: []},
      tr = {namspaced: !1, state: Zs, mutations: Xs, actions: Js, getters: Vs},
      er = tr,
      ar = {
        getCareers: function (t) {
          Ia.a
            .get('/api/careers')
            .then(function (e) {
              200 === e.status && t.commit('UPDATE_CAREERS', e.data);
            })
            .catch(function (t) {
              console.log(t);
            });
        },
        updateCareer: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .patch('/api/careers/'.concat(e.linkName), e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_CAREERS', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
        addCareer: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .post('/api/careers', e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_CAREERS', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
        deleteCareer: function (t, e) {
          return new Promise(function (a, s) {
            Ia.a
              .delete('/api/careers/' + e)
              .then(function (e) {
                200 === e.status
                  ? (t.commit('UPDATE_CAREERS', e.data), a(!0))
                  : s(e.statusText);
              })
              .catch(function (t) {
                s(t);
              });
          });
        },
      },
      sr = ar,
      rr = {
        careers: function (t) {
          return t.careers;
        },
        careerById: function (t) {
          return function (e) {
            return t.careers.find(function (t) {
              return t._id === e;
            });
          };
        },
      },
      ir = rr,
      nr = {
        UPDATE_CAREERS: function (t, e) {
          t.careers = e;
        },
      },
      or = nr,
      lr = {careers: []},
      cr = {namspaced: !1, state: lr, mutations: or, actions: sr, getters: ir},
      mr = cr;
    s['a'].use(Ya['a']);
    var ur = new Ya['a'].Store({
      modules: {
        admin: es,
        blog: ms,
        substyle: bs,
        booking: Ps,
        style: Us,
        destination: Ys,
        tour: er,
        career: mr,
      },
    });
    (s['a'].config.productionTip = !1),
      new s['a']({
        bus: x,
        router: za,
        store: ur,
        render: function (t) {
          return t(w);
        },
      }).$mount('#app');
  },
  '6a21': function (t, e, a) {
    'use strict';
    var s = a('2705'),
      r = a.n(s);
    e['default'] = r.a;
  },
  '6e38': function (t, e, a) {},
  '752d': function (t, e, a) {
    'use strict';
    var s = a('22c5'),
      r = a.n(s);
    r.a;
  },
  '794a': function (t, e, a) {
    'use strict';
    var s = a('aa4b'),
      r = a.n(s);
    r.a;
  },
  '7e3c': function (t, e, a) {
    'use strict';
    var s = a('ed28'),
      r = a.n(s);
    r.a;
  },
  '7f6c': function (t, e, a) {
    'use strict';
    var s = a('6e38'),
      r = a.n(s);
    e['default'] = r.a;
  },
  8201: function (t, e, a) {
    'use strict';
    var s = a('cf6e'),
      r = a.n(s);
    e['default'] = r.a;
  },
  '85ec': function (t, e, a) {},
  '888a': function (t, e, a) {},
  '8ba0': function (t, e, a) {},
  9134: function (t, e, a) {},
  a31d: function (t, e, a) {
    'use strict';
    var s = a('106c'),
      r = a.n(s);
    r.a;
  },
  a3fc: function (t, e, a) {},
  aa4b: function (t, e, a) {},
  bf1f: function (t, e, a) {
    'use strict';
    var s = a('8ba0'),
      r = a.n(s);
    r.a;
  },
  cf6e: function (t, e, a) {},
  d42b: function (t, e, a) {
    'use strict';
    var s = a('2ef0e'),
      r = a.n(s);
    e['default'] = r.a;
  },
  ea75: function (t, e, a) {
    'use strict';
    var s = a('a3fc'),
      r = a.n(s);
    e['default'] = r.a;
  },
  ed28: function (t, e, a) {},
});
//# sourceMappingURL=app.bfe93da9.js.map