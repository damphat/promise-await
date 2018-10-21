#include <uv.h>
#include <v8.h>
#include <nan.h>

using namespace v8;

NAN_METHOD(uvRunDefault) {
  Nan::HandleScope scope;
  uv_run(uv_default_loop(), UV_RUN_DEFAULT);
  info.GetReturnValue().Set(Nan::Undefined());
}

NAN_METHOD(uvRunOnce) {
  Nan::HandleScope scope;
  uv_run(uv_default_loop(), UV_RUN_ONCE);
  info.GetReturnValue().Set(Nan::Undefined());
}

NAN_METHOD(uvRunNowait) {
  Nan::HandleScope scope;
  uv_run(uv_default_loop(), UV_RUN_NOWAIT);
  info.GetReturnValue().Set(Nan::Undefined());
}

static NAN_MODULE_INIT(init) {
  Nan::Set(target, Nan::New("uvRunDefault").ToLocalChecked(), Nan::GetFunction(Nan::New<FunctionTemplate>(uvRunDefault)).ToLocalChecked());
  Nan::Set(target, Nan::New("uvRunOnce").ToLocalChecked(), Nan::GetFunction(Nan::New<FunctionTemplate>(uvRunOnce)).ToLocalChecked());
  Nan::Set(target, Nan::New("uvRunNowait").ToLocalChecked(), Nan::GetFunction(Nan::New<FunctionTemplate>(uvRunNowait)).ToLocalChecked());
}

NODE_MODULE(lib, init)
