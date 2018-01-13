// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('clojure.string');
goog.require('goog.date.Interval');
goog.require('goog.date');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
cljs_time.core.deprecated = (function cljs_time$core$deprecated(message){
return cljs.core.println.call(null,"DEPRECATION WARNING: ",message);
});
/**
 * **Note:** Equality in goog.date.* (and also with plain
 * javascript dates) is not the same as in Joda/clj-time. Two date
 * objects representing the same instant in time in goog.date.* are not
 * equal.
 * 
 * If you need to test for equality use either `cljs-time.core/=`, or
 * optionally you can require the `cljs-time.extend` namespace which will
 * extend the goog.date.* datatypes, so that clojure.core/= works as
 * expected.
 */
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

/**
 * Interface for various date time functions
 * @interface
 */
cljs_time.core.DateTimeProtocol = function(){};

/**
 * Return the year component of the given date/time.
 */
cljs_time.core.year = (function cljs_time$core$year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.year[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.year["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.year",this$);
}
}
}
});

/**
 * Return the month component of the given date/time.
 */
cljs_time.core.month = (function cljs_time$core$month(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$month$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.month[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.month["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.month",this$);
}
}
}
});

/**
 * Return the day of month component of the given date/time.
 */
cljs_time.core.day = (function cljs_time$core$day(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.day[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.day["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day",this$);
}
}
}
});

/**
 * Return the day of week component of the given date/time. Monday is 1 and Sunday is 7
 */
cljs_time.core.day_of_week = (function cljs_time$core$day_of_week(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day-of-week",this$);
}
}
}
});

/**
 * Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.
 */
cljs_time.core.hour = (function cljs_time$core$hour(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$hour$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.hour[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.hour["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.hour",this$);
}
}
}
});

/**
 * Return the minute of hour component of the given date/time.
 */
cljs_time.core.minute = (function cljs_time$core$minute(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minute$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.minute[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.minute["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minute",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.sec = (function cljs_time$core$sec(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$sec$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.sec[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.sec["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.sec",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.second = (function cljs_time$core$second(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$second$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.second[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.second["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.second",this$);
}
}
}
});

/**
 * Return the millisecond of second component of the given date/time.
 */
cljs_time.core.milli = (function cljs_time$core$milli(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$milli$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.milli[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.milli["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.milli",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly equal to date/time 'that'.
 */
cljs_time.core.equal_QMARK_ = (function cljs_time$core$equal_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2(this$,that);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.equal_QMARK_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$,that);
} else {
var m__27879__auto____$1 = (cljs_time.core.equal_QMARK_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.equal?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly after date/time 'that'.
 */
cljs_time.core.after_QMARK_ = (function cljs_time$core$after_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$,that);
} else {
var m__27879__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.after?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly before date/time 'that'.
 */
cljs_time.core.before_QMARK_ = (function cljs_time$core$before_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$,that);
} else {
var m__27879__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.before?",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).
 */
cljs_time.core.plus_ = (function cljs_time$core$plus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$plus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.plus_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$,period);
} else {
var m__27879__auto____$1 = (cljs_time.core.plus_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.plus-",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).
 */
cljs_time.core.minus_ = (function cljs_time$core$minus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.minus_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$,period);
} else {
var m__27879__auto____$1 = (cljs_time.core.minus_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minus-",this$);
}
}
}
});

/**
 * Returns the first day of the month
 */
cljs_time.core.first_day_of_the_month_ = (function cljs_time$core$first_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.first_day_of_the_month_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.first-day-of-the-month-",this$);
}
}
}
});

/**
 * Returns the last day of the month
 */
cljs_time.core.last_day_of_the_month_ = (function cljs_time$core$last_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.last_day_of_the_month_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.last-day-of-the-month-",this$);
}
}
}
});

/**
 * Returs the number of weeks in the year
 */
cljs_time.core.week_number_of_year = (function cljs_time$core$week_number_of_year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.week_number_of_year[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.week_number_of_year["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.week-number-of-year",this$);
}
}
}
});


/**
 * Interface for in-<time unit> functions
 * @interface
 */
cljs_time.core.InTimeUnitProtocol = function(){};

/**
 * Return the time in milliseconds.
 */
cljs_time.core.in_millis = (function cljs_time$core$in_millis(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.in_millis[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.in_millis["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-millis",this$);
}
}
}
});

/**
 * Return the time in seconds.
 */
cljs_time.core.in_seconds = (function cljs_time$core$in_seconds(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.in_seconds[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-seconds",this$);
}
}
}
});

/**
 * Return the time in minutes.
 */
cljs_time.core.in_minutes = (function cljs_time$core$in_minutes(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.in_minutes[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-minutes",this$);
}
}
}
});

/**
 * Return the time in hours.
 */
cljs_time.core.in_hours = (function cljs_time$core$in_hours(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.in_hours[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.in_hours["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-hours",this$);
}
}
}
});

/**
 * Return the time in days.
 */
cljs_time.core.in_days = (function cljs_time$core$in_days(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.in_days[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.in_days["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-days",this$);
}
}
}
});

/**
 * Return the time in weeks
 */
cljs_time.core.in_weeks = (function cljs_time$core$in_weeks(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.in_weeks[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-weeks",this$);
}
}
}
});

/**
 * Return the time in months
 */
cljs_time.core.in_months = (function cljs_time$core$in_months(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.in_months[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.in_months["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-months",this$);
}
}
}
});

/**
 * Return the time in years
 */
cljs_time.core.in_years = (function cljs_time$core$in_years(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (cljs_time.core.in_years[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (cljs_time.core.in_years["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-years",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27835__auto__,k__27836__auto__){
var self__ = this;
var this__27835__auto____$1 = this;
return this__27835__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27836__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27837__auto__,k41656,else__27838__auto__){
var self__ = this;
var this__27837__auto____$1 = this;
var G__41660 = k41656;
var G__41660__$1 = (((G__41660 instanceof cljs.core.Keyword))?G__41660.fqn:null);
switch (G__41660__$1) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41656,else__27838__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27849__auto__,writer__27850__auto__,opts__27851__auto__){
var self__ = this;
var this__27849__auto____$1 = this;
var pr_pair__27852__auto__ = ((function (this__27849__auto____$1){
return (function (keyval__27853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27850__auto__,cljs.core.pr_writer,""," ","",opts__27851__auto__,keyval__27853__auto__);
});})(this__27849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27850__auto__,pr_pair__27852__auto__,"#cljs-time.core.Interval{",", ","}",opts__27851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41655){
var self__ = this;
var G__41655__$1 = this;
return (new cljs.core.RecordIter((0),G__41655__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27833__auto__){
var self__ = this;
var this__27833__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27830__auto__){
var self__ = this;
var this__27830__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27839__auto__){
var self__ = this;
var this__27839__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27831__auto__){
var self__ = this;
var this__27831__auto____$1 = this;
var h__27649__auto__ = self__.__hash;
if(!((h__27649__auto__ == null))){
return h__27649__auto__;
} else {
var h__27649__auto____$1 = ((function (h__27649__auto__,this__27831__auto____$1){
return (function (coll__27832__auto__){
return (534314193 ^ cljs.core.hash_unordered_coll.call(null,coll__27832__auto__));
});})(h__27649__auto__,this__27831__auto____$1))
.call(null,this__27831__auto____$1);
self__.__hash = h__27649__auto____$1;

return h__27649__auto____$1;
}
});

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41657,other41658){
var self__ = this;
var this41657__$1 = this;
return (!((other41658 == null))) && ((this41657__$1.constructor === other41658.constructor)) && (cljs.core._EQ_.call(null,this41657__$1.start,other41658.start)) && (cljs.core._EQ_.call(null,this41657__$1.end,other41658.end)) && (cljs.core._EQ_.call(null,this41657__$1.__extmap,other41658.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27844__auto__,k__27845__auto__){
var self__ = this;
var this__27844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null), null),k__27845__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27844__auto____$1),self__.__meta),k__27845__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27845__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27842__auto__,k__27843__auto__,G__41655){
var self__ = this;
var this__27842__auto____$1 = this;
var pred__41661 = cljs.core.keyword_identical_QMARK_;
var expr__41662 = k__27843__auto__;
if(cljs.core.truth_(pred__41661.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__41662))){
return (new cljs_time.core.Interval(G__41655,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41661.call(null,new cljs.core.Keyword(null,"end","end",-268185958),expr__41662))){
return (new cljs_time.core.Interval(self__.start,G__41655,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27843__auto__,G__41655),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27847__auto__){
var self__ = this;
var this__27847__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27834__auto__,G__41655){
var self__ = this;
var this__27834__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__41655,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27840__auto__,entry__27841__auto__){
var self__ = this;
var this__27840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27841__auto__)){
return this__27840__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27841__auto__,(0)),cljs.core._nth.call(null,entry__27841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27840__auto____$1,entry__27841__auto__);
}
});

cljs_time.core.Interval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null);
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__27871__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__27871__auto__,writer__27872__auto__){
return cljs.core._write.call(null,writer__27872__auto__,"cljs-time.core/Interval");
});

cljs_time.core.__GT_Interval = (function cljs_time$core$__GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__41659){
return (new cljs_time.core.Interval(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__41659),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__41659),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__41659,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958))),null));
});

/**
 * Returns an Interval representing the span between the two given DateTime.
 *   Note that intervals are closed on the left and open on the right.
 */
cljs_time.core.interval = (function cljs_time$core$interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error("Assert failed: (<= (.getTime start) (.getTime end))"));
}

return cljs_time.core.__GT_Interval.call(null,start,end);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27835__auto__,k__27836__auto__){
var self__ = this;
var this__27835__auto____$1 = this;
return this__27835__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27836__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27837__auto__,k41666,else__27838__auto__){
var self__ = this;
var this__27837__auto____$1 = this;
var G__41670 = k41666;
var G__41670__$1 = (((G__41670 instanceof cljs.core.Keyword))?G__41670.fqn:null);
switch (G__41670__$1) {
case "years":
return self__.years;

break;
case "months":
return self__.months;

break;
case "weeks":
return self__.weeks;

break;
case "days":
return self__.days;

break;
case "hours":
return self__.hours;

break;
case "minutes":
return self__.minutes;

break;
case "seconds":
return self__.seconds;

break;
case "millis":
return self__.millis;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41666,else__27838__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27849__auto__,writer__27850__auto__,opts__27851__auto__){
var self__ = this;
var this__27849__auto____$1 = this;
var pr_pair__27852__auto__ = ((function (this__27849__auto____$1){
return (function (keyval__27853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27850__auto__,cljs.core.pr_writer,""," ","",opts__27851__auto__,keyval__27853__auto__);
});})(this__27849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27850__auto__,pr_pair__27852__auto__,"#cljs-time.core.Period{",", ","}",opts__27851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41665){
var self__ = this;
var G__41665__$1 = this;
return (new cljs.core.RecordIter((0),G__41665__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27833__auto__){
var self__ = this;
var this__27833__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27830__auto__){
var self__ = this;
var this__27830__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27839__auto__){
var self__ = this;
var this__27839__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27831__auto__){
var self__ = this;
var this__27831__auto____$1 = this;
var h__27649__auto__ = self__.__hash;
if(!((h__27649__auto__ == null))){
return h__27649__auto__;
} else {
var h__27649__auto____$1 = ((function (h__27649__auto__,this__27831__auto____$1){
return (function (coll__27832__auto__){
return (1393857022 ^ cljs.core.hash_unordered_coll.call(null,coll__27832__auto__));
});})(h__27649__auto__,this__27831__auto____$1))
.call(null,this__27831__auto____$1);
self__.__hash = h__27649__auto____$1;

return h__27649__auto____$1;
}
});

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41667,other41668){
var self__ = this;
var this41667__$1 = this;
return (!((other41668 == null))) && ((this41667__$1.constructor === other41668.constructor)) && (cljs.core._EQ_.call(null,this41667__$1.years,other41668.years)) && (cljs.core._EQ_.call(null,this41667__$1.months,other41668.months)) && (cljs.core._EQ_.call(null,this41667__$1.weeks,other41668.weeks)) && (cljs.core._EQ_.call(null,this41667__$1.days,other41668.days)) && (cljs.core._EQ_.call(null,this41667__$1.hours,other41668.hours)) && (cljs.core._EQ_.call(null,this41667__$1.minutes,other41668.minutes)) && (cljs.core._EQ_.call(null,this41667__$1.seconds,other41668.seconds)) && (cljs.core._EQ_.call(null,this41667__$1.millis,other41668.millis)) && (cljs.core._EQ_.call(null,this41667__$1.__extmap,other41668.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27844__auto__,k__27845__auto__){
var self__ = this;
var this__27844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null,new cljs.core.Keyword(null,"millis","millis",-1338288387),null], null), null),k__27845__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27844__auto____$1),self__.__meta),k__27845__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27845__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27842__auto__,k__27843__auto__,G__41665){
var self__ = this;
var this__27842__auto____$1 = this;
var pred__41671 = cljs.core.keyword_identical_QMARK_;
var expr__41672 = k__27843__auto__;
if(cljs.core.truth_(pred__41671.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),expr__41672))){
return (new cljs_time.core.Period(G__41665,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41671.call(null,new cljs.core.Keyword(null,"months","months",-45571637),expr__41672))){
return (new cljs_time.core.Period(self__.years,G__41665,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41671.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),expr__41672))){
return (new cljs_time.core.Period(self__.years,self__.months,G__41665,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41671.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),expr__41672))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__41665,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41671.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),expr__41672))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__41665,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41671.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),expr__41672))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__41665,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41671.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),expr__41672))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__41665,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41671.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),expr__41672))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__41665,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27843__auto__,G__41665),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27847__auto__){
var self__ = this;
var this__27847__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27834__auto__,G__41665){
var self__ = this;
var this__27834__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__41665,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27840__auto__,entry__27841__auto__){
var self__ = this;
var this__27840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27841__auto__)){
return this__27840__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27841__auto__,(0)),cljs.core._nth.call(null,entry__27841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27840__auto____$1,entry__27841__auto__);
}
});

cljs_time.core.Period.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"years","years",341951838,null),new cljs.core.Symbol(null,"months","months",1594959890,null),new cljs.core.Symbol(null,"weeks","weeks",-809839644,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"hours","hours",1698912382,null),new cljs.core.Symbol(null,"minutes","minutes",-1335269375,null),new cljs.core.Symbol(null,"seconds","seconds",1195265333,null),new cljs.core.Symbol(null,"millis","millis",302243140,null)], null);
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__27871__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__27871__auto__,writer__27872__auto__){
return cljs.core._write.call(null,writer__27872__auto__,"cljs-time.core/Period");
});

cljs_time.core.__GT_Period = (function cljs_time$core$__GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__41669){
return (new cljs_time.core.Period(new cljs.core.Keyword(null,"years","years",-1298579689).cljs$core$IFn$_invoke$arity$1(G__41669),new cljs.core.Keyword(null,"months","months",-45571637).cljs$core$IFn$_invoke$arity$1(G__41669),new cljs.core.Keyword(null,"weeks","weeks",1844596125).cljs$core$IFn$_invoke$arity$1(G__41669),new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(G__41669),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(G__41669),new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(G__41669),new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(G__41669),new cljs.core.Keyword(null,"millis","millis",-1338288387).cljs$core$IFn$_invoke$arity$1(G__41669),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__41669,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387))),null));
});

cljs_time.core.period = (function cljs_time$core$period(var_args){
var G__41679 = arguments.length;
switch (G__41679) {
case 2:
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___41681 = arguments.length;
var i__28365__auto___41682 = (0);
while(true){
if((i__28365__auto___41682 < len__28364__auto___41681)){
args_arr__28383__auto__.push((arguments[i__28365__auto___41682]));

var G__41683 = (i__28365__auto___41682 + (1));
i__28365__auto___41682 = G__41683;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((2)),(0),null));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28384__auto__);

}
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([period,value]));
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.call(null,cljs.core.assoc,cljs_time.core.period.call(null,p1,v1),kvs);
});

cljs_time.core.period.cljs$lang$applyTo = (function (seq41676){
var G__41677 = cljs.core.first.call(null,seq41676);
var seq41676__$1 = cljs.core.next.call(null,seq41676);
var G__41678 = cljs.core.first.call(null,seq41676__$1);
var seq41676__$2 = cljs.core.next.call(null,seq41676__$1);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(G__41677,G__41678,seq41676__$2);
});

cljs_time.core.period.cljs$lang$maxFixedArity = (2);

cljs_time.core.period_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"millis","millis",-1338288387),(function (date,op,value){
var ms = op.call(null,date.getTime(),value);
var G__41684 = date;
G__41684.setTime(ms);

return G__41684;
}),new cljs.core.Keyword(null,"weeks","weeks",1844596125),(function (date,op,value){
var days = op.call(null,(0),(value * (7)));
var G__41685 = date;
G__41685.add((new goog.date.Interval(goog.date.Interval.DAYS,days)));

return G__41685;
})], null);
cljs_time.core.periods = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),goog.date.Interval.SECONDS,new cljs.core.Keyword(null,"minutes","minutes",1319166394),goog.date.Interval.MINUTES,new cljs.core.Keyword(null,"hours","hours",58380855),goog.date.Interval.HOURS,new cljs.core.Keyword(null,"days","days",-1394072564),goog.date.Interval.DAYS,new cljs.core.Keyword(null,"months","months",-45571637),goog.date.Interval.MONTHS,new cljs.core.Keyword(null,"years","years",-1298579689),goog.date.Interval.YEARS], null);
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
var date_SINGLEQUOTE_ = date.clone();
var __GT_goog_interval = ((function (date_SINGLEQUOTE_){
return (function (op,interval,value){
if(cljs.core.truth_((function (){var and__27183__auto__ = interval;
if(cljs.core.truth_(and__27183__auto__)){
return value;
} else {
return and__27183__auto__;
}
})())){
return (new goog.date.Interval(interval,op.call(null,(0),value)));
} else {
return null;
}
});})(date_SINGLEQUOTE_))
;
var seq__41686_41696 = cljs.core.seq.call(null,p);
var chunk__41687_41697 = null;
var count__41688_41698 = (0);
var i__41689_41699 = (0);
while(true){
if((i__41689_41699 < count__41688_41698)){
var vec__41690_41700 = cljs.core._nth.call(null,chunk__41687_41697,i__41689_41699);
var k_41701 = cljs.core.nth.call(null,vec__41690_41700,(0),null);
var v_41702 = cljs.core.nth.call(null,vec__41690_41700,(1),null);
var temp__4655__auto___41703 = cljs_time.core.periods.call(null,k_41701);
if(cljs.core.truth_(temp__4655__auto___41703)){
var period_41704 = temp__4655__auto___41703;
var temp__4657__auto___41705 = __GT_goog_interval.call(null,operator,period_41704,v_41702);
if(cljs.core.truth_(temp__4657__auto___41705)){
var i_41706 = temp__4657__auto___41705;
date_SINGLEQUOTE_.add(i_41706);
} else {
}
} else {
var temp__4657__auto___41707 = cljs_time.core.period_fns.call(null,k_41701);
if(cljs.core.truth_(temp__4657__auto___41707)){
var f_41708 = temp__4657__auto___41707;
f_41708.call(null,date_SINGLEQUOTE_,operator,v_41702);
} else {
}
}

var G__41709 = seq__41686_41696;
var G__41710 = chunk__41687_41697;
var G__41711 = count__41688_41698;
var G__41712 = (i__41689_41699 + (1));
seq__41686_41696 = G__41709;
chunk__41687_41697 = G__41710;
count__41688_41698 = G__41711;
i__41689_41699 = G__41712;
continue;
} else {
var temp__4657__auto___41713 = cljs.core.seq.call(null,seq__41686_41696);
if(temp__4657__auto___41713){
var seq__41686_41714__$1 = temp__4657__auto___41713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41686_41714__$1)){
var c__28034__auto___41715 = cljs.core.chunk_first.call(null,seq__41686_41714__$1);
var G__41716 = cljs.core.chunk_rest.call(null,seq__41686_41714__$1);
var G__41717 = c__28034__auto___41715;
var G__41718 = cljs.core.count.call(null,c__28034__auto___41715);
var G__41719 = (0);
seq__41686_41696 = G__41716;
chunk__41687_41697 = G__41717;
count__41688_41698 = G__41718;
i__41689_41699 = G__41719;
continue;
} else {
var vec__41693_41720 = cljs.core.first.call(null,seq__41686_41714__$1);
var k_41721 = cljs.core.nth.call(null,vec__41693_41720,(0),null);
var v_41722 = cljs.core.nth.call(null,vec__41693_41720,(1),null);
var temp__4655__auto___41723 = cljs_time.core.periods.call(null,k_41721);
if(cljs.core.truth_(temp__4655__auto___41723)){
var period_41724 = temp__4655__auto___41723;
var temp__4657__auto___41725__$1 = __GT_goog_interval.call(null,operator,period_41724,v_41722);
if(cljs.core.truth_(temp__4657__auto___41725__$1)){
var i_41726 = temp__4657__auto___41725__$1;
date_SINGLEQUOTE_.add(i_41726);
} else {
}
} else {
var temp__4657__auto___41727__$1 = cljs_time.core.period_fns.call(null,k_41721);
if(cljs.core.truth_(temp__4657__auto___41727__$1)){
var f_41728 = temp__4657__auto___41727__$1;
f_41728.call(null,date_SINGLEQUOTE_,operator,v_41722);
} else {
}
}

var G__41729 = cljs.core.next.call(null,seq__41686_41714__$1);
var G__41730 = null;
var G__41731 = (0);
var G__41732 = (0);
seq__41686_41696 = G__41729;
chunk__41687_41697 = G__41730;
count__41688_41698 = G__41731;
i__41689_41699 = G__41732;
continue;
}
} else {
}
}
break;
}

return date_SINGLEQUOTE_;
});
});
cljs_time.core.compare_local_dates = (function cljs_time$core$compare_local_dates(o,other){
var yo = o.getYear();
var yother = other.getYear();
var dayo = o.getDayOfYear();
var dayother = other.getDayOfYear();
if(cljs.core.not_EQ_.call(null,yo,yother)){
return (yo - yother);
} else {
if(cljs.core.not_EQ_.call(null,dayo,dayother)){
return (dayo - dayother);
} else {
return (0);

}
}
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return this$__$1.equals(that);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (cljs_time.core.compare_local_dates.call(null,this$__$1,that) > (0));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (cljs_time.core.compare_local_dates.call(null,this$__$1,that) < (0));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
});
cljs_time.core.utc = ({"id": "UTC", "std_offset": (0), "names": new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null), "transitions": cljs.core.PersistentVector.EMPTY});
cljs_time.core.default_ms_fn = (function cljs_time$core$default_ms_fn(){
return (function (){
return (new goog.date.UtcDateTime()).getTime();
});
});
cljs_time.core.offset_ms_fn = (function cljs_time$core$offset_ms_fn(offset){
return (function (){
return ((new goog.date.UtcDateTime()).getTime() + offset);
});
});
cljs_time.core.static_ms_fn = (function cljs_time$core$static_ms_fn(ms){
return (function (){
return ms;
});
});
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.default_ms_fn.call(null);
/**
 * Returns a DateTime for the current instant in the UTC time zone.
 */
cljs_time.core.now = (function cljs_time$core$now(){
var G__41733 = (new goog.date.UtcDateTime());
G__41733.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__41733;
});
/**
 * Returns a local DateTime for the current instant without date or time zone
 *   in the current time zone.
 */
cljs_time.core.time_now = (function cljs_time$core$time_now(){
var G__41734 = (new goog.date.DateTime());
G__41734.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__41734;
});
cljs_time.core.at_midnight = (function cljs_time$core$at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__41735 = datetime__$1;
G__41735.setHours((0));

G__41735.setMinutes((0));

G__41735.setSeconds((0));

G__41735.setMilliseconds((0));

return G__41735;
});
/**
 * Returns a DateTime for today at midnight in the UTC time zone.
 */
cljs_time.core.today_at_midnight = (function cljs_time$core$today_at_midnight(){
return cljs_time.core.at_midnight.call(null,cljs_time.core.now.call(null));
});
/**
 * Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
 */
cljs_time.core.epoch = (function cljs_time$core$epoch(){
var G__41736 = (new goog.date.UtcDateTime());
G__41736.setTime((0));

return G__41736;
});
/**
 * Constructs and returns a new DateTime at midnight in UTC.
 * 
 *   Specify the year, month of year, day of month. Note that month and day are
 *   1-indexed. Any number of least-significant components can be ommited, in
 *   which case they will default to 1.
 */
cljs_time.core.date_midnight = (function cljs_time$core$date_midnight(var_args){
var G__41738 = arguments.length;
switch (G__41738) {
case 1:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_midnight.call(null,year,(1),(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_midnight.call(null,year,month,(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});

cljs_time.core.date_midnight.cljs$lang$maxFixedArity = 3;

/**
 * Constructs and returns a new DateTime in UTC.
 * 
 *   Specify the year, month of year, day of month, hour of day, minute if hour,
 *   second of minute, and millisecond of second. Note that month and day are
 *   1-indexed while hour, second, minute, and millis are 0-indexed.
 * 
 *   Any number of least-significant components can be ommited, in which case
 *   they will default to 1 or 0 as appropriate.
 */
cljs_time.core.date_time = (function cljs_time$core$date_time(var_args){
var G__41741 = arguments.length;
switch (G__41741) {
case 1:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.date_time.cljs$lang$maxFixedArity = 7;

/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month of year, day of month, hour of day, minute of hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.local_date_time = (function cljs_time$core$local_date_time(var_args){
var G__41744 = arguments.length;
switch (G__41744) {
case 1:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.local_date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.local_date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.local_date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.local_date_time.cljs$lang$maxFixedArity = 7;

/**
 * Constructs and returns a new goog.date.Date in the local timezone.
 * Specify the year, month, and day.
 */
cljs_time.core.local_date = (function cljs_time$core$local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
 * Constructs and returns a new goog.date.Date representing today in the local timezone.
 */
cljs_time.core.today = (function cljs_time$core$today(){
return (new goog.date.Date((new Date(cljs_time.core._STAR_ms_fn_STAR_.call(null)))));
});
/**
 * Returns a timezone map for the given offset, specified either in hours or
 *   hours and minutes.
 */
cljs_time.core.time_zone_for_offset = (function cljs_time$core$time_zone_for_offset(var_args){
var G__41747 = arguments.length;
switch (G__41747) {
case 1:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return cljs_time.core.time_zone_for_offset.call(null,hours,null);
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
var sign = (((hours < (0)))?new cljs.core.Keyword(null,"-","-",-2112348439):new cljs.core.Keyword(null,"+","+",1913524883));
var fmt = ["UTC%s%02d",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1,minutes):cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1));
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),tz_name,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__27195__auto__ = minutes;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (0);
}
})(),(0)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),"-",new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.core","time-zone","cljs-time.core/time-zone",751963705)], null));
});

cljs_time.core.time_zone_for_offset.cljs$lang$maxFixedArity = 2;

/**
 * Returns the default timezone map for the current environment.
 */
cljs_time.core.default_time_zone = (function cljs_time$core$default_time_zone(){
var offset = (function (){var G__41749 = (new goog.date.DateTime());
G__41749.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__41749;
})().getTimezoneOffset();
var hours = (((-1) * offset) / (60));
return cljs_time.core.time_zone_for_offset.call(null,(hours | (0)),cljs.core.mod.call(null,hours,(1)));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to the default
 *   (local) timezone.
 */
cljs_time.core.to_default_time_zone = (function cljs_time$core$to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
});
/**
 * Assuming `dt` is in the Local timezone, returns a UtcDateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to the UTC
 *   timezone.
 */
cljs_time.core.to_utc_time_zone = (function cljs_time$core$to_utc_time_zone(dt){
return goog.date.UtcDateTime.fromTimestamp(dt.getTime());
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the default (local) timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_default_time_zone = (function cljs_time$core$from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
 * Assuming `dt` is in the local timezone, returns a UtcDateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the UTC timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_utc_time_zone = (function cljs_time$core$from_utc_time_zone(dt){
var year = dt.getYear();
var month = dt.getMonth();
var date = dt.getDate();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,goog.date.Date,cljs.core.type.call(null,dt)))){
return (new goog.date.UtcDateTime(year,month,date));
} else {
return (new goog.date.UtcDateTime(year,month,date,dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
}
});
/**
 * Given a number, returns a Period representing that many years.
 *   Without an argument, returns a Period representing only years.
 */
cljs_time.core.years = (function cljs_time$core$years(var_args){
var G__41751 = arguments.length;
switch (G__41751) {
case 0:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.years.call(null,null);
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),n);
});

cljs_time.core.years.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many months.
 *   Without an argument, returns a Period representing only months.
 */
cljs_time.core.months = (function cljs_time$core$months(var_args){
var G__41754 = arguments.length;
switch (G__41754) {
case 0:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.months.call(null,null);
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"months","months",-45571637),n);
});

cljs_time.core.months.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many weeks.
 *   Without an argument, returns a Period representing only weeks.
 */
cljs_time.core.weeks = (function cljs_time$core$weeks(var_args){
var G__41757 = arguments.length;
switch (G__41757) {
case 0:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.weeks.call(null,null);
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),n);
});

cljs_time.core.weeks.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many days.
 *   Without an argument, returns a Period representing only days.
 */
cljs_time.core.days = (function cljs_time$core$days(var_args){
var G__41760 = arguments.length;
switch (G__41760) {
case 0:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.days.call(null,null);
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),n);
});

cljs_time.core.days.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many hours.
 *   Without an argument, returns a Period representing only hours.
 */
cljs_time.core.hours = (function cljs_time$core$hours(var_args){
var G__41763 = arguments.length;
switch (G__41763) {
case 0:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.hours.call(null,null);
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),n);
});

cljs_time.core.hours.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many minutes.
 *   Without an argument, returns a Period representing only minutes.
 */
cljs_time.core.minutes = (function cljs_time$core$minutes(var_args){
var G__41766 = arguments.length;
switch (G__41766) {
case 0:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.minutes.call(null,null);
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),n);
});

cljs_time.core.minutes.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many seconds.
 *   Without an argument, returns a Period representing only seconds.
 */
cljs_time.core.seconds = (function cljs_time$core$seconds(var_args){
var G__41769 = arguments.length;
switch (G__41769) {
case 0:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.seconds.call(null,null);
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),n);
});

cljs_time.core.seconds.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many milliseconds.
 *   Without an argument, returns a Period representing only milliseconds.
 */
cljs_time.core.millis = (function cljs_time$core$millis(var_args){
var G__41772 = arguments.length;
switch (G__41772) {
case 0:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.millis.call(null,null);
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),n);
});

cljs_time.core.millis.cljs$lang$maxFixedArity = 1;

/**
 * Returns a new date/time corresponding to the given date/time moved
 *   forwards by the given Period(s).
 */
cljs_time.core.plus = (function cljs_time$core$plus(var_args){
var G__41778 = arguments.length;
switch (G__41778) {
case 2:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___41780 = arguments.length;
var i__28365__auto___41781 = (0);
while(true){
if((i__28365__auto___41781 < len__28364__auto___41780)){
args_arr__28383__auto__.push((arguments[i__28365__auto___41781]));

var G__41782 = (i__28365__auto___41781 + (1));
i__28365__auto___41781 = G__41782;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((2)),(0),null));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28384__auto__);

}
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.plus_.call(null,dt,p);
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.plus_,cljs_time.core.plus_.call(null,dt,p),ps);
});

cljs_time.core.plus.cljs$lang$applyTo = (function (seq41775){
var G__41776 = cljs.core.first.call(null,seq41775);
var seq41775__$1 = cljs.core.next.call(null,seq41775);
var G__41777 = cljs.core.first.call(null,seq41775__$1);
var seq41775__$2 = cljs.core.next.call(null,seq41775__$1);
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic(G__41776,G__41777,seq41775__$2);
});

cljs_time.core.plus.cljs$lang$maxFixedArity = (2);

/**
 * Returns a new date/time object corresponding to the given date/time
 *   moved backwards by the given Period(s).
 */
cljs_time.core.minus = (function cljs_time$core$minus(var_args){
var G__41787 = arguments.length;
switch (G__41787) {
case 2:
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___41789 = arguments.length;
var i__28365__auto___41790 = (0);
while(true){
if((i__28365__auto___41790 < len__28364__auto___41789)){
args_arr__28383__auto__.push((arguments[i__28365__auto___41790]));

var G__41791 = (i__28365__auto___41790 + (1));
i__28365__auto___41790 = G__41791;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((2)),(0),null));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28384__auto__);

}
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.minus_.call(null,dt,p);
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.minus_,cljs_time.core.minus_.call(null,dt,p),ps);
});

cljs_time.core.minus.cljs$lang$applyTo = (function (seq41784){
var G__41785 = cljs.core.first.call(null,seq41784);
var seq41784__$1 = cljs.core.next.call(null,seq41784);
var G__41786 = cljs.core.first.call(null,seq41784__$1);
var seq41784__$2 = cljs.core.next.call(null,seq41784__$1);
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic(G__41785,G__41786,seq41784__$2);
});

cljs_time.core.minus.cljs$lang$maxFixedArity = (2);

/**
 * Returns a DateTime a supplied period before the present.
 * 
 *   e.g. `(-> 5 years ago)`
 */
cljs_time.core.ago = (function cljs_time$core$ago(period){
return cljs_time.core.minus.call(null,cljs_time.core.now.call(null),period);
});
/**
 * Returns a DateTime for yesterday relative to now
 */
cljs_time.core.yesterday = (function cljs_time$core$yesterday(){
return cljs_time.core.ago.call(null,cljs_time.core.days.call(null,(1)));
});
/**
 * Returns a DateTime a supplied period after the present.
 *   e.g. `(-> 30 minutes from-now)`
 */
cljs_time.core.from_now = (function cljs_time$core$from_now(period){
return cljs_time.core.plus.call(null,cljs_time.core.now.call(null),period);
});
/**
 * Returns the earliest of the supplied DateTimes
 */
cljs_time.core.earliest = (function cljs_time$core$earliest(var_args){
var G__41793 = arguments.length;
switch (G__41793) {
case 2:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.earliest,dts);
});

cljs_time.core.earliest.cljs$lang$maxFixedArity = 2;

/**
 * Returns the latest of the supplied DateTimes
 */
cljs_time.core.latest = (function cljs_time$core$latest(var_args){
var G__41796 = arguments.length;
switch (G__41796) {
case 2:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.latest,dts);
});

cljs_time.core.latest.cljs$lang$maxFixedArity = 2;

/**
 * Returns the start DateTime of an Interval.
 */
cljs_time.core.start = (function cljs_time$core$start(in$){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns the end DateTime of an Interval.
 */
cljs_time.core.end = (function cljs_time$core$end(in$){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns an Interval with an end DateTime the specified Period after the end
 *   of the given Interval
 */
cljs_time.core.extend = (function cljs_time$core$extend(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41800 = arguments.length;
var i__28365__auto___41801 = (0);
while(true){
if((i__28365__auto___41801 < len__28364__auto___41800)){
args__28371__auto__.push((arguments[i__28365__auto___41801]));

var G__41802 = (i__28365__auto___41801 + (1));
i__28365__auto___41801 = G__41802;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic = (function (in$,by){
return cljs.core.assoc.call(null,in$,new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.apply.call(null,cljs_time.core.plus,cljs_time.core.end.call(null,in$),by));
});

cljs_time.core.extend.cljs$lang$maxFixedArity = (1);

cljs_time.core.extend.cljs$lang$applyTo = (function (seq41798){
var G__41799 = cljs.core.first.call(null,seq41798);
var seq41798__$1 = cljs.core.next.call(null,seq41798);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic(G__41799,seq41798__$1);
});

cljs_time.core.month_range = (function cljs_time$core$month_range(p__41805){
var map__41806 = p__41805;
var map__41806__$1 = ((((!((map__41806 == null)))?((((map__41806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41806):map__41806);
var start = cljs.core.get.call(null,map__41806__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__41806__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.take_while.call(null,((function (map__41806,map__41806__$1,start,end){
return (function (p1__41804_SHARP_){
return cljs.core.not.call(null,cljs_time.core.after_QMARK_.call(null,p1__41804_SHARP_,end));
});})(map__41806,map__41806__$1,start,end))
,cljs.core.map.call(null,((function (map__41806,map__41806__$1,start,end){
return (function (p1__41803_SHARP_){
return cljs_time.core.plus.call(null,start,cljs_time.core.months.call(null,(p1__41803_SHARP_ + (1))));
});})(map__41806,map__41806__$1,start,end))
,cljs.core.range.call(null)));
});
cljs_time.core.total_days_in_whole_months = (function cljs_time$core$total_days_in_whole_months(interval){
return cljs.core.map.call(null,(function (p1__41808_SHARP_){
return p1__41808_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range.call(null,interval));
});
/**
 * Returns the number of months in the given Interval.
 * 
 *   For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
 *   returns 1 month.
 * 
 *   Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
 */
cljs_time.core.in_months_ = (function cljs_time$core$in_months_(p__41809){
var map__41810 = p__41809;
var map__41810__$1 = ((((!((map__41810 == null)))?((((map__41810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41810):map__41810);
var interval = map__41810__$1;
var start = cljs.core.get.call(null,map__41810__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__41810__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.count.call(null,cljs_time.core.total_days_in_whole_months.call(null,interval));
});
/**
 * Returns the number of standard years in the given Interval.
 */
cljs_time.core.in_years_ = (function cljs_time$core$in_years_(p__41812){
var map__41813 = p__41812;
var map__41813__$1 = ((((!((map__41813 == null)))?((((map__41813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41813):map__41813);
var start = cljs.core.get.call(null,map__41813__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__41813__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var sm = cljs_time.core.month.call(null,start);
var sd = cljs_time.core.day.call(null,start);
var em = cljs_time.core.month.call(null,end);
var ed = cljs_time.core.day.call(null,end);
var d1 = (cljs.core.truth_((function (){var and__27183__auto__ = cljs_time.core._EQ_.call(null,sm,(2));
if(cljs.core.truth_(and__27183__auto__)){
var and__27183__auto____$1 = cljs_time.core._EQ_.call(null,sd,(29));
if(cljs.core.truth_(and__27183__auto____$1)){
var and__27183__auto____$2 = cljs_time.core._EQ_.call(null,em,(2));
if(cljs.core.truth_(and__27183__auto____$2)){
return cljs_time.core._EQ_.call(null,ed,(28));
} else {
return and__27183__auto____$2;
}
} else {
return and__27183__auto____$1;
}
} else {
return and__27183__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year.call(null,end) - cljs_time.core.year.call(null,start)) - d1);
});
cljs_time.core.conversion_error = (function cljs_time$core$conversion_error(from,to){
var from__$1 = clojure.string.capitalize.call(null,cljs.core.name.call(null,from));
var to__$1 = cljs.core.name.call(null,to);
throw cljs.core.ex_info.call(null,cljs_time.internal.core.format.call(null,"%s cannot be converted to %s",from__$1,to__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsupported-operation","unsupported-operation",1890540953)], null));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__41815){
var map__41816 = p__41815;
var map__41816__$1 = ((((!((map__41816 == null)))?((((map__41816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41816):map__41816);
var millis = cljs.core.get.call(null,map__41816__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__41816__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__41816__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__41816__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__41816__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__41816__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__41816__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__41816__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__41818 = this;
var map__41818__$1 = ((((!((map__41818 == null)))?((((map__41818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41818):map__41818);
var millis__$1 = cljs.core.get.call(null,map__41818__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__41818__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__41818__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__41818__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__41818__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__41818__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__41818__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__41818__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__41820){
var map__41821 = p__41820;
var map__41821__$1 = ((((!((map__41821 == null)))?((((map__41821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41821):map__41821);
var millis = cljs.core.get.call(null,map__41821__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__41821__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__41821__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__41821__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__41821__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__41821__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__41821__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__41821__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__41823 = this;
var map__41823__$1 = ((((!((map__41823 == null)))?((((map__41823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41823):map__41823);
var millis__$1 = cljs.core.get.call(null,map__41823__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__41823__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__41823__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__41823__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__41823__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__41823__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__41823__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__41823__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__27195__auto__ = years__$1;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__41825){
var map__41826 = p__41825;
var map__41826__$1 = ((((!((map__41826 == null)))?((((map__41826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41826):map__41826);
var millis = cljs.core.get.call(null,map__41826__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__41826__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__41826__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__41826__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__41826__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__41826__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__41826__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__41826__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__41828 = this;
var map__41828__$1 = ((((!((map__41828 == null)))?((((map__41828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41828):map__41828);
var millis__$1 = cljs.core.get.call(null,map__41828__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__41828__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__41828__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__41828__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__41828__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__41828__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__41828__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__41828__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__41830){
var map__41831 = p__41830;
var map__41831__$1 = ((((!((map__41831 == null)))?((((map__41831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41831):map__41831);
var start = cljs.core.get.call(null,map__41831__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__41831__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__41833 = this;
var map__41833__$1 = ((((!((map__41833 == null)))?((((map__41833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41833):map__41833);
var start__$1 = cljs.core.get.call(null,map__41833__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__41833__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return (end__$1.getTime() - start__$1.getTime());
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_months_.call(null,this$__$1);
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_years_.call(null,this$__$1);
});
/**
 * With 2 arguments: Returns true if the given Interval contains the given
 *   DateTime. Note that if the DateTime is exactly equal to the
 *   end of the interval, this function returns false.
 * 
 *   With 3 arguments: Returns true if the start DateTime is
 *   equal to or before and the end DateTime is equal to or after the test
 *   DateTime.
 */
cljs_time.core.within_QMARK_ = (function cljs_time$core$within_QMARK_(var_args){
var G__41836 = arguments.length;
switch (G__41836) {
case 2:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__41837,date){
var map__41838 = p__41837;
var map__41838__$1 = ((((!((map__41838 == null)))?((((map__41838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41838):map__41838);
var start = cljs.core.get.call(null,map__41838__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__41838__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs_time.core.within_QMARK_.call(null,start,end,date);
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,date){
var or__27195__auto__ = cljs_time.core._EQ_.call(null,start,date);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
var and__27183__auto__ = cljs_time.core.before_QMARK_.call(null,start,date);
if(cljs.core.truth_(and__27183__auto__)){
return cljs_time.core.after_QMARK_.call(null,end,date);
} else {
return and__27183__auto__;
}
}
});

cljs_time.core.within_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * With 2 arguments: Returns true of the two given Intervals overlap.
 *   Note that intervals that satisfy abuts? do not satisfy overlaps?
 * 
 *   With 4 arguments: Returns true if the range specified by start-a and end-a
 *   overlaps with the range specified by start-b and end-b.
 */
cljs_time.core.overlaps_QMARK_ = (function cljs_time$core$overlaps_QMARK_(var_args){
var G__41842 = arguments.length;
switch (G__41842) {
case 2:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__41843,p__41844){
var map__41845 = p__41843;
var map__41845__$1 = ((((!((map__41845 == null)))?((((map__41845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41845):map__41845);
var start_a = cljs.core.get.call(null,map__41845__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__41845__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__41846 = p__41844;
var map__41846__$1 = ((((!((map__41846 == null)))?((((map__41846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41846):map__41846);
var start_b = cljs.core.get.call(null,map__41846__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__41846__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var and__27183__auto__ = cljs.core.not.call(null,(function (){var or__27195__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
})());
if(and__27183__auto__){
return cljs_time.core.overlaps_QMARK_.call(null,start_a,end_a,start_b,end_b);
} else {
return and__27183__auto__;
}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (start_a,end_a,start_b,end_b){
var or__27195__auto__ = (function (){var and__27183__auto__ = cljs_time.core.before_QMARK_.call(null,start_b,end_a);
if(cljs.core.truth_(and__27183__auto__)){
return cljs_time.core.after_QMARK_.call(null,end_b,start_a);
} else {
return and__27183__auto__;
}
})();
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
var or__27195__auto____$1 = (function (){var and__27183__auto__ = cljs_time.core.after_QMARK_.call(null,end_b,start_a);
if(cljs.core.truth_(and__27183__auto__)){
return cljs_time.core.before_QMARK_.call(null,start_b,end_a);
} else {
return and__27183__auto__;
}
})();
if(cljs.core.truth_(or__27195__auto____$1)){
return or__27195__auto____$1;
} else {
var or__27195__auto____$2 = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__27195__auto____$2)){
return or__27195__auto____$2;
} else {
return cljs_time.core._EQ_.call(null,start_b,end_a);
}
}
}
});

cljs_time.core.overlaps_QMARK_.cljs$lang$maxFixedArity = 4;

/**
 * Returns an Interval representing the overlap of the specified Intervals.
 *  Returns nil if the Intervals do not overlap.
 *  The first argument must not be nil.
 *  If the second argument is nil then the overlap of the first argument
 *  and a zero duration interval with both start and end times equal to the
 *  current time is returned.
 */
cljs_time.core.overlap = (function cljs_time$core$overlap(i_a,i_b){
if((i_b == null)){
var n = cljs_time.core.now.call(null);
return cljs_time.core.overlap.call(null,i_a,cljs_time.core.interval.call(null,n,n));
} else {
if(cljs.core.truth_(cljs_time.core.overlaps_QMARK_.call(null,i_a,i_b))){
return cljs_time.core.interval.call(null,cljs_time.core.latest.call(null,cljs_time.core.start.call(null,i_a),cljs_time.core.start.call(null,i_b)),cljs_time.core.earliest.call(null,cljs_time.core.end.call(null,i_a),cljs_time.core.end.call(null,i_b)));
} else {
return null;

}
}
});
/**
 * Returns true if Interval a abuts b, i.e. then end of a is exactly the
 *   beginning of b.
 */
cljs_time.core.abuts_QMARK_ = (function cljs_time$core$abuts_QMARK_(p__41850,p__41851){
var map__41852 = p__41850;
var map__41852__$1 = ((((!((map__41852 == null)))?((((map__41852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41852):map__41852);
var start_a = cljs.core.get.call(null,map__41852__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__41852__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__41853 = p__41851;
var map__41853__$1 = ((((!((map__41853 == null)))?((((map__41853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41853):map__41853);
var start_b = cljs.core.get.call(null,map__41853__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__41853__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var or__27195__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
});
cljs_time.core.date_QMARK_ = (function cljs_time$core$date_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs_time$core$DateTimeProtocol$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,x);
}
});
cljs_time.core.interval_QMARK_ = (function cljs_time$core$interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function cljs_time$core$period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function cljs_time$core$period_type_QMARK_(type,x){
var and__27183__auto__ = cljs_time.core.period_QMARK_.call(null,x);
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.contains_QMARK_.call(null,x,type);
} else {
return and__27183__auto__;
}
});
/**
 * Returns true if the given value is an instance of Years
 */
cljs_time.core.years_QMARK_ = (function cljs_time$core$years_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),val);
});
/**
 * Returns true if the given value is an instance of Months
 */
cljs_time.core.months_QMARK_ = (function cljs_time$core$months_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"months","months",-45571637),val);
});
/**
 * Returns true if the given value is an instance of Weeks
 */
cljs_time.core.weeks_QMARK_ = (function cljs_time$core$weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),val);
});
/**
 * Returns true if the given value is an instance of Days
 */
cljs_time.core.days_QMARK_ = (function cljs_time$core$days_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),val);
});
/**
 * Returns true if the given value is an instance of Hours
 */
cljs_time.core.hours_QMARK_ = (function cljs_time$core$hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),val);
});
/**
 * Returns true if the given value is an instance of Minutes
 */
cljs_time.core.minutes_QMARK_ = (function cljs_time$core$minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),val);
});
/**
 * Returns true if the given value is an instance of Seconds
 */
cljs_time.core.seconds_QMARK_ = (function cljs_time$core$seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),val);
});
cljs_time.core.mins_ago = (function cljs_time$core$mins_ago(d){
return cljs_time.core.in_minutes.call(null,cljs_time.core.interval.call(null,d,cljs_time.core.now.call(null)));
});
cljs_time.core.last_day_of_the_month = (function cljs_time$core$last_day_of_the_month(var_args){
var G__41858 = arguments.length;
switch (G__41858) {
case 1:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.last_day_of_the_month_.call(null,dt);
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.last_day_of_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.number_of_days_in_the_month = (function cljs_time$core$number_of_days_in_the_month(var_args){
var G__41861 = arguments.length;
switch (G__41861) {
case 1:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.number_of_days_in_the_month.call(null,cljs_time.core.year.call(null,dt),cljs_time.core.month.call(null,dt));
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.call(null,year,month).getDate();
});

cljs_time.core.number_of_days_in_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.first_day_of_the_month = (function cljs_time$core$first_day_of_the_month(var_args){
var G__41864 = arguments.length;
switch (G__41864) {
case 1:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.first_day_of_the_month_.call(null,dt);
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.first_day_of_the_month.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
cljs_time.core.IToPeriod = function(){};

cljs_time.core.__GT_period = (function cljs_time$core$__GT_period(obj){
if((!((obj == null))) && (!((obj.cljs_time$core$IToPeriod$__GT_period$arity$1 == null)))){
return obj.cljs_time$core$IToPeriod$__GT_period$arity$1(obj);
} else {
var x__27878__auto__ = (((obj == null))?null:obj);
var m__27879__auto__ = (cljs_time.core.__GT_period[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,obj);
} else {
var m__27879__auto____$1 = (cljs_time.core.__GT_period["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"IToPeriod.->period",obj);
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (p__41866){
var map__41867 = p__41866;
var map__41867__$1 = ((((!((map__41867 == null)))?((((map__41867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41867):map__41867);
var interval = map__41867__$1;
var start = cljs.core.get.call(null,map__41867__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__41867__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__41869 = this;
var map__41869__$1 = ((((!((map__41869 == null)))?((((map__41869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41869):map__41869);
var interval__$1 = map__41869__$1;
var start__$1 = cljs.core.get.call(null,map__41869__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__41869__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var years = cljs_time.core.in_years.call(null,interval__$1);
var start_year = cljs_time.core.year.call(null,start__$1);
var leap_years = cljs.core.count.call(null,cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.call(null,start_year,(start_year + years)))));
var start_month = cljs_time.core.month.call(null,start__$1);
var days_in_months = cljs_time.core.total_days_in_whole_months.call(null,interval__$1);
var months = (cljs.core.count.call(null,days_in_months) - (years * (12)));
var days_to_remove = cljs.core.reduce.call(null,cljs.core._PLUS_,days_in_months);
var days = (cljs_time.core.in_days.call(null,interval__$1) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours.call(null,interval__$1) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes.call(null,interval__$1) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds.call(null,interval__$1) - seconds_to_remove);
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),years,new cljs.core.Keyword(null,"months","months",-45571637),months,new cljs.core.Keyword(null,"days","days",-1394072564),days,new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds,new cljs.core.Keyword(null,"millis","millis",-1338288387),(cljs_time.core.in_millis.call(null,interval__$1) - ((1000) * (seconds + seconds_to_remove))));
});

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (period){
var period__$1 = this;
return period__$1;
});
cljs_time.core.today_at = (function cljs_time$core$today_at(var_args){
var G__41872 = arguments.length;
switch (G__41872) {
case 4:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var G__41873 = (new goog.date.UtcDateTime());
G__41873.setHours(hours);

G__41873.setMinutes(minutes);

G__41873.setSeconds(seconds);

G__41873.setMilliseconds(millis);

return G__41873;
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljs_time.core.today_at.call(null,hours,minutes,seconds,(0));
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljs_time.core.today_at.call(null,hours,minutes,(0));
});

cljs_time.core.today_at.cljs$lang$maxFixedArity = 4;

cljs_time.core.do_at_STAR_ = (function cljs_time$core$do_at_STAR_(base_date_time,body_fn){
var _STAR_ms_fn_STAR_41875 = cljs_time.core._STAR_ms_fn_STAR_;
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.static_ms_fn.call(null,base_date_time.getTime());

try{return body_fn.call(null);
}finally {cljs_time.core._STAR_ms_fn_STAR_ = _STAR_ms_fn_STAR_41875;
}});
/**
 * Floors the given date-time dt to the given time unit dt-fn,
 *  e.g. (floor (now) hour) returns (now) for all units
 *  up to and including the hour
 */
cljs_time.core.floor = (function cljs_time$core$floor(dt,dt_fn){
var dt_fns = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.year,cljs_time.core.month,cljs_time.core.day,cljs_time.core.hour,cljs_time.core.minute,cljs_time.core.second,cljs_time.core.milli], null);
return cljs.core.apply.call(null,cljs_time.core.date_time,cljs.core.map.call(null,cljs.core.apply,cljs.core.concat.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,dt_fn),dt_fns),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt_fn], null)),cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt], null))));
});

//# sourceMappingURL=core.js.map?rel=1515855037358
