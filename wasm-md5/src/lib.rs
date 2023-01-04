extern crate wasm_bindgen;
extern crate md5;

use wasm_bindgen::prelude::*;
use md5::{Digest, Md5};

#[wasm_bindgen]
pub fn md5(input: &str)-> String {
    let mut hasher = Md5::new();

    hasher.update(input.as_bytes());

    let result = hasher.finalize();
    format!("{:x}", result)
}
