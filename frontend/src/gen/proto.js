/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from 'protobufjs/minimal';

// Common aliases
const $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {});

export const models = ($root.models = (() => {
  /**
   * Namespace models.
   * @exports models
   * @namespace
   */
  const models = {};

  models.HistogramBin = (function() {
    /**
     * Properties of a HistogramBin.
     * @memberof models
     * @interface IHistogramBin
     * @property {number|null} [count] HistogramBin count
     * @property {number|null} [start] HistogramBin start
     * @property {number|null} [length] HistogramBin length
     */

    /**
     * Constructs a new HistogramBin.
     * @memberof models
     * @classdesc Represents a HistogramBin.
     * @implements IHistogramBin
     * @constructor
     * @param {models.IHistogramBin=} [properties] Properties to set
     */
    function HistogramBin(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * HistogramBin count.
     * @member {number} count
     * @memberof models.HistogramBin
     * @instance
     */
    HistogramBin.prototype.count = 0;

    /**
     * HistogramBin start.
     * @member {number} start
     * @memberof models.HistogramBin
     * @instance
     */
    HistogramBin.prototype.start = 0;

    /**
     * HistogramBin length.
     * @member {number} length
     * @memberof models.HistogramBin
     * @instance
     */
    HistogramBin.prototype.length = 0;

    /**
     * Creates a new HistogramBin instance using the specified properties.
     * @function create
     * @memberof models.HistogramBin
     * @static
     * @param {models.IHistogramBin=} [properties] Properties to set
     * @returns {models.HistogramBin} HistogramBin instance
     */
    HistogramBin.create = function create(properties) {
      return new HistogramBin(properties);
    };

    /**
     * Encodes the specified HistogramBin message. Does not implicitly {@link models.HistogramBin.verify|verify} messages.
     * @function encode
     * @memberof models.HistogramBin
     * @static
     * @param {models.IHistogramBin} message HistogramBin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HistogramBin.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.count != null && message.hasOwnProperty('count'))
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.count);
      if (message.start != null && message.hasOwnProperty('start'))
        writer.uint32(/* id 2, wireType 1 =*/ 17).double(message.start);
      if (message.length != null && message.hasOwnProperty('length'))
        writer.uint32(/* id 3, wireType 1 =*/ 25).double(message.length);
      return writer;
    };

    /**
     * Encodes the specified HistogramBin message, length delimited. Does not implicitly {@link models.HistogramBin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof models.HistogramBin
     * @static
     * @param {models.IHistogramBin} message HistogramBin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HistogramBin.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HistogramBin message from the specified reader or buffer.
     * @function decode
     * @memberof models.HistogramBin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {models.HistogramBin} HistogramBin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HistogramBin.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.models.HistogramBin();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.count = reader.int32();
            break;
          case 2:
            message.start = reader.double();
            break;
          case 3:
            message.length = reader.double();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a HistogramBin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof models.HistogramBin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {models.HistogramBin} HistogramBin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HistogramBin.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HistogramBin message.
     * @function verify
     * @memberof models.HistogramBin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HistogramBin.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.count != null && message.hasOwnProperty('count'))
        if (!$util.isInteger(message.count)) return 'count: integer expected';
      if (message.start != null && message.hasOwnProperty('start'))
        if (typeof message.start !== 'number') return 'start: number expected';
      if (message.length != null && message.hasOwnProperty('length'))
        if (typeof message.length !== 'number')
          return 'length: number expected';
      return null;
    };

    /**
     * Creates a HistogramBin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof models.HistogramBin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {models.HistogramBin} HistogramBin
     */
    HistogramBin.fromObject = function fromObject(object) {
      if (object instanceof $root.models.HistogramBin) return object;
      let message = new $root.models.HistogramBin();
      if (object.count != null) message.count = object.count | 0;
      if (object.start != null) message.start = Number(object.start);
      if (object.length != null) message.length = Number(object.length);
      return message;
    };

    /**
     * Creates a plain object from a HistogramBin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof models.HistogramBin
     * @static
     * @param {models.HistogramBin} message HistogramBin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HistogramBin.toObject = function toObject(message, options) {
      if (!options) options = {};
      let object = {};
      if (options.defaults) {
        object.count = 0;
        object.start = 0;
        object.length = 0;
      }
      if (message.count != null && message.hasOwnProperty('count'))
        object.count = message.count;
      if (message.start != null && message.hasOwnProperty('start'))
        object.start =
          options.json && !isFinite(message.start)
            ? String(message.start)
            : message.start;
      if (message.length != null && message.hasOwnProperty('length'))
        object.length =
          options.json && !isFinite(message.length)
            ? String(message.length)
            : message.length;
      return object;
    };

    /**
     * Converts this HistogramBin to JSON.
     * @function toJSON
     * @memberof models.HistogramBin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HistogramBin.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return HistogramBin;
  })();

  models.HistogramGauge = (function() {
    /**
     * Properties of a HistogramGauge.
     * @memberof models
     * @interface IHistogramGauge
     * @property {string|null} [metric] HistogramGauge metric
     * @property {string|null} [host] HistogramGauge host
     * @property {Array.<models.IHistogramBin>|null} [bins] HistogramGauge bins
     */

    /**
     * Constructs a new HistogramGauge.
     * @memberof models
     * @classdesc Represents a HistogramGauge.
     * @implements IHistogramGauge
     * @constructor
     * @param {models.IHistogramGauge=} [properties] Properties to set
     */
    function HistogramGauge(properties) {
      this.bins = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * HistogramGauge metric.
     * @member {string} metric
     * @memberof models.HistogramGauge
     * @instance
     */
    HistogramGauge.prototype.metric = '';

    /**
     * HistogramGauge host.
     * @member {string} host
     * @memberof models.HistogramGauge
     * @instance
     */
    HistogramGauge.prototype.host = '';

    /**
     * HistogramGauge bins.
     * @member {Array.<models.IHistogramBin>} bins
     * @memberof models.HistogramGauge
     * @instance
     */
    HistogramGauge.prototype.bins = $util.emptyArray;

    /**
     * Creates a new HistogramGauge instance using the specified properties.
     * @function create
     * @memberof models.HistogramGauge
     * @static
     * @param {models.IHistogramGauge=} [properties] Properties to set
     * @returns {models.HistogramGauge} HistogramGauge instance
     */
    HistogramGauge.create = function create(properties) {
      return new HistogramGauge(properties);
    };

    /**
     * Encodes the specified HistogramGauge message. Does not implicitly {@link models.HistogramGauge.verify|verify} messages.
     * @function encode
     * @memberof models.HistogramGauge
     * @static
     * @param {models.IHistogramGauge} message HistogramGauge message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HistogramGauge.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.metric != null && message.hasOwnProperty('metric'))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.metric);
      if (message.host != null && message.hasOwnProperty('host'))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.host);
      if (message.bins != null && message.bins.length)
        for (let i = 0; i < message.bins.length; ++i)
          $root.models.HistogramBin.encode(
            message.bins[i],
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
          ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified HistogramGauge message, length delimited. Does not implicitly {@link models.HistogramGauge.verify|verify} messages.
     * @function encodeDelimited
     * @memberof models.HistogramGauge
     * @static
     * @param {models.IHistogramGauge} message HistogramGauge message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HistogramGauge.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HistogramGauge message from the specified reader or buffer.
     * @function decode
     * @memberof models.HistogramGauge
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {models.HistogramGauge} HistogramGauge
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HistogramGauge.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.models.HistogramGauge();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.metric = reader.string();
            break;
          case 2:
            message.host = reader.string();
            break;
          case 3:
            if (!(message.bins && message.bins.length)) message.bins = [];
            message.bins.push(
              $root.models.HistogramBin.decode(reader, reader.uint32())
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a HistogramGauge message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof models.HistogramGauge
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {models.HistogramGauge} HistogramGauge
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HistogramGauge.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HistogramGauge message.
     * @function verify
     * @memberof models.HistogramGauge
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HistogramGauge.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.metric != null && message.hasOwnProperty('metric'))
        if (!$util.isString(message.metric)) return 'metric: string expected';
      if (message.host != null && message.hasOwnProperty('host'))
        if (!$util.isString(message.host)) return 'host: string expected';
      if (message.bins != null && message.hasOwnProperty('bins')) {
        if (!Array.isArray(message.bins)) return 'bins: array expected';
        for (let i = 0; i < message.bins.length; ++i) {
          let error = $root.models.HistogramBin.verify(message.bins[i]);
          if (error) return 'bins.' + error;
        }
      }
      return null;
    };

    /**
     * Creates a HistogramGauge message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof models.HistogramGauge
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {models.HistogramGauge} HistogramGauge
     */
    HistogramGauge.fromObject = function fromObject(object) {
      if (object instanceof $root.models.HistogramGauge) return object;
      let message = new $root.models.HistogramGauge();
      if (object.metric != null) message.metric = String(object.metric);
      if (object.host != null) message.host = String(object.host);
      if (object.bins) {
        if (!Array.isArray(object.bins))
          throw TypeError('.models.HistogramGauge.bins: array expected');
        message.bins = [];
        for (let i = 0; i < object.bins.length; ++i) {
          if (typeof object.bins[i] !== 'object')
            throw TypeError('.models.HistogramGauge.bins: object expected');
          message.bins[i] = $root.models.HistogramBin.fromObject(
            object.bins[i]
          );
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a HistogramGauge message. Also converts values to other types if specified.
     * @function toObject
     * @memberof models.HistogramGauge
     * @static
     * @param {models.HistogramGauge} message HistogramGauge
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HistogramGauge.toObject = function toObject(message, options) {
      if (!options) options = {};
      let object = {};
      if (options.arrays || options.defaults) object.bins = [];
      if (options.defaults) {
        object.metric = '';
        object.host = '';
      }
      if (message.metric != null && message.hasOwnProperty('metric'))
        object.metric = message.metric;
      if (message.host != null && message.hasOwnProperty('host'))
        object.host = message.host;
      if (message.bins && message.bins.length) {
        object.bins = [];
        for (let j = 0; j < message.bins.length; ++j)
          object.bins[j] = $root.models.HistogramBin.toObject(
            message.bins[j],
            options
          );
      }
      return object;
    };

    /**
     * Converts this HistogramGauge to JSON.
     * @function toJSON
     * @memberof models.HistogramGauge
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HistogramGauge.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return HistogramGauge;
  })();

  models.Histogram = (function() {
    /**
     * Properties of a Histogram.
     * @memberof models
     * @interface IHistogram
     * @property {string|null} [metric] Histogram metric
     * @property {string|null} [host] Histogram host
     * @property {Array.<models.IHistogramBin>|null} [bins] Histogram bins
     * @property {number|Long|null} [date] Histogram date
     */

    /**
     * Constructs a new Histogram.
     * @memberof models
     * @classdesc Represents a Histogram.
     * @implements IHistogram
     * @constructor
     * @param {models.IHistogram=} [properties] Properties to set
     */
    function Histogram(properties) {
      this.bins = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Histogram metric.
     * @member {string} metric
     * @memberof models.Histogram
     * @instance
     */
    Histogram.prototype.metric = '';

    /**
     * Histogram host.
     * @member {string} host
     * @memberof models.Histogram
     * @instance
     */
    Histogram.prototype.host = '';

    /**
     * Histogram bins.
     * @member {Array.<models.IHistogramBin>} bins
     * @memberof models.Histogram
     * @instance
     */
    Histogram.prototype.bins = $util.emptyArray;

    /**
     * Histogram date.
     * @member {number|Long} date
     * @memberof models.Histogram
     * @instance
     */
    Histogram.prototype.date = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new Histogram instance using the specified properties.
     * @function create
     * @memberof models.Histogram
     * @static
     * @param {models.IHistogram=} [properties] Properties to set
     * @returns {models.Histogram} Histogram instance
     */
    Histogram.create = function create(properties) {
      return new Histogram(properties);
    };

    /**
     * Encodes the specified Histogram message. Does not implicitly {@link models.Histogram.verify|verify} messages.
     * @function encode
     * @memberof models.Histogram
     * @static
     * @param {models.IHistogram} message Histogram message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Histogram.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.metric != null && message.hasOwnProperty('metric'))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.metric);
      if (message.host != null && message.hasOwnProperty('host'))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.host);
      if (message.bins != null && message.bins.length)
        for (let i = 0; i < message.bins.length; ++i)
          $root.models.HistogramBin.encode(
            message.bins[i],
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
          ).ldelim();
      if (message.date != null && message.hasOwnProperty('date'))
        writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.date);
      return writer;
    };

    /**
     * Encodes the specified Histogram message, length delimited. Does not implicitly {@link models.Histogram.verify|verify} messages.
     * @function encodeDelimited
     * @memberof models.Histogram
     * @static
     * @param {models.IHistogram} message Histogram message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Histogram.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Histogram message from the specified reader or buffer.
     * @function decode
     * @memberof models.Histogram
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {models.Histogram} Histogram
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Histogram.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.models.Histogram();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.metric = reader.string();
            break;
          case 2:
            message.host = reader.string();
            break;
          case 3:
            if (!(message.bins && message.bins.length)) message.bins = [];
            message.bins.push(
              $root.models.HistogramBin.decode(reader, reader.uint32())
            );
            break;
          case 4:
            message.date = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Histogram message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof models.Histogram
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {models.Histogram} Histogram
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Histogram.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Histogram message.
     * @function verify
     * @memberof models.Histogram
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Histogram.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.metric != null && message.hasOwnProperty('metric'))
        if (!$util.isString(message.metric)) return 'metric: string expected';
      if (message.host != null && message.hasOwnProperty('host'))
        if (!$util.isString(message.host)) return 'host: string expected';
      if (message.bins != null && message.hasOwnProperty('bins')) {
        if (!Array.isArray(message.bins)) return 'bins: array expected';
        for (let i = 0; i < message.bins.length; ++i) {
          let error = $root.models.HistogramBin.verify(message.bins[i]);
          if (error) return 'bins.' + error;
        }
      }
      if (message.date != null && message.hasOwnProperty('date'))
        if (
          !$util.isInteger(message.date) &&
          !(
            message.date &&
            $util.isInteger(message.date.low) &&
            $util.isInteger(message.date.high)
          )
        )
          return 'date: integer|Long expected';
      return null;
    };

    /**
     * Creates a Histogram message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof models.Histogram
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {models.Histogram} Histogram
     */
    Histogram.fromObject = function fromObject(object) {
      if (object instanceof $root.models.Histogram) return object;
      let message = new $root.models.Histogram();
      if (object.metric != null) message.metric = String(object.metric);
      if (object.host != null) message.host = String(object.host);
      if (object.bins) {
        if (!Array.isArray(object.bins))
          throw TypeError('.models.Histogram.bins: array expected');
        message.bins = [];
        for (let i = 0; i < object.bins.length; ++i) {
          if (typeof object.bins[i] !== 'object')
            throw TypeError('.models.Histogram.bins: object expected');
          message.bins[i] = $root.models.HistogramBin.fromObject(
            object.bins[i]
          );
        }
      }
      if (object.date != null)
        if ($util.Long)
          (message.date = $util.Long.fromValue(object.date)).unsigned = false;
        else if (typeof object.date === 'string')
          message.date = parseInt(object.date, 10);
        else if (typeof object.date === 'number') message.date = object.date;
        else if (typeof object.date === 'object')
          message.date = new $util.LongBits(
            object.date.low >>> 0,
            object.date.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a Histogram message. Also converts values to other types if specified.
     * @function toObject
     * @memberof models.Histogram
     * @static
     * @param {models.Histogram} message Histogram
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Histogram.toObject = function toObject(message, options) {
      if (!options) options = {};
      let object = {};
      if (options.arrays || options.defaults) object.bins = [];
      if (options.defaults) {
        object.metric = '';
        object.host = '';
        if ($util.Long) {
          let long = new $util.Long(0, 0, false);
          object.date =
            options.longs === String
              ? long.toString()
              : options.longs === Number
                ? long.toNumber()
                : long;
        } else object.date = options.longs === String ? '0' : 0;
      }
      if (message.metric != null && message.hasOwnProperty('metric'))
        object.metric = message.metric;
      if (message.host != null && message.hasOwnProperty('host'))
        object.host = message.host;
      if (message.bins && message.bins.length) {
        object.bins = [];
        for (let j = 0; j < message.bins.length; ++j)
          object.bins[j] = $root.models.HistogramBin.toObject(
            message.bins[j],
            options
          );
      }
      if (message.date != null && message.hasOwnProperty('date'))
        if (typeof message.date === 'number')
          object.date =
            options.longs === String ? String(message.date) : message.date;
        else
          object.date =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.date)
              : options.longs === Number
                ? new $util.LongBits(
                    message.date.low >>> 0,
                    message.date.high >>> 0
                  ).toNumber()
                : message.date;
      return object;
    };

    /**
     * Converts this Histogram to JSON.
     * @function toJSON
     * @memberof models.Histogram
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Histogram.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Histogram;
  })();

  models.HistogramRender = (function() {
    /**
     * Properties of a HistogramRender.
     * @memberof models
     * @interface IHistogramRender
     * @property {string|null} [metric] HistogramRender metric
     * @property {Array.<models.IHistogram>|null} [histograms] HistogramRender histograms
     */

    /**
     * Constructs a new HistogramRender.
     * @memberof models
     * @classdesc Represents a HistogramRender.
     * @implements IHistogramRender
     * @constructor
     * @param {models.IHistogramRender=} [properties] Properties to set
     */
    function HistogramRender(properties) {
      this.histograms = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * HistogramRender metric.
     * @member {string} metric
     * @memberof models.HistogramRender
     * @instance
     */
    HistogramRender.prototype.metric = '';

    /**
     * HistogramRender histograms.
     * @member {Array.<models.IHistogram>} histograms
     * @memberof models.HistogramRender
     * @instance
     */
    HistogramRender.prototype.histograms = $util.emptyArray;

    /**
     * Creates a new HistogramRender instance using the specified properties.
     * @function create
     * @memberof models.HistogramRender
     * @static
     * @param {models.IHistogramRender=} [properties] Properties to set
     * @returns {models.HistogramRender} HistogramRender instance
     */
    HistogramRender.create = function create(properties) {
      return new HistogramRender(properties);
    };

    /**
     * Encodes the specified HistogramRender message. Does not implicitly {@link models.HistogramRender.verify|verify} messages.
     * @function encode
     * @memberof models.HistogramRender
     * @static
     * @param {models.IHistogramRender} message HistogramRender message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HistogramRender.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.metric != null && message.hasOwnProperty('metric'))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.metric);
      if (message.histograms != null && message.histograms.length)
        for (let i = 0; i < message.histograms.length; ++i)
          $root.models.Histogram.encode(
            message.histograms[i],
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
          ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified HistogramRender message, length delimited. Does not implicitly {@link models.HistogramRender.verify|verify} messages.
     * @function encodeDelimited
     * @memberof models.HistogramRender
     * @static
     * @param {models.IHistogramRender} message HistogramRender message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HistogramRender.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HistogramRender message from the specified reader or buffer.
     * @function decode
     * @memberof models.HistogramRender
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {models.HistogramRender} HistogramRender
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HistogramRender.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.models.HistogramRender();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.metric = reader.string();
            break;
          case 2:
            if (!(message.histograms && message.histograms.length))
              message.histograms = [];
            message.histograms.push(
              $root.models.Histogram.decode(reader, reader.uint32())
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a HistogramRender message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof models.HistogramRender
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {models.HistogramRender} HistogramRender
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HistogramRender.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HistogramRender message.
     * @function verify
     * @memberof models.HistogramRender
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HistogramRender.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.metric != null && message.hasOwnProperty('metric'))
        if (!$util.isString(message.metric)) return 'metric: string expected';
      if (message.histograms != null && message.hasOwnProperty('histograms')) {
        if (!Array.isArray(message.histograms))
          return 'histograms: array expected';
        for (let i = 0; i < message.histograms.length; ++i) {
          let error = $root.models.Histogram.verify(message.histograms[i]);
          if (error) return 'histograms.' + error;
        }
      }
      return null;
    };

    /**
     * Creates a HistogramRender message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof models.HistogramRender
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {models.HistogramRender} HistogramRender
     */
    HistogramRender.fromObject = function fromObject(object) {
      if (object instanceof $root.models.HistogramRender) return object;
      let message = new $root.models.HistogramRender();
      if (object.metric != null) message.metric = String(object.metric);
      if (object.histograms) {
        if (!Array.isArray(object.histograms))
          throw TypeError('.models.HistogramRender.histograms: array expected');
        message.histograms = [];
        for (let i = 0; i < object.histograms.length; ++i) {
          if (typeof object.histograms[i] !== 'object')
            throw TypeError(
              '.models.HistogramRender.histograms: object expected'
            );
          message.histograms[i] = $root.models.Histogram.fromObject(
            object.histograms[i]
          );
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a HistogramRender message. Also converts values to other types if specified.
     * @function toObject
     * @memberof models.HistogramRender
     * @static
     * @param {models.HistogramRender} message HistogramRender
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HistogramRender.toObject = function toObject(message, options) {
      if (!options) options = {};
      let object = {};
      if (options.arrays || options.defaults) object.histograms = [];
      if (options.defaults) object.metric = '';
      if (message.metric != null && message.hasOwnProperty('metric'))
        object.metric = message.metric;
      if (message.histograms && message.histograms.length) {
        object.histograms = [];
        for (let j = 0; j < message.histograms.length; ++j)
          object.histograms[j] = $root.models.Histogram.toObject(
            message.histograms[j],
            options
          );
      }
      return object;
    };

    /**
     * Converts this HistogramRender to JSON.
     * @function toJSON
     * @memberof models.HistogramRender
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HistogramRender.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return HistogramRender;
  })();

  return models;
})());

export { $root as default };
