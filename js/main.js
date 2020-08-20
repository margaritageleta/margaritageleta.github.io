window.onload = function(){
   const mapWidth = 100;
    const k = [.5, .5];
    
    const canvas = document.getElementById("space");
    const gl = twgl.getContext(canvas, {
      depth : false,
      alpha : false,
      antialias : false
    });
    const board_LD = [0, 1, 2].map((e) => {
      return twgl.createProgramInfo(gl, [vInitStars, fInitStars(e)]);
    });
    const answers = [0, 1, 2].map((e) => {
      return twgl.createProgramInfo(gl, [vPhysicsStars, fPhysicsStars(e)]);
    });
    const programInfo = twgl.createProgramInfo(gl, [vDrawStars, fDrawStars]);
    const obj_two = [0, 1].map((e) => {
      return twgl.createProgramInfo(gl, [vInitParticles, fInitParticles(e)]);
    });
    const tmpboard = [0, 1].map((e) => {
      return twgl.createProgramInfo(gl, [vPhysicsParticles, fPhysicsParticles(e)]);
    });
    const program = twgl.createProgramInfo(gl, [vDrawParticles, fDrawParticles]);
    twgl.resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.clientWidth, gl.canvas.clientHeight);
    twgl.setDefaults({
      textureColor : [1, 1, 1, 0]
    });
    
    let w = [0, 1].map((canCreateDiscussions) => {
        return twgl.createTexture(gl, {
          src : `static/logos/logo${canCreateDiscussions}.png`,
          flipY : true,
          wrap : gl.CLAMP_TO_EDGE
        });
      });
    
    let width = 200;
    let total = 512;
    if (gl.canvas.clientHeight < gl.canvas.clientWidth) {
      /** @type {number} */
      total = 768;
      /** @type {number} */
      width = 300;
      if (gl.canvas.clientWidth > 1536) {
        /** @type {number} */
        width = 500;
        /** @type {number} */
        total = 1024;
      }
    } else {
      if (gl.canvas.clientHeight > 600) {
        /** @type {number} */
        width = 300;
        /** @type {number} */
        total = 1024;
      }
      if (gl.canvas.clientHeight >= 700) {
        /** @type {number} */
        width = 400;
        /** @type {number} */
        total = 1024;
      }
    }
    let b = [width / gl.canvas.clientWidth, width / gl.canvas.clientHeight];
    let a = [0, 1, 2].map(() => {
      return twgl.createFramebufferInfo(gl, void 0, 32, 32);
    });
    let vec = [0, 1, 2].map(() => {
      return twgl.createFramebufferInfo(gl, void 0, 32, 32);
    });
    let mat = [0, 1, 2].map(() => {
      return twgl.createFramebufferInfo(gl, void 0, 32, 32);
    });
    let obj = [0, 1].map(() => {
      return twgl.createFramebufferInfo(gl, void 0, total, total);
    });
    let res = [0, 1].map(() => {
      return twgl.createFramebufferInfo(gl, void 0, total, total);
    });
    let styles = [0, 1].map(() => {
      return twgl.createFramebufferInfo(gl, void 0, total, total);
    });
    const bufferInfo = twgl.createBufferInfoFromArrays(gl, {
      a_position : {
        data : [1, 1, 1, -1, -1, -1, -1, 1],
        numComponents : 2
      }
    });
    const listShared = [];
    for (let i = 0; i < 32; i++) {
      for (let t = 0; t < 32; t++) {
        listShared.push((i + .5) / 32);
        listShared.push((t + .5) / 32);
      }
    }
    const _results = [];
    for (let i = 0; i < total; i++) {
      for (let index = 0; index < total; index++) {
        _results.push((i + .5) / total);
        _results.push((index + .5) / total);
      }
    }
    const mode = twgl.createBufferInfoFromArrays(gl, {
      a_texcoord : {
        data : listShared,
        numComponents : 2
      }
    });
    const drawObjects = twgl.createBufferInfoFromArrays(gl, {
      a_texcoord : {
        data : _results,
        numComponents : 2
      }
    });
    [0, 1, 2].forEach((row) => {
      [a, vec].forEach((table) => {
        gl.useProgram(board_LD[row].program);
        twgl.setBuffersAndAttributes(gl, board_LD[row], bufferInfo);
        twgl.bindFramebufferInfo(gl, table[row]);
        twgl.drawBufferInfo(gl, bufferInfo, gl.TRIANGLE_FAN);
      });
    });
    [0, 1].forEach((row) => {
      [obj, res].forEach((table) => {
        gl.useProgram(obj_two[row].program);
        twgl.setBuffersAndAttributes(gl, obj_two[row], bufferInfo);
        twgl.setUniforms(obj_two[row], {
          logo_center : [.5, .5],
          logo_size : b
        });
        twgl.bindFramebufferInfo(gl, table[row]);
        twgl.drawBufferInfo(gl, bufferInfo, gl.TRIANGLE_FAN);
      });
    });
    let delta;
    let value;
    let scaledMapWidth;
    let _lastTime = 0;
    let M = 0;
    let O = 0;
    let W = 1;
    let y = 0;
    let IEADD = 0;
    let timeInfo = 0;
    !function render(height) {
      var d;
      /** @type {number} */
      d = height / 100;
      twgl.resizeCanvasToDisplaySize(gl.canvas, window.devicePixelRatio || 1);
      gl.viewport(0, 0, gl.canvas.clientWidth, gl.canvas.clientHeight);
      /** @type {!Array} */
      b = [width / gl.canvas.width, width / gl.canvas.height];
      /** @type {number} */
      scaledMapWidth = mapWidth / gl.canvas.width;
      /** @type {number} */
      delta = d - _lastTime;
      /** @type {number} */
      _lastTime = d;
      if (y >= 0 && (y = y - delta / 4) <= 0) {
        IEADD = timeInfo;
      }
      [0, 1, 2].forEach((i) => {
        gl.useProgram(answers[i].program);
        twgl.setBuffersAndAttributes(gl, answers[i], bufferInfo);
        twgl.setUniforms(answers[i], {
          u_prev : a.map((aArgs) => {
            return aArgs.attachments[0];
          }),
          u_curr : vec.map((aArgs) => {
            return aArgs.attachments[0];
          }),
          mouse_pos : k,
          mouse_leaved : W,
          dt : delta
        });
        twgl.bindFramebufferInfo(gl, mat[i]);
        twgl.drawBufferInfo(gl, bufferInfo, gl.TRIANGLE_FAN);
      });
      [0, 1].forEach((row) => {
        gl.useProgram(tmpboard[row].program);
        twgl.setBuffersAndAttributes(gl, tmpboard[row], bufferInfo);
        twgl.setUniforms(tmpboard[row], {
          u_prev : obj.map((aArgs) => {
            return aArgs.attachments[0];
          }),
          u_curr : res.map((aArgs) => {
            return aArgs.attachments[0];
          }),
          logo_center : [.5 - .05 * (k[0] - .5 + .3 * Math.sin(3 * d / 50)), .5 - .05 * (k[1] - .5 + .3 * Math.sin(2 * d / 50))],
          logo_size : b.map((canCreateDiscussions) => {
            return canCreateDiscussions * (1 + .05 * Math.sin(d / 50));
          }),
          mouse_pos : k,
          mouse_radius : scaledMapWidth,
          mouse_boiler : M,
          mouse_gravity : O,
          explosion_timer : y,
          dt : delta
        });
        twgl.bindFramebufferInfo(gl, styles[row]);
        twgl.drawBufferInfo(gl, bufferInfo, gl.TRIANGLE_FAN);
      });
      gl.useProgram(programInfo.program);
      twgl.setBuffersAndAttributes(gl, programInfo, mode);
      twgl.setUniforms(programInfo, {
        u_curr : vec.map((aArgs) => {
          return aArgs.attachments[0];
        }),
        second_draw : 0
      });
      twgl.bindFramebufferInfo(gl, null);
      twgl.drawBufferInfo(gl, mode, gl.POINTS);
      gl.useProgram(program.program);
      twgl.setBuffersAndAttributes(gl, program, drawObjects);
      twgl.setUniforms(program, {
        u_logotex : [w[IEADD], w[timeInfo]],
        u_curr : res.map((aArgs) => {
          return aArgs.attachments[0];
        }),
        point_size : 3 * Math.max(b[0] * gl.canvas.clientWidth / total, b[1] * gl.canvas.clientHeight / total, .8),
        explosion_timer : y
      });
      twgl.bindFramebufferInfo(gl, null);
      twgl.drawBufferInfo(gl, drawObjects, gl.POINTS);
      [0, 1, 2].forEach((i) => {
        value = a[i];
        a[i] = vec[i];
        vec[i] = mat[i];
        mat[i] = value;
      });
      [0, 1].forEach((name) => {
        value = obj[name];
        obj[name] = res[name];
        res[name] = styles[name];
        styles[name] = value;
      });
      requestAnimationFrame(render);
    }(0);
    canvas.addEventListener("mousemove", (resize) => {
      /** @type {number} */
      W = 0;
      /** @type {number} */
      k[0] = resize.offsetX / gl.canvas.clientWidth;
      /** @type {number} */
      k[1] = 1 - resize.offsetY / gl.canvas.clientHeight;
    });
    canvas.addEventListener("mouseleave", () => {
      /** @type {number} */
      W = 1;
      /** @type {number} */
      M = 0;
      /** @type {number} */
      O = 0;
      /** @type {number} */
      k[0] = .5;
      /** @type {number} */
      k[1] = .5;
    });
    canvas.addEventListener("mousedown", (event) => {
      if (2 == event.button) {
        /** @type {number} */
        O = 1;
      } else {
        /** @type {number} */
        M = 1;
      }
      /** @type {number} */
      k[0] = event.offsetX / gl.canvas.clientWidth;
      /** @type {number} */
      k[1] = 1 - event.offsetY / gl.canvas.clientHeight;
    });
    canvas.addEventListener("mouseup", (event) => {
      /** @type {number} */
      M = 0;
      /** @type {number} */
      O = 0;
      if (2 != event.button) {
        //gotoNewOfflinePage();
      }
    });
    let currentColumn = 0;
    canvas.addEventListener("wheel", (canCreateDiscussions) => {
      if (currentColumn < 4) {
        //gotoNewOfflinePage();
      }
      if (2 == currentColumn) {
        setTimeout(function() {
          if (currentColumn < 10) {
            /** @type {number} */
            currentColumn = 0;
          }
        }, 500);
        setTimeout(function() {
          /** @type {number} */
          currentColumn = 0;
        }, 2E3);
      }
      currentColumn = currentColumn + 1;
    });
    canvas.addEventListener("touchstart", (canCreateDiscussions) => {
      /** @type {number} */
      M = 1;
    });
    window.addEventListener("touchend", (canCreateDiscussions) => {
      /** @type {number} */
      M = 0;
    });
    canvas.addEventListener("contextmenu", (event) => {
      return event.preventDefault();
    });
    canvas.addEventListener("webglcontextlost", () => {
      return alert("WebGL context lost!");
    });
    
};

