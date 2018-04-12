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

  models.Histogram = (function() {
    /**
     * Properties of a Histogram.
     * @memberof models
     * @interface IHistogram
     * @property {string|null} [name] Histogram name
     * @property {Array.<models.IHistogramBin>|null} [bins] Histogram bins
     * @property {google.protobuf.ITimestamp|null} [measurementTime] Histogram measurementTime
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
     * Histogram name.
     * @member {string} name
     * @memberof models.Histogram
     * @instance
     */
    Histogram.prototype.name = '';

    /**
     * Histogram bins.
     * @member {Array.<models.IHistogramBin>} bins
     * @memberof models.Histogram
     * @instance
     */
    Histogram.prototype.bins = $util.emptyArray;

    /**
     * Histogram measurementTime.
     * @member {google.protobuf.ITimestamp|null|undefined} measurementTime
     * @memberof models.Histogram
     * @instance
     */
    Histogram.prototype.measurementTime = null;

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
      if (message.name != null && message.hasOwnProperty('name'))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
      if (message.bins != null && message.bins.length)
        for (let i = 0; i < message.bins.length; ++i)
          $root.models.HistogramBin.encode(
            message.bins[i],
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
          ).ldelim();
      if (
        message.measurementTime != null &&
        message.hasOwnProperty('measurementTime')
      )
        $root.google.protobuf.Timestamp.encode(
          message.measurementTime,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
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
            message.name = reader.string();
            break;
          case 2:
            if (!(message.bins && message.bins.length)) message.bins = [];
            message.bins.push(
              $root.models.HistogramBin.decode(reader, reader.uint32())
            );
            break;
          case 3:
            message.measurementTime = $root.google.protobuf.Timestamp.decode(
              reader,
              reader.uint32()
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
      if (message.name != null && message.hasOwnProperty('name'))
        if (!$util.isString(message.name)) return 'name: string expected';
      if (message.bins != null && message.hasOwnProperty('bins')) {
        if (!Array.isArray(message.bins)) return 'bins: array expected';
        for (let i = 0; i < message.bins.length; ++i) {
          let error = $root.models.HistogramBin.verify(message.bins[i]);
          if (error) return 'bins.' + error;
        }
      }
      if (
        message.measurementTime != null &&
        message.hasOwnProperty('measurementTime')
      ) {
        let error = $root.google.protobuf.Timestamp.verify(
          message.measurementTime
        );
        if (error) return 'measurementTime.' + error;
      }
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
      if (object.name != null) message.name = String(object.name);
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
      if (object.measurementTime != null) {
        if (typeof object.measurementTime !== 'object')
          throw TypeError('.models.Histogram.measurementTime: object expected');
        message.measurementTime = $root.google.protobuf.Timestamp.fromObject(
          object.measurementTime
        );
      }
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
        object.name = '';
        object.measurementTime = null;
      }
      if (message.name != null && message.hasOwnProperty('name'))
        object.name = message.name;
      if (message.bins && message.bins.length) {
        object.bins = [];
        for (let j = 0; j < message.bins.length; ++j)
          object.bins[j] = $root.models.HistogramBin.toObject(
            message.bins[j],
            options
          );
      }
      if (
        message.measurementTime != null &&
        message.hasOwnProperty('measurementTime')
      )
        object.measurementTime = $root.google.protobuf.Timestamp.toObject(
          message.measurementTime,
          options
        );
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

  return models;
})());

export const google = ($root.google = (() => {
  /**
   * Namespace google.
   * @exports google
   * @namespace
   */
  const google = {};

  google.protobuf = (function() {
    /**
     * Namespace protobuf.
     * @memberof google
     * @namespace
     */
    const protobuf = {};

    protobuf.Timestamp = (function() {
      /**
       * Properties of a Timestamp.
       * @memberof google.protobuf
       * @interface ITimestamp
       * @property {number|Long|null} [seconds] Timestamp seconds
       * @property {number|null} [nanos] Timestamp nanos
       */

      /**
       * Constructs a new Timestamp.
       * @memberof google.protobuf
       * @classdesc Represents a Timestamp.
       * @implements ITimestamp
       * @constructor
       * @param {google.protobuf.ITimestamp=} [properties] Properties to set
       */
      function Timestamp(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Timestamp seconds.
       * @member {number|Long} seconds
       * @memberof google.protobuf.Timestamp
       * @instance
       */
      Timestamp.prototype.seconds = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;

      /**
       * Timestamp nanos.
       * @member {number} nanos
       * @memberof google.protobuf.Timestamp
       * @instance
       */
      Timestamp.prototype.nanos = 0;

      /**
       * Creates a new Timestamp instance using the specified properties.
       * @function create
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {google.protobuf.ITimestamp=} [properties] Properties to set
       * @returns {google.protobuf.Timestamp} Timestamp instance
       */
      Timestamp.create = function create(properties) {
        return new Timestamp(properties);
      };

      /**
       * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @function encode
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Timestamp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.seconds != null && message.hasOwnProperty('seconds'))
          writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.seconds);
        if (message.nanos != null && message.hasOwnProperty('nanos'))
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.nanos);
        return writer;
      };

      /**
       * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @function encodeDelimited
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a Timestamp message from the specified reader or buffer.
       * @function decode
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {google.protobuf.Timestamp} Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Timestamp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.google.protobuf.Timestamp();
        while (reader.pos < end) {
          let tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.seconds = reader.int64();
              break;
            case 2:
              message.nanos = reader.int32();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a Timestamp message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {google.protobuf.Timestamp} Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Timestamp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a Timestamp message.
       * @function verify
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Timestamp.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.seconds != null && message.hasOwnProperty('seconds'))
          if (
            !$util.isInteger(message.seconds) &&
            !(
              message.seconds &&
              $util.isInteger(message.seconds.low) &&
              $util.isInteger(message.seconds.high)
            )
          )
            return 'seconds: integer|Long expected';
        if (message.nanos != null && message.hasOwnProperty('nanos'))
          if (!$util.isInteger(message.nanos)) return 'nanos: integer expected';
        return null;
      };

      /**
       * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {google.protobuf.Timestamp} Timestamp
       */
      Timestamp.fromObject = function fromObject(object) {
        if (object instanceof $root.google.protobuf.Timestamp) return object;
        let message = new $root.google.protobuf.Timestamp();
        if (object.seconds != null)
          if ($util.Long)
            (message.seconds = $util.Long.fromValue(
              object.seconds
            )).unsigned = false;
          else if (typeof object.seconds === 'string')
            message.seconds = parseInt(object.seconds, 10);
          else if (typeof object.seconds === 'number')
            message.seconds = object.seconds;
          else if (typeof object.seconds === 'object')
            message.seconds = new $util.LongBits(
              object.seconds.low >>> 0,
              object.seconds.high >>> 0
            ).toNumber();
        if (object.nanos != null) message.nanos = object.nanos | 0;
        return message;
      };

      /**
       * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
       * @function toObject
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {google.protobuf.Timestamp} message Timestamp
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Timestamp.toObject = function toObject(message, options) {
        if (!options) options = {};
        let object = {};
        if (options.defaults) {
          if ($util.Long) {
            let long = new $util.Long(0, 0, false);
            object.seconds =
              options.longs === String
                ? long.toString()
                : options.longs === Number ? long.toNumber() : long;
          } else object.seconds = options.longs === String ? '0' : 0;
          object.nanos = 0;
        }
        if (message.seconds != null && message.hasOwnProperty('seconds'))
          if (typeof message.seconds === 'number')
            object.seconds =
              options.longs === String
                ? String(message.seconds)
                : message.seconds;
          else
            object.seconds =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.seconds)
                : options.longs === Number
                  ? new $util.LongBits(
                      message.seconds.low >>> 0,
                      message.seconds.high >>> 0
                    ).toNumber()
                  : message.seconds;
        if (message.nanos != null && message.hasOwnProperty('nanos'))
          object.nanos = message.nanos;
        return object;
      };

      /**
       * Converts this Timestamp to JSON.
       * @function toJSON
       * @memberof google.protobuf.Timestamp
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Timestamp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Timestamp;
    })();

    return protobuf;
  })();

  return google;
})());

export { $root as default };
