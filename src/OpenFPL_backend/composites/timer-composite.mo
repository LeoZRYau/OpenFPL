import T "../types";
import Time "mo:base/Time";
import Iter "mo:base/Iter";
import Array "mo:base/Array";
import Timer "mo:base/Timer";
import Int "mo:base/Int";
import Buffer "mo:base/Buffer";

module {
  public class TimerComposite() {

    var timers : [T.TimerInfo] = [];

    private var gameweekBeginExpiredCallback : ?(() -> async ()) = null;
    private var gameKickOffExpiredCallback : ?(() -> async ()) = null;
    private var gameCompletedExpiredCallback : ?(() -> async ()) = null;
    private var injuryExpiredCallback : ?(() -> async ()) = null;
    private var loanExpiredCallback : ?(() -> async ()) = null;
    private var transferWindowStartCallback : ?(() -> async ()) = null;
    private var transferWindowEndCallback : ?(() -> async ()) = null;

    public func setCallbackFunctions(
      _gameweekBeginExpiredCallback : () -> async (),
      _gameKickOffExpiredCallback : () -> async (),
      _gameCompletedExpiredCallback : () -> async (),
      _loanExpiredCallback : () -> async (),
      _injuryExpiredCallback : () -> async (),
      _transferWindowStartCallback : () -> async (),
      _transferWindowEndCallback : () -> async (),
    ) {
      gameweekBeginExpiredCallback := ?_gameweekBeginExpiredCallback;
      gameKickOffExpiredCallback := ?_gameKickOffExpiredCallback;
      gameCompletedExpiredCallback := ?_gameCompletedExpiredCallback;
      loanExpiredCallback := ?_loanExpiredCallback;
      injuryExpiredCallback := ?_injuryExpiredCallback;
      transferWindowStartCallback := ?_transferWindowStartCallback;
      transferWindowEndCallback := ?_transferWindowEndCallback;
    };

    public func setTimer(time : Int, callbackName : Text) : async () {
      let duration : Timer.Duration = #seconds(Int.abs(time - Time.now()));
      await setAndBackupTimer(duration, callbackName);
    };

    public func removeExpiredTimers() : () {
      let currentTime = Time.now();
      timers := Array.filter<T.TimerInfo>(
        timers,
        func(timer : T.TimerInfo) : Bool {
          return timer.triggerTime > currentTime;
        },
      );
    };

    public func setAndBackupTimer(duration : Timer.Duration, callbackName : Text) : async () {
      let jobId : Timer.TimerId = switch (callbackName) {
        case "gameweekBeginExpired" {
          switch (gameweekBeginExpiredCallback) {
            case null { Timer.setTimer<system>(duration, defaultCallback) };
            case (?callback) { Timer.setTimer<system>(duration, callback) };
          };
        };
        case "gameKickOffExpired" {
          switch (gameKickOffExpiredCallback) {
            case null { Timer.setTimer<system>(duration, defaultCallback) };
            case (?callback) { Timer.setTimer<system>(duration, callback) };
          };
        };
        case "gameCompletedExpired" {
          switch (gameCompletedExpiredCallback) {
            case null { Timer.setTimer<system>(duration, defaultCallback) };
            case (?callback) { Timer.setTimer<system>(duration, callback) };
          };
        };
        case "loanExpired" {
          switch (loanExpiredCallback) {
            case null { Timer.setTimer<system>(duration, defaultCallback) };
            case (?callback) { Timer.setTimer<system>(duration, callback) };
          };
        };
        case "injuryExpired" {
          switch (injuryExpiredCallback) {
            case null { Timer.setTimer<system>(duration, defaultCallback) };
            case (?callback) { Timer.setTimer<system>(duration, callback) };
          };
        };
        case "transferWindowStart" {
          switch (transferWindowStartCallback) {
            case null { Timer.setTimer<system>(duration, defaultCallback) };
            case (?callback) { Timer.setTimer<system>(duration, callback) };
          };
        };
        case "transferWindowEnd" {
          switch (transferWindowEndCallback) {
            case null { Timer.setTimer<system>(duration, defaultCallback) };
            case (?callback) { Timer.setTimer<system>(duration, callback) };
          };
        };
        case _ {
          Timer.setTimer<system>(duration, defaultCallback);
        };
      };

      let triggerTime = switch (duration) {
        case (#seconds s) {
          Time.now() + s * 1_000_000_000;
        };
        case (#nanoseconds ns) {
          Time.now() + ns;
        };
      };

      let newTimerInfo : T.TimerInfo = {
        id = jobId;
        triggerTime = triggerTime;
        callbackName = callbackName;
      };

      var timerBuffer = Buffer.fromArray<T.TimerInfo>(timers);
      timerBuffer.add(newTimerInfo);
      timers := Buffer.toArray(timerBuffer);
    };

    private func recreateTimers() : async () {
      let currentTime = Time.now();
      for (timerInfo in Iter.fromArray(timers)) {
        let remainingDuration = timerInfo.triggerTime - currentTime;

        if (remainingDuration > 0) {
          let duration : Timer.Duration = #nanoseconds(Int.abs(remainingDuration));

          switch (timerInfo.callbackName) {
            case "gameweekBeginExpired" {
              switch (gameweekBeginExpiredCallback) {
                case null {};
                case (?callback) { ignore Timer.setTimer<system>(duration, callback) };
              };
            };
            case "gameKickOffExpired" {
              switch (gameKickOffExpiredCallback) {
                case null {};
                case (?callback) { ignore Timer.setTimer<system>(duration, callback) };
              };
            };
            case "gameCompletedExpired" {
              switch (gameCompletedExpiredCallback) {
                case null {};
                case (?callback) { ignore Timer.setTimer<system>(duration, callback) };
              };
            };
            case "loanExpired" {
              switch (loanExpiredCallback) {
                case null {};
                case (?callback) { ignore Timer.setTimer<system>(duration, callback) };
              };
            };
            case "injuryExpired" {
              switch (injuryExpiredCallback) {
                case null {};
                case (?callback) { ignore Timer.setTimer<system>(duration, callback) };
              };
            };
            case "transferWindowStart" {
              switch (transferWindowStartCallback) {
                case null {};
                case (?callback) { ignore Timer.setTimer<system>(duration, callback) };
              };
            };
            case "transferWindowEnd" {
              switch (transferWindowEndCallback) {
                case null {};
                case (?callback) { ignore Timer.setTimer<system>(duration, callback) };
              };
            };
            case _ {};
          };
        };
      };
    };

    private func defaultCallback() : async () {};

    public func getStableTimers() : [T.TimerInfo] {
      return timers;
    };

    public func setStableTimers(stable_timers : [T.TimerInfo]) : async () {
      timers := stable_timers;
      await recreateTimers();
    };
  };
};
